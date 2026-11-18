import { test } from '@playwright/test';
import { PixApiClient } from '../Clients/pix-api-client';
import { SwaggerApiClient } from '../Clients/swagger-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Pix - listar chaves (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new PixApiClient(request).listarChaves();
  expectSuccessResponse('GET','/api/v1/Pix/Chave/ObterLista', response, 200);
});
test('Pix - instituições disponíveis (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new SwaggerApiClient(request).getRoute('/api/v1/Pix/Transferencias/ObterInstituicoes');
  expectSuccessResponse('GET','/api/v1/Pix/Transferencias/ObterInstituicoes', response, 200);
});
