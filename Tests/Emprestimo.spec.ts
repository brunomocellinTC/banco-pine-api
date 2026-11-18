import { test } from '@playwright/test';
import { EmprestimoApiClient } from '../Clients/emprestimo-api-client';
import { expectSuccessResponse, expectErrorResponse, requireApiEnvironment } from './support/openapi';
test('Empréstimo - lista produtos (200)', async ({request}) => {
  requireApiEnvironment();
  const response = await new EmprestimoApiClient(request).obterProdutos();
  expectSuccessResponse('GET','/api/v1/Emprestimo/ObterProdutos',response,200);
});
// HAR comprovou 400 sem número de contrato; 404 com identificador inventado NÃO foi comprovado.
test('Empréstimo - documento sem contrato (400 observado no HAR)', async ({request}) => {
  requireApiEnvironment();
  const response = await new EmprestimoApiClient(request).obterDocumento();
  expectErrorResponse('GET','/api/v1/Emprestimo/ObterDocumento',response,400);
});
