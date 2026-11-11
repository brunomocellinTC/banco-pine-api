import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { ExtratoResponseCopia } from '../Models/extrato-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class ExtratoApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    obter(periodo: string): Promise<ApiResponse<ExtratoResponseCopia | null>> {
        return this.get('/api/v1/Extrato/Obter', { Periodo: periodo });
    }
}
