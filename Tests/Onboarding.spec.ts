import { expect, test } from '@playwright/test';
import { OnboardingApiClient } from '../Clients/onboarding-api-client';
import {
  expectOpenApiResponse,
  requireApiEnvironment,
} from './support/openapi';

test('OnboardingApiClient consulta endereço pelo CEP conforme o Swagger', async ({ request }) => {
  requireApiEnvironment();
  const response = await new OnboardingApiClient(request).consultarEndereco({
    Cep: '92420130',
  });

  expect(response.status).toBe(200);
  expectOpenApiResponse(
    'GET',
    '/api/v1/Onboarding/Endereco/Consultar',
    response.status,
    response.body,
  );
});
