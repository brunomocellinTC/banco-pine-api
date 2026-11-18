import { APIRequestContext } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { ApiResponse } from '../Models/api-response.model';
import { GET_ROUTES, SwaggerGetRoute } from '../Models/swagger-get-routes';
import type { SwaggerGetResponses } from '../Models/openapi-generated';

export interface GetOptions {
  pathParams?: Record<string, string>;
  query?: Record<string, string>;
  allowInvalidParams?: boolean; // somente para testes negativos deliberados
}
/** GETs sempre respeitam o método, os nomes de query e os parâmetros de path do Swagger. */
export class SwaggerApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) { super(request, ''); }
  getRoute<Route extends SwaggerGetRoute>(route: Route, options: GetOptions = {}): Promise<ApiResponse<SwaggerGetResponses[Route]>> {
    const info = GET_ROUTES[route];
    let url: string = route;
    for (const key of info.path) {
      const value = options.pathParams?.[key];
      if (!value) throw new Error(`${route}: parâmetro de path obrigatório: ${key}`);
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    }
    const extraPaths = Object.keys(options.pathParams || {}).filter(k => !(info.path as readonly string[]).includes(k));
    if (extraPaths.length) throw new Error(`${route}: parâmetros de path desconhecidos: ${extraPaths.join(', ')}`);
    const query = options.query || {};
    for (const key of Object.keys(query)) {
      if (!(key in info.query)) throw new Error(`${route}: query não documentada no Swagger: ${key}`);
    }
    for (const [key, item] of Object.entries(info.query)) {
      const val = query[key];
      if (item.required && val === undefined) throw new Error(`${route}: query obrigatória: ${key}`);
      if (val === undefined || options.allowInvalidParams) continue;
      const values = item.enum as readonly unknown[] | null;
      if (values && !values.includes(val)) throw new Error(`${route}: ${key} fora do enum documentado`);
      if (item.type === 'integer' && !/^-?\d+$/.test(val)) throw new Error(`${route}: ${key} precisa ser integer`);
      if (item.type === 'number' && (val.trim() === '' || !Number.isFinite(Number(val)))) throw new Error(`${route}: ${key} precisa ser number`);
      if (item.format === 'uuid' && !/^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/i.test(val))
        throw new Error(`${route}: ${key} precisa ser uuid`);
      if (item.format === 'date-time' && Number.isNaN(Date.parse(val))) throw new Error(`${route}: ${key} precisa ser date-time`);
    }
    return this.get<SwaggerGetResponses[Route]>(url, query);
  }
}
