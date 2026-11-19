import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';
import { SwaggerApiClient, GetOptions } from '../../Clients/swagger-api-client';
import { GET_ROUTES, SwaggerGetRoute } from '../../Models/swagger-get-routes';
import { MUTATION_ROUTES } from '../../Models/swagger-mutations';
import coverage from '../../Data/endpoint-coverage.json';
import { GET_HAR_CASES, HAR_CASES, HarCase, annotateHarCase, expectEndpointContent,
  expectHarContent, harSuccessFixture, resolveHarOptions } from './har-cases';
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
const domainOf = (route: string) => route.split('/')[3];

function observedFor(method: string, route: string, options: GetOptions, status?: number): HarCase | undefined {
  return HAR_CASES.find(c => c.method === method && c.route === route &&
    (status === undefined ? c.status >= 200 && c.status < 300 : c.status === status) &&
    (() => { const resolved = resolveHarOptions(c); return resolved && optionKey(resolved) === optionKey(options); })());
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

/** Uma única inscrição por entrada. Sucesso e erro vivem no mesmo endpoint do domínio. */
export function registerDomainTests(domain: string): void {
  const scenarios = new Map<string, Scenario>();
  function add(s: Scenario, replace = false): void {
    // Status e arquivo HAR não fazem uma entrada repetida virar outro teste.
    const key = JSON.stringify([s.method, s.route, optionKey(s.options), !!s.anonymous,
      s.mutation ? (s.negativeBody ? 'negative' : 'positive') : '']);
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
        status: fixture.expectedStatus ?? observed?.status, observed});
    }
    // Preferir sucesso quando a mesma entrada teve respostas diferentes nas capturas.
    const cases = [...known].sort((a, b) => a.status - b.status);
    for (const c of cases) {
      if (c.status >= 500 && process.env.RUN_HAR_500 !== '1') continue;
      const options = resolveHarOptions(c);
      if (!options) continue;
      add({method: 'GET', route, group: metadata.grupo, options,
        status: c.status < 500 ? c.status : undefined, observed: c,
        anonymous: c.status === 401, diagnostic: c.status >= 500});
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
      observed: observedFor(operation.method, operation.route, options, fixture.expectedStatus)});
    if (fixture.badBody !== undefined) {
      const status = fixture.badStatus ?? 400;
      add({method: operation.method, route: operation.route, group: operation.grupo,
        options, status, mutation: fixture, negativeBody: true,
        observed: observedFor(operation.method, operation.route, options, status)});
    }
  }

  const pending: Pending[] = [];
  for (const operation of coverage.operations.filter(op => op.domain === domain)) {
    const split = operation.operation.indexOf(' ');
    const method = operation.operation.slice(0, split);
    const route = operation.operation.slice(split + 1);
    const members = [...scenarios.values()].filter(s => s.method === method && s.route === route);
    const hasSuccess = members.some(s => !s.diagnostic && (s.status === undefined || s.status < 400));
    const configuredMass = method === 'GET' ? !!customFixtures()[route] :
      process.env.RUN_MUTATIONS === '1' && !!mutations[operation.operation];
    if (hasSuccess && (!operation.pendingMassFromUser || configuredMass)) continue;
    const reason = operation.deprecated && process.env.RUN_DEPRECATED !== '1' ? 'Endpoint depreciado' :
      operation.pendingMassFromUser ? 'Validação funcional pendente de massa — lista a testar.txt' :
      method !== 'GET' && process.env.RUN_MUTATIONS !== '1' ? 'Escrita desabilitada; requer massa e RUN_MUTATIONS=1' :
      'Sem massa válida para cenário de sucesso';
    pending.push({method, route, group: operation.group, reason});
  }
  const groups = [...new Set([...scenarios.values(), ...pending].map(s => s.group))];
  if (!groups.length) return;
  test.describe(domain, () => {
    for (const group of groups) {
      const registerEndpoints = () => {
        const members = [...scenarios.values()].filter(s => s.group === group);
        const placeholders = pending.filter(s => s.group === group);
        for (const route of [...new Set([...members, ...placeholders].map(s => s.route))]) {
          test.describe(route, () => {
            for (const [index, s] of members.filter(item => item.route === route).entries()) {
              registerScenario(s, index + 1, placeholders.find(p => p.route === route && p.method === s.method)?.reason);
            }
            for (const item of placeholders.filter(p => p.route === route)) {
              test(`${item.method}: pendente de massa`, {tag: ['@pending', item.method === 'GET' ? '@get' : '@mutation'],
                annotation: [{type: 'operation', description: `${item.method} ${item.route}`},
                  {type: 'pending', description: item.reason}]}, () => { test.fixme(true, item.reason); });
            }
          });
        }
      };
      if (group === domain) registerEndpoints();
      else test.describe(group, registerEndpoints);
    }
  });
}

function registerScenario(s: Scenario, number: number, pendingReason?: string): void {
  const params = {...s.options.query, ...s.options.pathParams};
  const inputNames = Object.keys(params).sort();
  const inputDescription = inputNames.length ? inputNames.map(key => {
    const value = params[key];
    // Valores privados nunca são usados no título. Filtros públicos ficam legíveis.
    const publicFilter = /^(periodo|tipo|status|pagina|quantidade|limite)$/i.test(key);
    return publicFilter ? `${key}=${value}` : `${key}=informado`;
  }).join(', ') : 'sem parâmetros';
  const label = s.diagnostic ? 'não deve retornar 500' : `HTTP ${s.status ?? '2xx'}`;
  const tags = [s.method === 'GET' ? '@get' : '@mutation'];
  if (s.status && s.status >= 400) tags.push('@negative');
  if (s.diagnostic) tags.push('@diagnostic');
  test(`${s.method}: ${label} — ${s.anonymous ? 'sem autenticação' : inputDescription} — caso ${number}`,
    {tag: tags, annotation: [{type: 'operation', description: `${s.method} ${s.route}`},
      {type: 'scenario', description: s.status !== undefined && s.status >= 400 ? 'error' : 'success'},
      ...(pendingReason ? [{type: 'coverage-pending', description: pendingReason}] : [])]},
    async ({request, playwright}, testInfo) => {
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
            {...s.options, allowInvalidParams: !!s.diagnostic || (s.status !== undefined && s.status >= 400)});
        } else {
          const fixture = s.mutation!;
          const body = configuredValue(s.negativeBody ? fixture.badBody : fixture.body);
          if (!s.negativeBody) expectOpenApiRequest(s.method, s.route, body);
          const url = s.route.replace(/\{([^}]+)\}/g, (_, key: string) => {
            const value = s.options.pathParams?.[key];
            if (!value) throw new Error(`Parâmetro de path obrigatório ausente: ${key}`);
            return encodeURIComponent(value);
          });
          const raw = await context.fetch(url, {method: s.method, params: s.options.query,
            headers: fixture.headers, ...(body === undefined ? {} : {data: body})});
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
          if (s.method === 'GET') expectEndpointContent(s.route, s.options, response.body);
        }
        if (s.observed && !s.diagnostic) expectHarContent(s.observed, response.body);
        expectConfiguredContent(response.body, s.options.expected);
      } finally { await anonymous?.dispose(); }
    });
}
