import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import {
    TedFavorecidoListaResponse,
    TedFavorecidoResponse,
    TedHistoricoResponse,
    TedLimitesResponse,
    TedTransferenciaResponse,
} from '../Models/ted.model';

export class TedApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Ted');
    }

    async obterTipoContas(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/ObterTipoContas', params);
    }

    async obterInstituicoes(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/ObterInstituicoes', params);
    }

    async extratos(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/Extratos', params);
    }

    async obterTransacoesRecentes(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/ObterTransacoesRecentes', params);
    }

    async obterHistorico(params?: Record<string, string>): Promise<ApiResponse<TedHistoricoResponse>> {
        return this.get<TedHistoricoResponse>('/ObterHistorico', params);
    }

    async transferir(data: unknown): Promise<ApiResponse<TedTransferenciaResponse>> {
        return this.post<TedTransferenciaResponse>('/Transferencias', data);
    }

    async obterFavorecidos(params?: Record<string, string>): Promise<ApiResponse<TedFavorecidoListaResponse>> {
        return this.get<TedFavorecidoListaResponse>('/Favorecido/Obter', params);
    }

    async criarFavorecido(data: unknown): Promise<ApiResponse<TedFavorecidoResponse>> {
        return this.post<TedFavorecidoResponse>('/Favorecido/Criar', data);
    }

    async excluirFavorecido(params?: Record<string, string>): Promise<ApiResponse<TedFavorecidoResponse>> {
        return this.delete('/Favorecido/Excluir', params);
    }

    async obterLimitesPorProduto(params?: Record<string, string>): Promise<ApiResponse<TedLimitesResponse>> {
        return this.get<TedLimitesResponse>('/Limites/ObterPorProduto', params);
    }

    async atualizarLimite(data: unknown): Promise<ApiResponse<unknown>> {
        return this.put<unknown>('/Limites/Atualizar', data);
    }
}
