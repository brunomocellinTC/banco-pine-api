import { expect, test } from '@playwright/test';
import { ChatApiClient } from '../Clients/chat-api-client';
import {
    expectOpenApiResponse,
    requireApiEnvironment,
} from './support/openapi';

test('ChatApiClient retorna as mensagens conforme o Swagger', async ({ request }) => {
    requireApiEnvironment();
    const response = await new ChatApiClient(request).obterMensagens();

    expect(response.status).toBe(200);
    expectOpenApiResponse('GET', '/api/v1/Chat/ObterMensagens', response.status, response.body);
});
