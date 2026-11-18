import { test } from '@playwright/test';
import { InvestimentoApiClient } from '../Clients/investimento-api-client';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Investimento - carteira (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new InvestimentoApiClient(request).carteira();
  expectSuccessResponse('GET','/api/v1/Investimento/Carteira',response,200);
});
test('Investimento - filtro para simulação (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new SwaggerApiClient(request).getRoute('/api/v1/Investimento/Simulacao/ObterFiltro');
  expectSuccessResponse('GET','/api/v1/Investimento/Simulacao/ObterFiltro',response,200);
});
