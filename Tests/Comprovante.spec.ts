import { test } from '@playwright/test';
import { ComprovanteApiClient } from '../Clients/comprovante-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Comprovante - lista conforme contrato', async ({request}) => {
  requireApiEnvironment();
  const response = await new ComprovanteApiClient(request).listar();
  expectSuccessResponse('GET','/api/v1/Comprovante/Listar', response, 200);
});
