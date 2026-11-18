import { test, expect } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { SwaggerGetRoute } from '../Models/swagger-get-routes';
import { expectErrorResponse, requireApiEnvironment } from './support/openapi';
import { annotateHarCase, explainCase, GET_HAR_CASES, resolveHarOptions } from './support/har-cases';
import { attachHarMetadata } from './support/har-attach';

// Não gerar valores genéricos e presumir 400: usa APENAS entradas observadas no HAR.
for (const c of GET_HAR_CASES.filter(c => c.status === 400 && !c.deprecated)) {
  if (c.route === '/api/v1/Autenticacao/ObterTecladoVirtual') continue; // domínio já testa CPF omitido
  test(`HAR | GET | erro 400 | ${explainCase(c)}${c.documented?'':' [FORA DO SWAGGER]'}`, async ({request}) => {
    requireApiEnvironment();
    const options = resolveHarOptions(c);
    test.skip(!options,'Massa indisponível no .env');
    annotateHarCase(c);
    const response = await new SwaggerApiClient(request).getRoute(c.route as SwaggerGetRoute,
      {...options!,allowInvalidParams:true});
    await attachHarMetadata(c,response.status);
    expect(response.status,'Deve reproduzir o HTTP 400 observado').toBe(400);
    // Resposta 400 fora do Swagger é desvio documentado, não conformidade de contrato.
    if (c.documented) expectErrorResponse('GET',c.route,response,400);
  });
}
