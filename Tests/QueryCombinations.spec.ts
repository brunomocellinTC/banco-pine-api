import fs from 'fs';
import path from 'path';
import { test } from '@playwright/test';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { GET_ROUTES, SwaggerGetRoute } from '../Models/swagger-get-routes';
import { expectErrorResponse, expectSuccessResponse, requireApiEnvironment } from './support/openapi';
import { resolveHarOptions } from './support/har-cases';

interface Combo { route: SwaggerGetRoute; description: string; query?:Record<string,string>;
  pathParams?:Record<string,string>; expectedStatus:number; }
const file=path.resolve(process.cwd(), 'Data/query-combinations.local.json');
const combos:Combo[] = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : [];
for (const item of combos) {
  test(`Matriz de filtros configurada | ${item.description} | ${item.route}`, async ({request}) => {
    requireApiEnvironment();
    if (!(item.route in GET_ROUTES)) throw new Error(`Rota não existe no Swagger: ${item.route}`);
    const opts=resolveHarOptions({query:item.query || {},pathParams:item.pathParams || {}});
    test.skip(!opts,'Faltam dados configurados nas variáveis de ambiente');
    const response=await new SwaggerApiClient(request).getRoute(item.route,opts!);
    if (item.expectedStatus < 400) expectSuccessResponse('GET',item.route,response,item.expectedStatus);
    else expectErrorResponse('GET',item.route,response,item.expectedStatus);
  });
}
