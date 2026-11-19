import { expect, test } from '@playwright/test';
import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
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
  sources?: string[];
  responseContract?: ObservedShape;
  errorIdentity?: { fields: string[]; sha256: string };
  id?: string;
  authenticated?: boolean;
  capturedAt?: string[];
  request?: {body?: unknown; rawBodyEnv?: string; contentType?: string};
  requestRelations?: Array<{input: string; response: string; comparison: 'digits' | 'text'}>;
}

interface ObservedShape {
  types: string[];
  nullable: boolean;
  properties?: Record<string, ObservedShape>;
  items?: ObservedShape;
}

/** Casos extraídos dos HARs sem headers, tokens, CPF, identificadores privados ou corpos. */
const responseContracts = evidence.responseContracts as Record<string, ObservedShape>;
export const HAR_CASES: HarCase[] = evidence.cases.map(c => {
  const responseContract = responseContracts[c.responseContractRef];
  if (!responseContract) throw new Error(`Contrato HAR ausente para ${c.id}`);
  return {...c, responseContract};
}) as unknown as HarCase[];
export const GET_HAR_CASES = HAR_CASES.filter(c => c.method === 'GET');

/** Hierarquia explícita: o arquivo que registra o teste não vira grupo do Allure. */
export function allureHierarchy(group: string, endpoint: string, parent = 'automacao-api') {
  return [
    {type: 'allure.label.parentSuite', description: parent},
    {type: 'allure.label.suite', description: group},
    {type: 'allure.label.subSuite', description: endpoint},
  ];
}

let localValues: Record<string, unknown> | undefined;
function harVariable(name: string): unknown {
  if (process.env[name] !== undefined) return process.env[name];
  if (!localValues) {
    const file = path.resolve(process.cwd(), process.env.HAR_VALUES_FILE || 'Data/har-values.local.json');
    localValues = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
  }
  return localValues![name];
}

function resolveValue(value: string): string | undefined {
  const matched = /^\$\{ENV:([A-Z][A-Z0-9_]*)\}$/.exec(value);
  if (matched) {
    const resolved = harVariable(matched[1]);
    return typeof resolved === 'string' && resolved.trim() ? resolved.trim() : undefined;
  }
  if (/^PREENCHER[_ -]/i.test(value)) return undefined;
  return value;
}

/** Resolve os tipos originais do payload; valores privados ficam fora do arquivo versionado. */
export function resolveHarRequest(c: HarCase): {body?: unknown; rawBody?: string; contentType?: string} | null {
  let available = true;
  function resolve(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(resolve);
    if (value && typeof value === 'object') {
      const object = value as Record<string, unknown>;
      if (typeof object.$env === 'string') {
        const input = harVariable(object.$env);
        if (input === undefined) { available = false; return undefined; }
        const result = object.type === 'number' && typeof input === 'string' && input.trim() !== ''
          ? Number(input) : input;
        if (typeof result !== object.type || (typeof result === 'number' && !Number.isFinite(result))) {
          throw new Error(`Tipo inválido para a variável ${object.$env}: esperado ${String(object.type)}`);
        }
        return result;
      }
      return Object.fromEntries(Object.entries(object).map(([key, child]) => [key, resolve(child)]));
    }
    return value;
  }
  const source = c.request || {};
  const body = Object.prototype.hasOwnProperty.call(source, 'body') ? resolve(source.body) : undefined;
  const rawBody = source.rawBodyEnv ? harVariable(source.rawBodyEnv) : undefined;
  if (source.rawBodyEnv && rawBody === undefined) available = false;
  if (rawBody !== undefined && typeof rawBody !== 'string') throw new Error(`Payload textual deve ser string: ${source.rawBodyEnv}`);
  return available ? {body, rawBody: rawBody as string | undefined, contentType: source.contentType} : null;
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
  test.info().annotations.push({type:'HAR', description:`Observado HTTP ${c.status} (${c.observations}x; ${(c.capturedAt || []).join(', ')})`});
  if (!c.documented) test.info().annotations.push({type:'DIVERGENCIA_SWAGGER', description:`HTTP ${c.status} não documentado para ${c.method} ${c.route}`});
  if (c.responseShape.itemNonNull === false) test.info().annotations.push({type:'MASSA', description:'item nulo no HAR: verificar sucesso funcional'});
}

export function explainCase(c: HarCase): string {
  const data = {...c.query,...c.pathParams};
  const readable = Object.entries(data).map(([key,val]) =>
    `${key}=${val.startsWith('${ENV:') ? '(env)' : val}`);
  return `${c.route} [${readable.length ? readable.join(', ') : 'sem filtros'}] (HAR HTTP ${c.status})`;
}

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value !== null && typeof value === 'object') return Object.fromEntries(
    Object.keys(value).sort().map(key => [key, canonical((value as Record<string, unknown>)[key])]));
  return value;
}

function normalizeError(value: unknown): unknown {
  if (typeof value === 'string') return value.replace(/\b(LineNumber|BytePositionInLine)\s*:\s*\d+/g, '$1:*');
  if (Array.isArray(value)) return value.map(normalizeError);
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, normalizeError(item)]));
  return value;
}

/** Reforça o teste existente com a evidência sanitizada; não depende dos HARs brutos. */
export function expectHarContent(c: HarCase, body: unknown,
  input?: {query?: Record<string, string>; pathParams?: Record<string, string>; body?: unknown}): void {
  const issues: string[] = [];
  function inspect(value: unknown, shape: ObservedShape, location: string): void {
    if (value === null && shape.nullable) return;
    // Um campo capturado como null não permite inferir o tipo de um futuro valor.
    // O Swagger continua responsável por esse tipo. Corpo vazio, porém, é explícito.
    if (!shape.types.length) {
      if (location === '$' && value !== null) issues.push('$: esperado corpo ausente');
      return;
    }
    const type = Buffer.isBuffer(value) ? 'binary' : Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
    if (!shape.types.includes(type)) { issues.push(`${location}: tipo diferente do observado`); return; }
    if (type === 'object' && shape.properties) {
      const object = value as Record<string, unknown>;
      for (const [key, child] of Object.entries(shape.properties)) {
        if (!Object.prototype.hasOwnProperty.call(object, key)) issues.push(`${location}.${key}: campo observado ausente`);
        else inspect(object[key], child, `${location}.${key}`);
      }
    }
    if (Array.isArray(value) && shape.items) {
      value.forEach((item, index) => inspect(item, shape.items!, `${location}[${index}]`));
    }
  }
  if (c.responseContract) inspect(body, c.responseContract, '$');
  else for (const key of c.responseShape.keys) {
    if (body === null || typeof body !== 'object' || !(key in body)) issues.push(`$.${key}: campo observado ausente`);
  }
  if (c.responseShape.itemNonNull === true &&
      (!body || typeof body !== 'object' || (body as {item?: unknown}).item == null)) {
    issues.push('$.item: cenário de sucesso com resultado exige item preenchido');
  }
  if (c.errorIdentity) {
    const object = body && typeof body === 'object' ? body as Record<string, unknown> : {};
    const content = Object.fromEntries(c.errorIdentity.fields.map(key => [key, object[key]]));
    const digest = createHash('sha256').update(JSON.stringify(canonical(normalizeError(content)))).digest('hex');
    if (digest !== c.errorIdentity.sha256) issues.push('Erro de negócio diferente do observado para esta entrada');
  }
  function valuesAt(root: unknown, pointer: string): unknown[] {
    let values: unknown[] = [root];
    for (const token of pointer.slice(1).split('/')) {
      const key = token.replace(/~1/g, '/').replace(/~0/g, '~');
      values = values.flatMap(value => key === '*' && Array.isArray(value) ? value :
        value !== null && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, key)
          ? [(value as Record<string, unknown>)[key]] : []);
    }
    return values;
  }
  for (const relation of c.requestRelations || []) {
    const sent = valuesAt(input, relation.input);
    const returned = valuesAt(body, relation.response);
    const normalize = (value: unknown) => relation.comparison === 'digits'
      ? String(value).replace(/\D/g, '') : String(value);
    if (sent.length !== 1 || !returned.length || returned.some(value => normalize(value) !== normalize(sent[0]))) {
      issues.push(`${relation.response}: resultado não corresponde ao campo enviado em ${relation.input}`);
    }
  }
  // Não mostra valores de conta nem mensagens privadas nos erros do teste.
  expect(issues, 'Conteúdo divergente da evidência HAR sanitizada').toEqual([]);
}

/** Regras funcionais dos endpoints que possuem uma relação confirmada com a entrada. */
export function expectEndpointContent(route: string, options: GetOptions, body: unknown, relationsChecked = false): void {
  const object = body && typeof body === 'object' ? body as Record<string, unknown> : {};
  if (route === '/api/v1/Autenticacao/ObterTecladoVirtual') {
    const item = object.item as {tecladoItens?: unknown[]; hashAutenticacao?: string} | undefined;
    expect(Array.isArray(item?.tecladoItens), 'Teclado virtual deve conter a lista de teclas').toBe(true);
    expect(item!.tecladoItens!.length, 'Teclado virtual deve conter cinco teclas').toBe(5);
    expect(typeof item?.hashAutenticacao === 'string' && item.hashAutenticacao.length > 0,
      'Teclado virtual deve fornecer hash de autenticação preenchido').toBe(true);
  }
  if (!relationsChecked && ['/api/v1/Endereco/Cep/{cep}', '/api/v1/Conta/ConsultarCep/{cep}',
    '/api/v1/Onboarding/Endereco/Consultar'].includes(route)) {
    const input = options.pathParams?.cep || options.query?.Cep;
    if (input && /^\d{8}$/.test(input)) {
      const item = object.item as Record<string, unknown> | null | undefined;
      expect(item !== null && typeof item === 'object', 'Consulta de CEP válido exige endereço').toBe(true);
      const result = item?.cep ?? item?.Cep;
      expect(typeof result === 'string' && result.replace(/\D/g, '') === input,
        'CEP retornado deve corresponder ao CEP solicitado').toBe(true);
    }
  }
}
