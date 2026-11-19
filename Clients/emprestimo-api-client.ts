import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    EmprestimoDetalheResponse,
    EmprestimoParcelasResponse,
    EmprestimoProdutosResponse,
} from '../Models/emprestimo.model';
import { BaseApiClient } from './base-api-client';

export class EmprestimoApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Emprestimo');
    }

    async obterProdutos(params?: Record<string, string>): Promise<ApiResponse<EmprestimoProdutosResponse>> {
        return this.get<EmprestimoProdutosResponse>('/ObterProdutos', params);
    }

    async obter(params?: Record<string, string>): Promise<ApiResponse<EmprestimoDetalheResponse>> {
        return this.get<EmprestimoDetalheResponse>('/Obter', params);
    }

    async obterDocumento(params?: Record<string, string>): Promise<ApiResponse<EmprestimoDetalheResponse>> {
        return this.get<EmprestimoDetalheResponse>('/ObterDocumento', params);
    }

    async obterParcelas(params?: Record<string, string>): Promise<ApiResponse<EmprestimoParcelasResponse>> {
        return this.get<EmprestimoParcelasResponse>('/ObterParcelas', params);
    }
}
