import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { ComprovanteListagemResponseCopia } from '../Models/comprovante-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class ComprovanteApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    listar(periodo: string): Promise<ApiResponse<ComprovanteListagemResponseCopia | null>> {
        return this.get('/api/v1/Comprovante/Listar', { Periodo: periodo });
    }
}
