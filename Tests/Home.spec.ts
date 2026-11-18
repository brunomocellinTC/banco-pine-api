import { test } from '@playwright/test';
import { HomeApiClient } from '../Clients/home-api-client';
import { expectSuccessResponse, requireApiEnvironment } from './support/openapi';
test('Home - carteira de investimentos (200)', async ({request}) => {
  const {loginHash} = requireApiEnvironment();
  const response = await new HomeApiClient(request,loginHash).Carteira();
  expectSuccessResponse('GET','/api/v1/Home/Investimento/Carteira',response,200);
});
test('Home - saldo de investimento (200)', async ({request}) => {
  const {loginHash} = requireApiEnvironment();
  const response = await new HomeApiClient(request,loginHash).saldoInvestimento();
  expectSuccessResponse('GET','/api/v1/Home/Investimento/Saldo',response,200);
});
