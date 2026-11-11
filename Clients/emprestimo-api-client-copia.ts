import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    EmprestimoDetalheResponseCopia,
    EmprestimoParcelasResponseCopia,
    EmprestimoProdutosResponseCopia,
} from '../Models/emprestimo-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class EmprestimoApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    obterParcelas(params: Record<string, string>): Promise<ApiResponse<EmprestimoParcelasResponseCopia | null>> {
        return this.get('/api/v1/Emprestimo/ObterParcelas', params);
    }

    obterDocumento(numeroContrato: string): Promise<ApiResponse<EmprestimoDetalheResponseCopia | null>> {
        return this.get('/api/v1/Emprestimo/ObterDocumento', { numeroContrato });
    }

    obter(): Promise<ApiResponse<EmprestimoDetalheResponseCopia | null>> {
        return this.get('/api/v1/Emprestimo/Obter');
    }

    obterProdutos(): Promise<ApiResponse<EmprestimoProdutosResponseCopia | null>> {
        return this.get('/api/v1/Emprestimo/ObterProdutos');
    }
}
