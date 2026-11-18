import { test } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { GET_ROUTES, SwaggerGetRoute } from '../Models/swagger-get-routes';
import { getFixture } from './support/get-fixtures';
import { GET_HAR_CASES, annotateHarCase } from './support/har-cases';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';

/** Já testados pelos clients de domínio; não duplicar no Allure. */
const coveredByDomain = new Set<SwaggerGetRoute>([
  '/api/v1/Autenticacao/ObterTecladoVirtual',
  '/api/v1/Chat/ObterMensagens',
  '/api/v1/Comprovante/Listar',
  '/api/v1/Conta/ListarPaises',
  '/api/v1/Dispositivo/Listar',
  '/api/v1/Emprestimo/ObterProdutos',
  '/api/v1/Extrato/Obter',
  '/api/v1/Home/Investimento/Carteira',
  '/api/v1/Home/Investimento/Saldo',
  '/api/v1/Investimento/Carteira',
  '/api/v1/Investimento/Simulacao/ObterFiltro',
  '/api/v1/Onboarding/Endereco/Consultar',
  '/api/v1/Pix/Chave/ObterLista',
  '/api/v1/Pix/Transferencias/ObterInstituicoes',
  '/api/v1/PJ/GerenciarUsuario/Perfis',
  '/api/v1/Ted/ObterInstituicoes',
  '/api/v1/Ted/ObterTipoContas',
]);
const routes = Object.keys(GET_ROUTES) as SwaggerGetRoute[];
const groups = [...new Set(routes.map(route => GET_ROUTES[route].grupo))];

for (const group of groups) {
  test.describe(`GET | ${group} | Sucesso`, () => {
    for (const route of routes) {
      const metadata = GET_ROUTES[route];
      if (metadata.grupo !== group || coveredByDomain.has(route)) continue;
      test(`${route}: status 2xx e schema`, async ({ request }, testInfo) => {
        requireApiEnvironment();
        test.skip(metadata.deprecated && process.env.RUN_DEPRECATED !== '1', 'Endpoint depreciado');
        // Se a única resposta observada para esta massa foi 422, não chamar
        // isso de cenário de sucesso. O 422 é testado em HarObserved422.spec.ts.
        const knownResponses = GET_HAR_CASES.filter(c => c.route === route);
        const hasSuccessEvidence = knownResponses.some(c => c.status >= 200 && c.status < 300);
        test.skip(!hasSuccessEvidence && knownResponses.some(c => c.status === 422),
          'Sem massa de sucesso: HAR documenta apenas 422; consultar HarObserved422.spec.ts');
        const fixture = getFixture(route);
        test.skip(fixture === null, 'Sem massa válida para os parâmetros da rota');
        const observed = GET_HAR_CASES.find(c => c.route === route && c.status >= 200 && c.status < 300);
        if (observed) annotateHarCase(observed);
        const response = await new SwaggerApiClient(request).getRoute(route, fixture!);
        await testInfo.attach('HTTP - metadados sem dados sensíveis', {
          contentType: 'application/json',
          body: JSON.stringify({
            metodo: 'GET', rota: route, grupo: metadata.grupo,
            status: response.status, sucessoDocumentado: metadata.status.filter(n => n >= 200 && n < 300),
            queryKeys: Object.keys(fixture!.query || {}),
            pathKeys: Object.keys(fixture!.pathParams || {}),
          }, null, 2),
        });
        expectSuccessResponse('GET', route, response);
      });
    }
  });
}
