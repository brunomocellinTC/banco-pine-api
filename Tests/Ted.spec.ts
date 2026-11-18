import { test } from '@playwright/test';
import { TedApiClient } from '../Clients/ted-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('TED - lista instituições (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new TedApiClient(request).obterInstituicoes();
  expectSuccessResponse('GET','/api/v1/Ted/ObterInstituicoes', response, 200);
});
test('TED - lista tipos de conta (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new TedApiClient(request).obterTipoContas();
  expectSuccessResponse('GET','/api/v1/Ted/ObterTipoContas', response, 200);
});
