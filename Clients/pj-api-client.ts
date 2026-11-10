import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import {
    PjAprovacaoResponse,
    PjAprovacoesResponse,
    PjUsuarioResponse,
    PjUsuariosResponse,
} from '../Models/pj.model';

export class PjApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/PJ');
    }

    async pendentes(params?: Record<string, string>): Promise<ApiResponse<PjAprovacoesResponse>> {
        return this.get<PjAprovacoesResponse>('/Aprovacao/Pendentes', params);
    }

    async quantidadePendentes(params?: Record<string, string>): Promise<ApiResponse<unknown>> {
        return this.get<unknown>('/Aprovacao/Pendentes/Quantidade', params);
    }

    async historicoAprovacao(params?: Record<string, string>): Promise<ApiResponse<PjAprovacoesResponse>> {
        return this.get<PjAprovacoesResponse>('/Aprovacao/Historico', params);
    }

    async aprovar(data: unknown): Promise<ApiResponse<PjAprovacaoResponse>> {
        return this.post<PjAprovacaoResponse>('/Aprovacao/Aprovar', data);
    }

    async reprovar(data: unknown): Promise<ApiResponse<PjAprovacaoResponse>> {
        return this.post<PjAprovacaoResponse>('/Aprovacao/Reprovar', data);
    }

    async listarUsuarios(params?: Record<string, string>): Promise<ApiResponse<PjUsuariosResponse>> {
        return this.get<PjUsuariosResponse>('/GerenciarUsuario/Listar', params);
    }

    async atualizarAcesso(data: unknown): Promise<ApiResponse<PjUsuarioResponse>> {
        return this.patch<PjUsuarioResponse>('/GerenciarUsuario/Acesso', data);
    }

    async removerUsuario(params?: Record<string, string>): Promise<ApiResponse<PjUsuarioResponse>> {
        return this.delete('/GerenciarUsuario/Remover', params);
    }

    async listarPerfis(params?: Record<string, string>): Promise<ApiResponse<PjUsuariosResponse>> {
        return this.get<PjUsuariosResponse>('/GerenciarUsuario/Perfis', params);
    }

    async criarUsuario(data: unknown): Promise<ApiResponse<PjUsuarioResponse>> {
        return this.post<PjUsuarioResponse>('/GerenciarUsuario/Criar', data);
    }
}
