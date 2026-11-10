import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    ContaDadosPessoaisResponse,
    ContaEnderecoResponse,
    ContaListaResponse,
    ContaStatusResponse,
} from '../Models/conta.model';
import { BaseApiClient } from './base-api-client';

export class ContaApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Conta');
    }

    async consultaConta(params?: Record<string, string>): Promise<ApiResponse<ContaStatusResponse>> {
        return this.get<ContaStatusResponse>('/ConsultaConta', params);
    }

    async obter(params?: Record<string, string>): Promise<ApiResponse<ContaStatusResponse>> {
        return this.get<ContaStatusResponse>('/Obter', params);
    }

    async obterDados(params?: Record<string, string>): Promise<ApiResponse<ContaStatusResponse>> {
        return this.get<ContaStatusResponse>('/ObterDados', params);
    }

    async atualizarDadosPessoais(data: unknown): Promise<ApiResponse<ContaDadosPessoaisResponse>> {
        return this.put<ContaDadosPessoaisResponse>('/AtualizarDadosPessoais', data);
    }

    async obterDadosPessoais(params?: Record<string, string>): Promise<ApiResponse<ContaDadosPessoaisResponse>> {
        return this.get<ContaDadosPessoaisResponse>('/ObterDadosPessoais', params);
    }

    async obterSaldo(params?: Record<string, string>): Promise<ApiResponse<ContaStatusResponse>> {
        return this.get<ContaStatusResponse>('/ObterSaldo', params);
    }

    async alterarStatus(data: unknown): Promise<ApiResponse<ContaStatusResponse>> {
        return this.post<ContaStatusResponse>('/AlterarStatus', data);
    }

    async consultarCep(cep: string): Promise<ApiResponse<ContaEnderecoResponse>> {
        return this.get<ContaEnderecoResponse>(`/ConsultarCep/${cep}`);
    }

    async atualizarEndereco(data: unknown): Promise<ApiResponse<ContaEnderecoResponse>> {
        return this.put<ContaEnderecoResponse>('/AtualizarEndereco', data);
    }

    async obterEndereco(params?: Record<string, string>): Promise<ApiResponse<ContaEnderecoResponse>> {
        return this.get<ContaEnderecoResponse>('/ObterEndereco', params);
    }

    async obterProfissoes(params?: Record<string, string>): Promise<ApiResponse<ContaListaResponse>> {
        return this.get<ContaListaResponse>('/ObterProfissoes', params);
    }

    async listarPaises(params?: Record<string, string>): Promise<ApiResponse<ContaListaResponse>> {
        return this.get<ContaListaResponse>('/ListarPaises', params);
    }

    async listarContas(params?: Record<string, string>): Promise<ApiResponse<ContaListaResponse>> {
        return this.get<ContaListaResponse>('/ListarContas', params);
    }

    async listar(params?: Record<string, string>): Promise<ApiResponse<ContaListaResponse>> {
        return this.get<ContaListaResponse>('/Listar', params);
    }

    async incluirEndereco(data: unknown): Promise<ApiResponse<ContaEnderecoResponse>> {
        return this.post<ContaEnderecoResponse>('/IncluirEndereco', data);
    }

    async selecionar(data: unknown): Promise<ApiResponse<ContaStatusResponse>> {
        return this.post<ContaStatusResponse>('/Selecionar', data);
    }

    async alterarConta(data: unknown): Promise<ApiResponse<ContaStatusResponse>> {
        return this.put<ContaStatusResponse>('/AlterarConta', data);
    }
}
