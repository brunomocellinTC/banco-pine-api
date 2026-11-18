import { test } from '@playwright/test';
import { ContaApiClient } from '../Clients/conta-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Conta - lista países (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new ContaApiClient(request).listarPaises();
  expectSuccessResponse('GET','/api/v1/Conta/ListarPaises',response,200);
});
/** CEP_INVÁLIDO como string é aceito pelo Swagger; não presumir HTTP 400. */
