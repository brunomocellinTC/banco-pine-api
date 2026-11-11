import { ApiEnvelopeCopia } from './api-envelope-copia.model';

export interface HomeCarteiraProdutoCopia {
    id: number;
    produto: string;
    valor: number;
    valorRendimento: number;
    percentualAcumulado: number;
    liquidez: string;
    dataVencimento: string;
    podeResgatar: boolean;
}

export interface HomeCarteiraCopia {
    disponivelResgate: number;
    produtos: HomeCarteiraProdutoCopia[];
}

export interface HomeHistoricoCopia {
    possuiInvestimento: boolean;
    dataInicial: string;
    dataFinal: string;
    rendimento: number;
    investimentos: Array<Record<string, unknown>>;
}

export interface HomeSaldoCopia {
    [campo: string]: unknown;
}

export interface HomeInvestimentoCopia {
    [campo: string]: unknown;
}

export interface HomeFuncionalidadeCopia {
    [campo: string]: unknown;
}

export interface HomeBannerCopia {
    [campo: string]: unknown;
}

export interface HomeCarteiraResponseCopia extends ApiEnvelopeCopia<HomeCarteiraCopia> {
}

export interface HomeHistoricoResponseCopia extends ApiEnvelopeCopia<HomeHistoricoCopia> {
}

export interface HomeSaldoResponseCopia extends ApiEnvelopeCopia<HomeSaldoCopia> {
}

export interface HomeInvestimentosResponseCopia extends ApiEnvelopeCopia<HomeInvestimentoCopia[]> {
}

export interface HomeFuncionalidadesResponseCopia extends ApiEnvelopeCopia<HomeFuncionalidadeCopia[]> {
}

export interface HomeBannersResponseCopia extends ApiEnvelopeCopia<HomeBannerCopia[]> {
}
