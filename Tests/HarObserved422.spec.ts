import { test, expect } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { SwaggerGetRoute } from '../Models/swagger-get-routes';
import { expectErrorResponse, requireApiEnvironment } from './support/openapi';
import { annotateHarCase, explainCase, GET_HAR_CASES, resolveHarOptions } from './support/har-cases';
import { attachHarMetadata } from './support/har-attach';

// Reproduz o ERRO DE NEGÓCIO observado (422); não apresenta 422 não documentado como conformidade.
for (const c of GET_HAR_CASES.filter(c => c.status === 422 && !c.deprecated)) {
  test(`HAR | GET | erro de negócio 422 | ${explainCase(c)}${c.documented?'':' [FORA DO SWAGGER]'}`, async ({request}) => {
    requireApiEnvironment();
    const options=resolveHarOptions(c);
    test.skip(!options,'Massa privada precisa ser informada via .env');
    annotateHarCase(c);
    const response=await new SwaggerApiClient(request).getRoute(c.route as SwaggerGetRoute,
      {...options!,allowInvalidParams:true});
    await attachHarMetadata(c,response.status);
    expect(response.status,'Reproduzir exatamente o erro 422 observado no HAR').toBe(422);
    // Se Swagger documenta 422, valida schema. Caso contrário, há annotation DIVERGENCIA_SWAGGER.
    if (c.documented) expectErrorResponse('GET',c.route,response,422);
  });
}
