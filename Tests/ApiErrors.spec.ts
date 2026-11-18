import { test } from '@playwright/test';
import { expectErrorResponse, readResponseBody, requireApiEnvironment } from './support/openapi';
test('Conta/ListarPaises: sem x-login-hash retorna 401 (autenticação)', async ({playwright}) => {
  const {baseUrl} = requireApiEnvironment();
  const anonymous = await playwright.request.newContext({baseURL:baseUrl,extraHTTPHeaders:{}});
  try {
    const response = await anonymous.get('/api/v1/Conta/ListarPaises');
    expectErrorResponse('GET','/api/v1/Conta/ListarPaises',
      {status:response.status(), body:await readResponseBody(response)},401);
  } finally {await anonymous.dispose();}
});
