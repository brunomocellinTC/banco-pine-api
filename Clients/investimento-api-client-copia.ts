import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    InvestimentoEnvelopeCopia,
    InvestimentoListaCopia,
} from '../Models/investimento-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class InvestimentoApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    obterRelatorio(params?: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/ObterRelatorio', params);
    }

    obterDetalheOperacao(params: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Carteira/Operacao/Detalhe', params);
    }

    obterCarteira(params?: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Carteira', params);
    }

    obterPortifolio(params?: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/ObterPortifolio', params);
    }

    obterInvestimentos(periodo: string): Promise<ApiResponse<InvestimentoListaCopia | null>> {
        return this.get('/api/v1/Investimento/ObterInvestimentos', { periodo });
    }

    obterCarteiraCompleta(): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Carteira/Obter');
    }

    resgatar(data: Record<string, unknown>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.post('/api/v1/Investimento/Carteira/Resgate', data);
    }

    calcularResgate(data: Record<string, unknown>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.post('/api/v1/Investimento/Carteira/Resgate/Calcular', data);
    }

    obterPeriodoResgate(params: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Carteira/ObterPeriodoResgate', params);
    }

    obterComprovanteResgate(codigoTransacao: string): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Comprovante/Resgate', { codigoTransacao });
    }

    obterComprovanteAplicacao(codigoTransacao: string): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Comprovante/Aplicacao', { codigoTransacao });
    }

    comprarProduto(data: Record<string, unknown>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.post('/api/v1/Investimento/Produto/Comprar', data);
    }

    obterDetalheProduto(idProduto: string): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Produto/ObterDetalhe', { idProduto });
    }

    obterProdutos(): Promise<ApiResponse<InvestimentoListaCopia | null>> {
        return this.get('/api/v1/Investimento/Produto/Obter');
    }

    obterProdutosSimulacao(params: Record<string, string>): Promise<ApiResponse<InvestimentoListaCopia | null>> {
        return this.get('/api/v1/Investimento/Simulacao/ObterProdutos', params);
    }

    obterProdutoSimulacao(params: Record<string, string>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Simulacao/ObterProduto', params);
    }

    obterFiltroSimulacao(): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Simulacao/ObterFiltro');
    }

    salvarQuestionarioSuitability(data: Record<string, unknown>): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.post('/api/v1/Investimento/Suitability/Questionario/Salvar', data);
    }

    obterQuestionarioSuitability(): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Suitability/Questionario/Obter');
    }

    obterPerfilSuitability(): Promise<ApiResponse<InvestimentoEnvelopeCopia | null>> {
        return this.get('/api/v1/Investimento/Suitability/Perfil/Obter');
    }
}
