import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    CarteiraInvestimentosResponse,
    HistoricoInvestimentosResponse,
} from '../Models/investimento.model';
import { BaseApiClient } from './base-api-client';

export class HomeApiClient extends BaseApiClient {
    constructor(request: APIRequestContext, loginHash: string) {
        super(request, '/api/v1/Home/Investimento', { 'x-login-hash': loginHash });
    }

    async Carteira(): Promise<ApiResponse<CarteiraInvestimentosResponse>> {
        return this.get<CarteiraInvestimentosResponse>('/Carteira');
    }

    async Historico(periodo: string): Promise<ApiResponse<HistoricoInvestimentosResponse>> {
        return this.get<HistoricoInvestimentosResponse>('/Historico', { periodo });
    }
}