import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    CarteiraInvestimentosResponse,
    HistoricoInvestimentosResponse,
} from '../Models/investimento.model';
import {
    HomeBannerResponse,
    HomeCarteiraResponse,
    HomeEmprestimoProdutosResponse,
    HomeFuncionalidadeResponse,
    HomeGerenciarUsuarioResponse,
    HomeHistoricoResponse,
    HomeInvestimentosResponse,
    HomeOfertasResponse,
    HomePortifolioResponse,
    HomeSaldoResponse,
} from '../Models/home.model';
import { BaseApiClient } from './base-api-client';

export class HomeApiClient extends BaseApiClient {
    constructor(request: APIRequestContext, loginHash: string) {
        super(request, '/api/v1/Home', { 'x-login-hash': loginHash });
    }

    async Carteira(): Promise<ApiResponse<CarteiraInvestimentosResponse>> {
        return this.get<CarteiraInvestimentosResponse>('/Investimento/Carteira');
    }

    async Historico(periodo: string): Promise<ApiResponse<HistoricoInvestimentosResponse>> {
        return this.get<HistoricoInvestimentosResponse>('/Investimento/Historico', { periodo });
    }

    async bannerObter(params?: Record<string, string>): Promise<ApiResponse<HomeBannerResponse>> {
        return this.get<HomeBannerResponse>('/Banner/Obter', params);
    }

    async obterOfertas(params?: Record<string, string>): Promise<ApiResponse<HomeOfertasResponse>> {
        return this.get<HomeOfertasResponse>('/ObterOfertas', params);
    }

    async funcionalidadeObter(params?: Record<string, string>): Promise<ApiResponse<HomeFuncionalidadeResponse>> {
        return this.get<HomeFuncionalidadeResponse>('/Funcionalidade/Obter', params);
    }

    async obterInvestimentos(params?: Record<string, string>): Promise<ApiResponse<HomeInvestimentosResponse>> {
        return this.get<HomeInvestimentosResponse>('/ObterInvestimentos', params);
    }

    async saldoInvestimento(params?: Record<string, string>): Promise<ApiResponse<HomeSaldoResponse>> {
        return this.get<HomeSaldoResponse>('/Investimento/Saldo', params);
    }

    async historicoInvestimento(params?: Record<string, string>): Promise<ApiResponse<HomeHistoricoResponse>> {
        return this.get<HomeHistoricoResponse>('/Investimento/Historico', params);
    }

    async obterPortifolio(params?: Record<string, string>): Promise<ApiResponse<HomePortifolioResponse>> {
        return this.get<HomePortifolioResponse>('/ObterPortifolio', params);
    }

    async carteiraInvestimento(params?: Record<string, string>): Promise<ApiResponse<HomeCarteiraResponse>> {
        return this.get<HomeCarteiraResponse>('/Investimento/Carteira', params);
    }

    async obterEmprestimoProdutos(params?: Record<string, string>): Promise<ApiResponse<HomeEmprestimoProdutosResponse>> {
        return this.get<HomeEmprestimoProdutosResponse>('/Emprestimo/Produtos/Obter', params);
    }

    async obterGerenciarUsuarioPj(params?: Record<string, string>): Promise<ApiResponse<HomeGerenciarUsuarioResponse>> {
        return this.get<HomeGerenciarUsuarioResponse>('/PJ/GerenciarUsuario/Obter', params);
    }
}