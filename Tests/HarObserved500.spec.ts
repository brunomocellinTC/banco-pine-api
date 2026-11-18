import { test } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { SwaggerGetRoute } from '../Models/swagger-get-routes';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
import { annotateHarCase, explainCase, GET_HAR_CASES, resolveHarOptions } from './support/har-cases';
import { attachHarMetadata } from './support/har-attach';

// 500 nunca é sucesso. Regressão opt-in, pois alguns endpoints precisam de massa ainda inexistente.
for (const c of GET_HAR_CASES.filter(c => c.status === 500 && !c.deprecated)) {
  test(`HAR | GET | diagnóstico de 500 | ${explainCase(c)}`, async ({request}) => {
    test.skip(process.env.RUN_HAR_500 !== '1', 'Diagnóstico 500 desabilitado; exige revisão de massa');
    requireApiEnvironment();
    const options=resolveHarOptions(c);
    test.skip(!options,'Massa privada indisponível');
    annotateHarCase(c);
    const response=await new SwaggerApiClient(request).getRoute(c.route as SwaggerGetRoute,options!);
    await attachHarMetadata(c,response.status);
    // Um 500 reprovado NÃO deve se tornar teste verde por ser comportamento observado.
    expectSuccessResponse('GET',c.route,response);
  });
}
