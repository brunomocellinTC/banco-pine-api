import { test } from '@playwright/test';
import evidence from '../../Data/har-observed-cases.json';
import type { GetOptions } from '../../Clients/swagger-api-client';
import { SwaggerGetRoute } from '../../Models/swagger-get-routes';

export interface HarCase {
  method: string;
  route: string;
  status: number;
  group: string;
  documented: boolean;
  deprecated: boolean;
  observations: number;
  query: Record<string, string>;
  pathParams: Record<string, string>;
  responseShape: { keys: string[]; itemNonNull: boolean | null };
  caseType: string;
}

/** Casos extraídos dos HARs sem headers, tokens, CPF, identificadores privados ou corpos. */
export const HAR_CASES: HarCase[] = evidence.cases as HarCase[];
export const GET_HAR_CASES = HAR_CASES.filter(c => c.method === 'GET');

function resolveValue(value: string): string | undefined {
  const matched = /^\$\{ENV:([A-Z][A-Z0-9_]*)\}$/.exec(value);
  if (matched) return process.env[matched[1]]?.trim() || undefined;
  if (!value || /^PREENCHER[_ -]/i.test(value)) return undefined;
  return value;
}

export function resolveHarOptions(c: Pick<HarCase,'query'|'pathParams'>): GetOptions | null {
  const query: Record<string,string> = {};
  const pathParams: Record<string,string> = {};
  for (const [k,v] of Object.entries(c.query || {})) {
    const resolved = resolveValue(v);
    if (resolved === undefined) return null;
    query[k] = resolved;
  }
  for (const [k,v] of Object.entries(c.pathParams || {})) {
    const resolved = resolveValue(v);
    if (resolved === undefined) return null;
    pathParams[k] = resolved;
  }
  return {query,pathParams};
}

export function harSuccessFixture(route: SwaggerGetRoute): GetOptions | null {
  const candidates = GET_HAR_CASES.filter(c => c.route === route && c.status >= 200 && c.status < 300);
  // Prefer no filtro, depois combinações com valores já observados no ambiente.
  candidates.sort((a,b) => {
    // Resposta com item presente é preferível a HTTP 200 com resultado vazio.
    const itemOrder = (b.responseShape.itemNonNull === true ? 1 : 0) - (a.responseShape.itemNonNull === true ? 1 : 0);
    if (itemOrder) return itemOrder;
    return (Object.keys(a.query).length + Object.keys(a.pathParams).length) -
      (Object.keys(b.query).length + Object.keys(b.pathParams).length);
  });
  // Para CEP, não usar '1' como massa de sucesso funcional, mesmo retornando 200.
  if (route === '/api/v1/Endereco/Cep/{cep}') {
    const verifiedCep = candidates.find(c => /^\d{8}$/.test(c.pathParams.cep || ''));
    if (verifiedCep) return resolveHarOptions(verifiedCep);
  }
  for (const c of candidates) {
    const opts = resolveHarOptions(c);
    if (opts) return opts;
  }
  return null;
}

export function annotateHarCase(c: HarCase): void {
  test.info().annotations.push({type:'HAR', description:`Observado HTTP ${c.status} (${c.observations}x em 18/11/2026)`});
  if (!c.documented) test.info().annotations.push({type:'DIVERGENCIA_SWAGGER', description:`HTTP ${c.status} não documentado para ${c.method} ${c.route}`});
  if (c.responseShape.itemNonNull === false) test.info().annotations.push({type:'MASSA', description:'item nulo no HAR: verificar sucesso funcional'});
}

export function explainCase(c: HarCase): string {
  const data = {...c.query,...c.pathParams};
  const readable = Object.entries(data).map(([key,val]) =>
    `${key}=${val.startsWith('${ENV:') ? '(env)' : val}`);
  return `${c.route} [${readable.length ? readable.join(', ') : 'sem filtros'}] (HAR HTTP ${c.status})`;
}
