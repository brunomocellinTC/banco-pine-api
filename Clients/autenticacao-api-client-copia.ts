import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { TecladoVirtualResponseCopia } from '../Models/autenticacao-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class AutenticacaoApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    obterTecladoVirtual(cpf: string): Promise<ApiResponse<TecladoVirtualResponseCopia | null>> {
        return this.get('/api/v1/Autenticacao/ObterTecladoVirtual', { CPF: cpf });
    }
}
