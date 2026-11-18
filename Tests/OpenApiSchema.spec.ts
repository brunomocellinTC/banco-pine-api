import { expect, test } from '@playwright/test';
import { parseResponseBody } from '../Clients/response-body';
import { expectOpenApiResponse, expectErrorResponse, expectOpenApiRequest } from './support/openapi';

test('validates a response against its documented OpenAPI schema', () => {
    const route = '/api/v1/Autenticacao/ObterTecladoVirtual';

    expect(() => expectOpenApiResponse('GET', route, 200, {})).not.toThrow();
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
