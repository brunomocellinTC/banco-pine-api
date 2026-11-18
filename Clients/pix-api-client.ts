import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import {
    PixAutorizacaoListaResponse,
    PixAutorizacaoResponse,
    PixChaveListaResponse,
    PixChaveResponse,
    PixHistoricoResponse,
    PixTransferenciaResponse,
} from '../Models/pix.model';

export class PixApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Pix');
    }

    async obterAutorizacoes(params?: Record<string, string>): Promise<ApiResponse<PixAutorizacaoListaResponse>> {
        return this.get<PixAutorizacaoListaResponse>('/Automatico/Autorizacoes', params);
    }

    async aprovarAutorizacao(data: unknown): Promise<ApiResponse<PixAutorizacaoResponse>> {
        return this.post<PixAutorizacaoResponse>('/Automatico/Autorizacao/Aprovar', data);
    }

    async rejeitarAutorizacao(data: unknown): Promise<ApiResponse<PixAutorizacaoResponse>> {
        return this.post<PixAutorizacaoResponse>('/Automatico/Autorizacao/Rejeitar', data);
    }

    async obterHistoricoTransferencias(params?: Record<string, string>): Promise<ApiResponse<PixHistoricoResponse>> {
        return this.get<PixHistoricoResponse>('/Transferencias/ObterHistorico', params);
    }

    async fazerTransferencia(data: unknown): Promise<ApiResponse<PixTransferenciaResponse>> {
        return this.post<PixTransferenciaResponse>('/Transferencias/FazerTransferencia', data);
    }

    async listarChaves(params?: Record<string, string>): Promise<ApiResponse<PixChaveListaResponse>> {
        return this.get<PixChaveListaResponse>('/Chave/ObterLista', params);
    }

    async obterChave(params?: Record<string, string>): Promise<ApiResponse<PixChaveResponse>> {
        return this.get<PixChaveResponse>('/Chave/Obter', params);
    }

    async criarChave(data: unknown): Promise<ApiResponse<PixChaveResponse>> {
        return this.post<PixChaveResponse>('/Chave/Criar', data);
    }

    async excluirChave(params?: Record<string, string>): Promise<ApiResponse<PixChaveResponse>> {
        return this.delete('/Chave/Excluir', params);
    }
}
