import { expect, test } from '@playwright/test';
import { DispositivoApiClient } from '../Clients/dispositivo-api-client';
import {
    expectOpenApiResponse,
    requireApiEnvironment,
} from './support/openapi';

test('DispositivoApiClient lista dispositivos conforme o Swagger', async ({ request }) => {
    requireApiEnvironment();
    const response = await new DispositivoApiClient(request).listar();

    expect(response.status).toBe(200);
    expectOpenApiResponse('GET', '/api/v1/Dispositivo/Listar', response.status, response.body);
});
