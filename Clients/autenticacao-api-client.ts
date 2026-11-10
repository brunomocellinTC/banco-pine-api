import { APIRequestContext } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { ApiResponse } from '../Models/api-response.model';
import { TecladoVirtualResponse } from '../Models/autenticacao.model';

export class AutenticacaoApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Autenticacao');
    }

    async obterTecladoVirtual(cpf: string): Promise<ApiResponse<TecladoVirtualResponse>> {
        return this.get<TecladoVirtualResponse>('/ObterTecladoVirtual', { CPF: cpf });
    }
}