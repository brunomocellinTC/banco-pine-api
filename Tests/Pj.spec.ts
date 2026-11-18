import { expect, test } from '@playwright/test';
import { PjApiClient } from '../Clients/pj-api-client';
import {
    expectOpenApiResponse,
    requireApiEnvironment,
} from './support/openapi';

test('PjApiClient lista perfis de usuário conforme o Swagger', async ({ request }) => {
    requireApiEnvironment();
    const response = await new PjApiClient(request).listarPerfis();

    expect(response.status).toBe(200);
    expectOpenApiResponse(
        'GET',
        '/api/v1/PJ/GerenciarUsuario/Perfis',
        response.status,
        response.body,
    );
});
