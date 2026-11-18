import {test,expect} from '@playwright/test';
import {inspectResponseContract,expectOpenApiResponse} from './support/openapi';

// Os dados abaixo são sintetizados, não são informações de clientes ou corpo de HAR.
test('aceita data ISO local do .NET apenas como desvio HAR identificado', () => {
  const result=inspectResponseContract('GET','/api/v1/Endereco/Obter',200,
    {item:{dataRegistro:'2026-07-14T10:09:50.54'}});
  expect(result.errors).toEqual([]);
  expect(result.observedDifferences.join(' ')).toContain('ISO local sem fuso');
});

test('não transforma qualquer data inválida em sucesso', () => {
  const result=inspectResponseContract('GET','/api/v1/Endereco/Obter',200,
    {item:{dataRegistro:'14/07/2026 10:09:50'}});
  expect(result.errors.join(' ')).toContain('formato date-time');
});

test('não aceita divergência de status 422 em cenário de sucesso', () => {
  expect(() => expectOpenApiResponse('GET','/api/v1/Home/PJ/GerenciarUsuario/Obter',422,{}))
    .toThrow('não está documentado');
});

test('corpo vazio em 401 continua identificado como divergência de contrato', () => {
  const result=inspectResponseContract('GET','/api/v1/Conta/ListarPaises',401,null);
  expect(result.errors).toEqual([]);
  expect(result.observedDifferences.join(' ')).toContain('corpo vazio');
});

test('propriedades desconhecidas fora das exceções HAR continuam reprovadas', () => {
  const result=inspectResponseContract('GET','/api/v1/Autenticacao/ObterTecladoVirtual',200,
    {inventado:true});
  expect(result.errors.join(' ')).toContain('inventado');
});
