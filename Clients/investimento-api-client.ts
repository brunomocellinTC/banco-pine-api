import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import { 
    CarteiraInvestimentosResponse,
    HistoricoInvestimentosResponse,
} from '../Models/investimento.model';

export class InvestimentoApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Investimento');
    }

    async obterInvestimentos(params?: Record<string, string>): Promise<ApiResponse<HistoricoInvestimentosResponse>> {
        return this.get<HistoricoInvestimentosResponse>('/ObterInvestimentos', params);
    }

    async resumo(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/Resumo', params);
    }

    async obterPortifolio(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/ObterPortifolio', params);
    }

    async carteira(params?: Record<string, string>): Promise<ApiResponse<CarteiraInvestimentosResponse>> {
        return this.get<CarteiraInvestimentosResponse>('/Carteira', params);
    }

    async detalhePortifolio(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/DetalhePortifolio', params);
    }

    async detalheCarteiraOperacao(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/Carteira/Operacao/Detalhe', params);
    }

    async obterRelatorio(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/ObterRelatorio', params);
    }
}
