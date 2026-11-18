import { test } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { SwaggerGetRoute } from '../Models/swagger-get-routes';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
import { annotateHarCase, explainCase, GET_HAR_CASES, harSuccessFixture, resolveHarOptions } from './support/har-cases';
import { attachHarMetadata } from './support/har-attach';

const domainTested = new Set([
  '/api/v1/Autenticacao/ObterTecladoVirtual',
  '/api/v1/Onboarding/Endereco/Consultar',
]);

for (const c of GET_HAR_CASES) {
  if (c.status < 200 || c.status >= 300 || c.deprecated) continue;
  if (!Object.keys(c.query).length && !Object.keys(c.pathParams).length) continue;
  if (domainTested.has(c.route)) continue;
  if (c.route === '/api/v1/Endereco/Cep/{cep}' && c.pathParams.cep === '1') continue;
  // Uma execução padrão por rota já existe em GetSuccess; aqui apenas variações adicionais.
  const baseline = harSuccessFixture(c.route as SwaggerGetRoute);
  if (baseline && JSON.stringify(baseline.query || {}) === JSON.stringify(c.query || {}) &&
       JSON.stringify(baseline.pathParams || {}) === JSON.stringify(c.pathParams || {})) continue;
  test(`HAR | GET | filtros comprovados | ${explainCase(c)}`, async ({request}) => {
    test.skip(c.deprecated && process.env.RUN_DEPRECATED !== '1', 'Endpoint depreciado');
    requireApiEnvironment();
    const options = resolveHarOptions(c);
    test.skip(!options, 'Massa sigilosa precisa ser fornecida via .env');
    annotateHarCase(c);
    const response = await new SwaggerApiClient(request).getRoute(c.route as SwaggerGetRoute, options!);
    await attachHarMetadata(c,response.status);
    expectSuccessResponse('GET',c.route,response,c.status);
  });
}
