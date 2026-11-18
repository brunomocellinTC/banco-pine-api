import { test } from '@playwright/test';
import { ExtratoApiClient } from '../Clients/extrato-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Extrato - consulta conforme contrato', async ({request}) => {
  requireApiEnvironment();
  const response = await new ExtratoApiClient(request).obter();
  expectSuccessResponse('GET','/api/v1/Extrato/Obter', response, 200);
});
