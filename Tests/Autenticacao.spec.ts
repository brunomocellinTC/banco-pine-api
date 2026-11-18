import { expect, test } from '@playwright/test';
import { AutenticacaoApiClient } from '../Clients/autenticacao-api-client';
import { expectErrorResponse, expectSuccessResponse, readResponseBody, requireApiEnvironment } from './support/openapi';
const route = '/api/v1/Autenticacao/ObterTecladoVirtual';
test('Autenticação - teclado virtual (200)', async ({request}) => {
  requireApiEnvironment();
  const cpf = process.env.CPF?.trim();
  test.skip(!cpf, 'Configurar CPF de teste no .env');
  const response = await new AutenticacaoApiClient(request).obterTecladoVirtual(cpf!);
  expectSuccessResponse('GET',route,response,200);
  const body = response.body;
  if (body?.item?.tecladoItens) expect(body.item.tecladoItens).toHaveLength(5);
});
test('Autenticação - CPF omitido (400)', async ({request}) => {
  requireApiEnvironment();
  const response = await request.get(route);
  expectErrorResponse('GET',route,{status:response.status(),body:await readResponseBody(response)},400);
});
