import { expect, test } from '@playwright/test';
import { parseResponseBody } from '../Clients/response-body';
import { expectOpenApiResponse, expectErrorResponse, expectOpenApiRequest, inspectResponseContract } from './support/openapi';
import { GET_HAR_CASES, allureHierarchy, expectHarContent } from './support/har-cases';

test.describe('OpenApiSchema', {annotation: allureHierarchy('Validador OpenAPI', 'Respostas e payloads', 'OpenApiSchema')}, () => {

test('validates a response against its documented OpenAPI schema', () => {
    const route = '/api/v1/Autenticacao/ObterTecladoVirtual';

    expect(() => expectOpenApiResponse('GET', route, 200, {})).not.toThrow();
    // O contrato sozinho admite {}; o teste do endpoint também exige os campos do HAR.
    const observed = GET_HAR_CASES.find(c => c.route === route && c.status === 200)!;
    expect(() => expectHarContent(observed, {})).toThrow();
    expect(() => expectOpenApiResponse('GET', route, 200, null)).toThrow(
        'Resposta fora do schema OpenAPI',
    );
    expect(() => expectOpenApiResponse('GET', route, 401, null)).toThrow('corpo ausente');
});

test('accepts the API envelope requestId alias and still validates its type', () => {
    const route = '/api/v1/Autenticacao/ObterTecladoVirtual';

    expect(() => expectOpenApiResponse('GET', route, 200, { requestId: 'test-id' })).not.toThrow();
    expect(() => expectOpenApiResponse('GET', route, 200, { requestId: 123 })).toThrow(
        'deve ser string',
    );
    expect(() => expectOpenApiResponse(
        'GET',
        route,
        200,
        { requestId: 'test-id', extra: true },
    )).toThrow('extra');
});

test('parses JSON responses and represents empty response bodies as null', () => {
    expect(parseResponseBody<{ ok: boolean }>('{"ok":true}')).toEqual({ ok: true });
    expect(parseResponseBody('')).toBeNull();
    expect(parseResponseBody(' \r\n ')).toBeNull();
    expect(() => parseResponseBody('{invalid')).toThrow(SyntaxError);
});

test('validates formatted OpenAPI response fields', () => {
    expect(() => expectOpenApiResponse(
        'POST',
        '/api/v1/Autenticacao/Login',
        200,
        { item: { idSessao: 'not-a-uuid', numTentativas: 1 } },
    )).toThrow('formato uuid');

    expect(() => expectOpenApiResponse(
        'GET',
        '/api/v1/Chat/ObterMensagens',
        200,
        { itens: [{ data: 'not-a-date', mensagens: [] }] },
    )).toThrow('formato date-time');
});


test('não aceita 200 como se fosse erro 400', () => {
    expect(() => expectErrorResponse('GET', '/api/v1/Endereco/Cep/{cep}',
      {status:200,body:{}},400)).toThrow();
});

test('respeita resposta 204 sem body', () => {
    expect(() => expectOpenApiResponse('GET','/api/v1/Pix/Limites/ObterProdutos',204,null)).not.toThrow();
    expect(() => expectOpenApiResponse('GET','/api/v1/Pix/Limites/ObterProdutos',204,{})).toThrow();
});

test('impede payload com tipo divergente no POST', () => {
    expect(() => expectOpenApiRequest('POST','/api/v1/Autenticacao/Login',{cpf:123})).toThrow('Payload divergente');
    expect(() => expectOpenApiRequest('POST','/api/v1/Autenticacao/Login',{cpf:'12345678901'})).not.toThrow();
});

test('preserva validação rigorosa do campo date-time observado', () => {
    expect(() => expectOpenApiResponse('GET','/api/v1/Endereco/Obter',200,
      {item:{dataRegistro:'18/11/2026 09:30:00'}})).toThrow('formato date-time');
});


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
  const recovery = inspectResponseContract('POST', '/api/v1/Senha/Codigo/Solicitar', 200,
    {item: {tipo: 'EMAIL', valor: 'destino-de-teste'}});
  expect(recovery.errors).toEqual([]);
  expect(recovery.observedDifferences.length).toBeGreaterThan(0);
  const unexpected = inspectResponseContract('POST', '/api/v1/Senha/Codigo/Solicitar', 200,
    {item: {tipo: 'EMAIL', valor: 'destino-de-teste', inventado: true}});
  expect(unexpected.errors.join(' ')).toContain('$.item');
  const favorite = inspectResponseContract('GET', '/api/v1/Pix/Favorito/Listar', 200,
    {itens: [{chaves: [{tipoChave: null}]}]});
  expect(favorite.errors).toEqual([]);
  expect(favorite.observedDifferences.join(' ')).toContain('tipoChave');
});
});
