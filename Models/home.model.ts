export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface HomeBanner {
    id?: string;
    titulo?: string;
    descricao?: string;
    imagemUrl?: string;
    link?: string;
}

export interface HomeOferta {
    id?: string;
    nome?: string;
    descricao?: string;
    valor?: number;
}

export interface HomeFuncionalidade {
    id?: string;
    nome?: string;
    descricao?: string;
    ativo?: boolean;
}

export interface HomeInvestimento {
    id?: string;
    nome?: string;
    valor?: number;
    rendimento?: number;
}

export interface HomePortfolio {
    total?: number;
    rendimento?: number;
    produtos?: HomeInvestimento[];
}

export interface HomeBannerResponse extends ResultadoPadrao<HomeBanner[]> {
}

export interface HomeOfertasResponse extends ResultadoPadrao<HomeOferta[]> {
}

export interface HomeFuncionalidadeResponse extends ResultadoPadrao<HomeFuncionalidade[]> {
}

export interface HomeInvestimentosResponse extends ResultadoPadrao<HomeInvestimento[]> {
}

export interface HomeSaldoResponse extends ResultadoPadrao<HomePortfolio> {
}

export interface HomeHistoricoResponse extends ResultadoPadrao<unknown> {
}

export interface HomePortifolioResponse extends ResultadoPadrao<HomePortfolio> {
}

export interface HomeCarteiraResponse extends ResultadoPadrao<HomeInvestimento[]> {
}

export interface HomeEmprestimoProdutosResponse extends ResultadoPadrao<unknown> {
}

export interface HomeGerenciarUsuarioResponse extends ResultadoPadrao<unknown> {
}
