import fs from 'fs';
import path from 'path';
import type { GetOptions } from '../../Clients/swagger-api-client';
import { GET_ROUTES, SwaggerGetRoute } from '../../Models/swagger-get-routes';
import { harSuccessFixture, resolveHarOptions } from './har-cases';

let loaded: Record<string, GetOptions> | null = null;
function customFixtures(): Record<string, GetOptions> {
  if (loaded) return loaded;
  const file = path.resolve(process.cwd(), process.env.GET_FIXTURES_FILE || 'Data/get-fixtures.local.json');
  loaded = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) as Record<string, GetOptions> : {};
  return loaded;
}
export function getFixture(route: SwaggerGetRoute): GetOptions | null {
  const explicit = customFixtures()[route];
  if (explicit) return resolveHarOptions({query: explicit.query || {},pathParams: explicit.pathParams || {}});
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
