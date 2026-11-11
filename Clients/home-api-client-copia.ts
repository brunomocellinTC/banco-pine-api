import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    HomeBannersResponseCopia,
    HomeCarteiraResponseCopia,
    HomeFuncionalidadesResponseCopia,
    HomeInvestimentosResponseCopia,
    HomeSaldoResponseCopia,
    HomeHistoricoResponseCopia,
} from '../Models/home-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class HomeApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, loginHash = process.env.LOGIN_HASH || '') {
        super(request, { 'x-login-hash': loginHash });

        if (!loginHash) {
            throw new Error('Configure LOGIN_HASH antes de consultar as APIs da Home.');
        }
    }

    carteiraInvestimento(): Promise<ApiResponse<HomeCarteiraResponseCopia | null>> {
        return this.get('/api/v1/Home/Investimento/Carteira');
    }

    historicoInvestimento(periodo: string): Promise<ApiResponse<HomeHistoricoResponseCopia | null>> {
        return this.get('/api/v1/Home/Investimento/Historico', { periodo });
    }

    saldoInvestimento(): Promise<ApiResponse<HomeSaldoResponseCopia | null>> {
        return this.get('/api/v1/Home/Investimento/Saldo');
    }

    obterInvestimentos(periodo: string): Promise<ApiResponse<HomeInvestimentosResponseCopia | null>> {
        return this.get('/api/v1/Home/ObterInvestimentos', { periodo });
    }

    obterFuncionalidades(): Promise<ApiResponse<HomeFuncionalidadesResponseCopia | null>> {
        return this.get('/api/v1/Home/Funcionalidade/Obter');
    }

    obterBanners(): Promise<ApiResponse<HomeBannersResponseCopia | null>> {
        return this.get('/api/v1/Home/Banner/Obter');
    }
}
