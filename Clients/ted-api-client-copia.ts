import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    TedEnvelopeCopia,
    TedListaCopia,
    TedLimitesResponseCopia,
    TedTransferenciaRequestCopia,
    TedTransferenciaResponseCopia,
} from '../Models/ted-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class TedApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    obterHistorico(periodo: string): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/ObterHistorico', { Periodo: periodo });
    }

    obterTransacoesRecentes(): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/ObterTransacoesRecentes');
    }

    obterExtratos(params: Record<string, string>): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/Extratos', params);
    }

    obterInstituicoes(): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/ObterInstituicoes');
    }

    obterTiposConta(): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/ObterTipoContas');
    }

    obterComprovante(codigoOperacao: string): Promise<ApiResponse<TedEnvelopeCopia | null>> {
        return this.get('/api/v1/Ted/Comprovante', { CodigoOperacao: codigoOperacao });
    }

    cancelarAgendamento(codigoTransacao: string): Promise<ApiResponse<TedEnvelopeCopia | null>> {
        return this.post('/api/v1/Ted/Agendamento', undefined, { CodigoTransacao: codigoTransacao });
    }

    listarAgendamentos(periodo: string): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/Agendamento', { Periodo: periodo });
    }

    criarFavorecido(data: Record<string, unknown>): Promise<ApiResponse<TedEnvelopeCopia | null>> {
        return this.post('/api/v1/Ted/Favorecido/Criar', data);
    }

    obterFavorecidos(params?: Record<string, string>): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/Favorecido/Obter', params);
    }

    excluirFavorecido(data: Record<string, unknown>): Promise<ApiResponse<TedEnvelopeCopia | null>> {
        return this.delete('/api/v1/Ted/Favorecido/Excluir', undefined, data);
    }

    obterProdutosLimites(): Promise<ApiResponse<TedListaCopia | null>> {
        return this.get('/api/v1/Ted/Limites/ObterProdutos');
    }

    atualizarLimites(data: Record<string, unknown>): Promise<ApiResponse<TedEnvelopeCopia | null>> {
        return this.put('/api/v1/Ted/Limites/Atualizar', data);
    }

    obterLimitesPorProduto(params: Record<string, string>): Promise<ApiResponse<TedLimitesResponseCopia | null>> {
        return this.get('/api/v1/Ted/Limites/ObterPorProduto', params);
    }

    transferir(data: TedTransferenciaRequestCopia): Promise<ApiResponse<TedTransferenciaResponseCopia | null>> {
        return this.post('/api/v1/Ted/Transferencias', data);
    }
}
