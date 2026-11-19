import fs from 'fs';
import path from 'path';
import { expect, type PlaywrightTestArgs, type PlaywrightWorkerArgs, type TestInfo } from '@playwright/test';
import { SwaggerApiClient, GetOptions } from '../../Clients/swagger-api-client';
import { GET_ROUTES, SwaggerGetRoute } from '../../Models/swagger-get-routes';
import { MUTATION_ROUTES } from '../../Models/swagger-mutations';
import coverage from '../../Data/endpoint-coverage.json';
import { GET_HAR_CASES, HAR_CASES, HarCase, allureHierarchy, annotateHarCase, expectEndpointContent,
  expectHarContent, harSuccessFixture, resolveHarOptions, resolveHarRequest } from './har-cases';
import { attachHarMetadata } from './har-attach';
import { expectErrorResponse, expectOpenApiRequest, expectOpenApiResponse, expectSuccessResponse,
  getOpenApiOperation, readResponseBody, requireApiEnvironment, strictSwagger } from './openapi';

interface GetFixture extends GetOptions {
  expectedStatus?: number;
  /** Valores conhecidos da massa, por JSON Pointer: {"/item/id": "${ENV:ID_TESTE}"}. */
  expected?: Record<string, unknown>;
}
let loaded: Record<string, GetFixture> | null = null;
function customFixtures(): Record<string, GetFixture> {
  if (loaded) return loaded;
  const file = path.resolve(process.cwd(), process.env.GET_FIXTURES_FILE || 'Data/get-fixtures.local.json');
  loaded = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : {};
  return loaded;
}
export function getFixture(route: SwaggerGetRoute): GetFixture | null {
  const explicit = customFixtures()[route];
  if (explicit) {
    const options = resolveHarOptions({query: explicit.query || {},pathParams: explicit.pathParams || {}});
    return options ? {...explicit, ...options} : null;
  }
  if (route === '/api/v1/Autenticacao/ObterTecladoVirtual') {
    const cpf = process.env.CPF?.trim();
    return cpf ? {query:{cpf}} : null;
  }
  const fromEvidence = harSuccessFixture(route);
  if (fromEvidence) return fromEvidence;
  if (route === '/api/v1/Conta/ConsultarCep/{cep}') return {pathParams:{cep:'92420130'}};
  const data = GET_ROUTES[route];
  // GET sem parâmetros no Swagger pode ser executado sem fabricar dados.
  // Quando há filtros, exigimos evidência HAR ou fixture explícita.
  return data.path.length === 0 && Object.keys(data.query).length === 0 ? {} : null;
}

interface MutationFixture {
  body?: unknown; badBody?: unknown; query?: Record<string, string>; pathParams?: Record<string, string>;
  expectedStatus?: number; badStatus?: number; headers?: Record<string, string>;
  expected?: Record<string, unknown>;
}
interface Combination extends GetFixture { route: SwaggerGetRoute; description: string; expectedStatus: number }
interface Scenario {
  method: string; route: string; group: string; options: GetFixture; status?: number;
  observed?: HarCase; anonymous?: boolean; diagnostic?: boolean;
  mutation?: MutationFixture; negativeBody?: boolean;
  rawBody?: string; contentType?: string;
}
interface Pending { method: string; route: string; group: string; reason: string }

function readLocal<T>(name: string, fallback: T): T {
  const file = path.resolve(process.cwd(), 'Data', name);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) as T : fallback;
}
const mutations = readLocal<Record<string, MutationFixture>>('mutation-fixtures.local.json', {});
const combinations = readLocal<Combination[]>('query-combinations.local.json', []);
const ordered = (object: Record<string, string> = {}) =>
  Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
const optionKey = (options: GetOptions) => JSON.stringify([ordered(options.query), ordered(options.pathParams)]);
const bodyKey = (value: unknown): string => JSON.stringify(value, (_key, item) =>
  item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b))) : item) ?? 'undefined';
const domainOf = (route: string) => route.split('/')[3];

function observedFor(method: string, route: string, options: GetOptions, status?: number, body?: unknown): HarCase | undefined {
  return HAR_CASES.find(c => c.method === method && c.route === route &&
    (status === undefined ? c.status >= 200 && c.status < 300 : c.status === status) &&
    (() => {
      const resolved = resolveHarOptions(c);
      if (!resolved || optionKey(resolved) !== optionKey(options)) return false;
      if (method === 'GET') return true;
      const input = resolveHarRequest(c);
      return input && input.rawBody === undefined && bodyKey(input.body) === bodyKey(configuredValue(body));
    })());
}

function configuredValue(value: unknown): unknown {
  if (typeof value === 'string') {
    const match = /^\$\{ENV:([A-Z][A-Z0-9_]*)\}$/.exec(value);
    if (!match) return value;
    const result = process.env[match[1]]?.trim();
    if (!result) throw new Error(`Variável ausente na expectativa funcional: ${match[1]}`);
    return result;
  }
  if (Array.isArray(value)) return value.map(configuredValue);
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, configuredValue(item)]));
  return value;
}

function expectConfiguredContent(body: unknown, values: Record<string, unknown> = {}): void {
  for (const [pointer, expected] of Object.entries(values)) {
    if (!pointer.startsWith('/')) throw new Error('Expectativa funcional deve usar JSON Pointer começando com /.');
    let actual: unknown = body;
    for (const key of pointer.slice(1).split('/').map(k => k.replace(/~1/g, '/').replace(/~0/g, '~'))) {
      actual = actual !== null && typeof actual === 'object' && Object.prototype.hasOwnProperty.call(actual, key)
        ? (actual as Record<string, unknown>)[key] : undefined;
    }
    expect(JSON.stringify(actual) === JSON.stringify(configuredValue(expected)),
      `Valor funcional divergente em ${pointer} (valores omitidos)`).toBe(true);
  }
}

/** Apenas seleciona os casos; test()/describe() são declarados no arquivo do domínio. */
export function getDomainCases(domain: string) {
  const scenarios = new Map<string, Scenario>();
  function add(s: Scenario, replace = false): void {
    // Status e arquivo HAR não fazem uma entrada repetida virar outro teste.
    const body = s.mutation ? configuredValue(s.negativeBody ? s.mutation.badBody : s.mutation.body) : undefined;
    const key = JSON.stringify([s.method, s.route, optionKey(s.options), !!s.anonymous,
      bodyKey(body), s.rawBody]);
    if (replace || !scenarios.has(key)) scenarios.set(key, s);
  }
  for (const route of Object.keys(GET_ROUTES) as SwaggerGetRoute[]) {
    if (domainOf(route) !== domain) continue;
    const metadata = GET_ROUTES[route];
    if (metadata.deprecated && process.env.RUN_DEPRECATED !== '1') continue;
    const known = GET_HAR_CASES.filter(c => c.route === route);
    const fixture = getFixture(route);
    const explicit = customFixtures()[route];
    if (fixture && (explicit || !known.length || known.some(c => c.status >= 200 && c.status < 300))) {
      const observed = observedFor('GET', route, fixture, fixture.expectedStatus);
      add({method: 'GET', route, group: metadata.grupo, options: fixture,
        status: fixture.expectedStatus ?? observed?.status, observed,
        anonymous: observed?.authenticated === false});
    }
    // Preferir sucesso quando a mesma entrada teve respostas diferentes nas capturas.
    const cases = [...known].sort((a, b) => a.status - b.status);
    for (const c of cases) {
      if (c.status >= 500 && process.env.RUN_HAR_500 !== '1') continue;
      const options = resolveHarOptions(c);
      if (!options) continue;
      add({method: 'GET', route, group: metadata.grupo, options,
        status: c.status < 500 ? c.status : undefined, observed: c,
        anonymous: c.authenticated === false, diagnostic: c.status >= 500});
    }
  }
  for (const combo of combinations) {
    if (!(combo.route in GET_ROUTES)) throw new Error(`Rota da matriz ausente do Swagger: ${combo.route}`);
    if (domainOf(combo.route) !== domain) continue;
    if (GET_ROUTES[combo.route].deprecated && process.env.RUN_DEPRECATED !== '1') continue;
    const options = resolveHarOptions({query: combo.query || {}, pathParams: combo.pathParams || {}});
    if (options) add({method: 'GET', route: combo.route, group: GET_ROUTES[combo.route].grupo,
      options: {...combo, ...options}, status: combo.expectedStatus,
      observed: observedFor('GET', combo.route, options, combo.expectedStatus)}, true);
  }
  // Cenário já existente, mantido em Conta, não em uma suíte técnica de autenticação.
  if (domain === 'Conta') add({method: 'GET', route: '/api/v1/Conta/ListarPaises',
    group: GET_ROUTES['/api/v1/Conta/ListarPaises'].grupo, options: {}, status: 401, anonymous: true});

  if (process.env.RUN_MUTATIONS === '1') for (const operation of MUTATION_ROUTES) {
    if (domainOf(operation.route) !== domain || (operation.deprecated && process.env.RUN_DEPRECATED !== '1')) continue;
    const fixture = mutations[`${operation.method} ${operation.route}`];
    if (!fixture) continue;
    const options = resolveHarOptions({query: fixture.query || {}, pathParams: fixture.pathParams || {}});
    if (!options) continue;
    if (!operation.bodySchema || fixture.body !== undefined) add({method: operation.method,
      route: operation.route, group: operation.grupo, options: {...options, expected: fixture.expected},
      status: fixture.expectedStatus, mutation: fixture,
      observed: observedFor(operation.method, operation.route, options, fixture.expectedStatus, fixture.body)});
    if (fixture.badBody !== undefined) {
      const status = fixture.badStatus ?? 400;
      add({method: operation.method, route: operation.route, group: operation.grupo,
        options, status, mutation: fixture, negativeBody: true,
        observed: observedFor(operation.method, operation.route, options, status, fixture.badBody)});
    }
  }

  // Reutiliza os payloads capturados no próprio endpoint; não cria uma suíte de replay.
  if (process.env.RUN_MUTATIONS === '1') {
    const captured = HAR_CASES.filter(c => c.method !== 'GET' && domainOf(c.route) === domain)
      .sort((a, b) => a.status - b.status);
    for (const c of captured) {
      if (c.deprecated && process.env.RUN_DEPRECATED !== '1') continue;
      if (c.status >= 500 && process.env.RUN_HAR_500 !== '1') continue;
      const options = resolveHarOptions(c);
      const input = resolveHarRequest(c);
      if (!options || !input) continue;
      const negativeBody = c.status >= 400 && c.status < 500;
      add({method: c.method, route: c.route, group: c.group, options,
        status: c.status < 500 ? c.status : undefined, observed: c,
        anonymous: c.authenticated === false, diagnostic: c.status >= 500,
        mutation: negativeBody ? {badBody: input.body} : {body: input.body}, negativeBody,
        rawBody: input.rawBody, contentType: input.contentType});
    }
  }

  const pending: Pending[] = [];
  for (const operation of coverage.operations.filter(op => op.domain === domain)) {
    const split = operation.operation.indexOf(' ');
    const method = operation.operation.slice(0, split);
    const route = operation.operation.slice(split + 1);
    const members = [...scenarios.values()].filter(s => s.method === method && s.route === route);
    const hasSuccess = members.some(s => !s.diagnostic && (s.status === undefined || s.status < 400));
    const observedMass = members.some(s => s.observed && !s.diagnostic && s.observed.status < 300 && (
      method !== 'GET' || s.observed.responseShape.itemNonNull === true ||
      !!s.observed.responseContract?.properties?.itens?.items));
    const configuredMass = observedMass || (method === 'GET' ? !!customFixtures()[route] :
      process.env.RUN_MUTATIONS === '1' && !!mutations[operation.operation]);
    if (hasSuccess && (!operation.pendingMassFromUser || configuredMass)) continue;
    const reason = operation.deprecated && process.env.RUN_DEPRECATED !== '1' ? 'Endpoint depreciado' :
      operation.pendingMassFromUser ? 'Validação funcional pendente de massa — lista a testar.txt' :
      method !== 'GET' && process.env.RUN_MUTATIONS !== '1' ? 'Escrita desabilitada; requer massa e RUN_MUTATIONS=1' :
      'Sem massa válida para cenário de sucesso';
    pending.push({method, route, group: operation.group, reason});
  }
  const groups = [...new Set([...scenarios.values(), ...pending].map(s => s.group))];
  return groups.map(group => {
    const members = [...scenarios.values()].filter(s => s.group === group);
    const placeholders = pending.filter(s => s.group === group);
    return {group, endpoints: [...new Set([...members, ...placeholders].map(s => s.route))].map(route => ({
      route,
      scenarios: members.filter(s => s.route === route).map((s, index) => describeScenario(s, index + 1,
        placeholders.find(p => p.route === route && p.method === s.method)?.reason)),
      pending: placeholders.filter(p => p.route === route).map(item => ({
        title: `${item.method}: pendente de massa`, reason: item.reason,
        details: {tag: ['@pending', item.method === 'GET' ? '@get' : '@mutation'],
          annotation: [...allureHierarchy(item.group, item.route),
            {type: 'operation', description: `${item.method} ${item.route}`},
            {type: 'pending', description: item.reason}]},
      })),
    }))};
  });
}

function describeScenario(s: Scenario, number: number, pendingReason?: string) {
  const params = {...s.options.query, ...s.options.pathParams};
  const inputNames = Object.keys(params).sort();
  const queryDescription = inputNames.length ? inputNames.map(key => {
    const value = params[key];
    // Valores privados nunca são usados no título. Filtros públicos ficam legíveis.
    const publicFilter = /^(periodo|tipo|status|pagina|quantidade|limite)$/i.test(key);
    return publicFilter ? `${key}=${value}` : `${key}=informado`;
  }).join(', ') : '';
  const body = s.mutation ? (s.negativeBody ? s.mutation.badBody : s.mutation.body) : undefined;
  const bodyDescription = s.rawBody !== undefined ? (s.rawBody.trim() ? 'JSON malformado' : 'corpo vazio') :
    Array.isArray(body) ? 'body em lista' : body && typeof body === 'object' ? `body: ${Object.keys(body).join(', ')}` :
      body !== undefined ? 'body informado' : '';
  const inputDescription = [queryDescription, bodyDescription].filter(Boolean).join('; ') ||
    (s.method === 'GET' ? 'sem parâmetros' : 'sem corpo');
  const label = s.diagnostic ? 'sucesso HTTP 2xx após 500 observado' : s.status === 400 ? 'validação HTTP 400' :
    s.status && s.status >= 400 ? `erro HTTP ${s.status}` : `sucesso HTTP ${s.status ?? '2xx'}`;
  const tags = [s.method === 'GET' ? '@get' : '@mutation'];
  if (s.status && s.status >= 400) tags.push('@negative');
  if (s.diagnostic) tags.push('@diagnostic');
  return {scenario: s, title: `${s.method}: ${label} — ${s.anonymous ? 'sem autenticação' : inputDescription} — caso ${number}`,
    details: {tag: tags, annotation: [...allureHierarchy(s.group, s.route), {type: 'operation', description: `${s.method} ${s.route}`},
      {type: 'scenario', description: s.status !== undefined && s.status >= 400 ? 'error' : 'success'},
      ...(pendingReason ? [{type: 'coverage-pending', description: pendingReason}] : [])]}};
}

export async function executeScenario(s: Scenario,
  fixtures: Pick<PlaywrightTestArgs, 'request'> & Pick<PlaywrightWorkerArgs, 'playwright'>, testInfo: TestInfo): Promise<void> {
  const {request, playwright} = fixtures;
  const inputNames = Object.keys({...s.options.query, ...s.options.pathParams}).sort();
  const {baseUrl} = requireApiEnvironment();
  if (s.observed) annotateHarCase(s.observed);
  let context = request;
  const anonymous = s.anonymous
    ? await playwright.request.newContext({baseURL: baseUrl, extraHTTPHeaders: {}}) : undefined;
  if (anonymous) context = anonymous;
  try {
    let response: {status: number; body: unknown};
    if (s.method === 'GET') {
      response = await new SwaggerApiClient(context).getRoute(s.route as SwaggerGetRoute,
        {...s.options, allowInvalidParams: !!s.observed || !!s.diagnostic || (s.status !== undefined && s.status >= 400)});
    } else {
      const fixture = s.mutation!;
      const body = configuredValue(s.negativeBody ? fixture.badBody : fixture.body);
      if (!s.negativeBody && !s.diagnostic) {
        expectOpenApiRequest(s.method, s.route, body);
      }
      const url = s.route.replace(/\{([^}]+)\}/g, (_, key: string) => {
        const value = s.options.pathParams?.[key];
        if (!value) throw new Error(`Parâmetro de path obrigatório ausente: ${key}`);
        return encodeURIComponent(value);
      });
      const data = s.rawBody ?? (s.contentType && body !== undefined ? JSON.stringify(body) : body);
      const raw = await context.fetch(url, {method: s.method, params: s.options.query, maxRedirects: 0,
        headers: {...fixture.headers, ...(s.contentType ? {'content-type': s.contentType} : {})},
        ...(data === undefined ? {} : {data})});
      response = {status: raw.status(), body: await readResponseBody(raw)};
    }
    if (s.observed) await attachHarMetadata(s.observed, response.status);
    else await testInfo.attach('HTTP', {contentType: 'application/json',
      body: JSON.stringify({method: s.method, route: s.route, status: response.status, queryNames: inputNames})});
    if (s.status !== undefined && s.status >= 400) {
      expect(response.status, `${s.method} ${s.route}: status de erro exato`).toBe(s.status);
      if (getOpenApiOperation(s.method, s.route)?.responses[String(s.status)])
        expectErrorResponse(s.method, s.route, response, s.status);
      else if (strictSwagger()) expectOpenApiResponse(s.method, s.route, response.status, response.body);
      else testInfo.annotations.push({type: 'DIVERGENCIA_SWAGGER', description: `HTTP ${s.status} fora do Swagger`});
    } else {
      expectSuccessResponse(s.method, s.route, response, s.status);
      if (s.method === 'GET') expectEndpointContent(s.route, s.options, response.body, !!s.observed?.requestRelations?.length);
    }
    if (s.observed && !s.diagnostic) expectHarContent(s.observed, response.body, {
      query: s.options.query, pathParams: s.options.pathParams,
      body: s.mutation ? configuredValue(s.negativeBody ? s.mutation.badBody : s.mutation.body) : undefined,
    });
    expectConfiguredContent(response.body, s.options.expected);
  } finally { await anonymous?.dispose(); }
}
