export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface TedTransferencia {
    id?: string;
    valor?: number;
    data?: string;
    status?: string;
}

export interface TedFavorecido {
    id?: string;
    nome?: string;
    conta?: string;
    banco?: string;
}

export interface TedLimite {
    produto?: string;
    limite?: number;
    utilizado?: number;
}

export interface TedTransferenciaResponse extends ResultadoPadrao<TedTransferencia> {
}

export interface TedHistoricoResponse extends ResultadoPadrao<TedTransferencia[]> {
}

export interface TedFavorecidoResponse extends ResultadoPadrao<TedFavorecido> {
}

export interface TedFavorecidoListaResponse extends ResultadoPadrao<TedFavorecido[]> {
}

export interface TedLimiteResponse extends ResultadoPadrao<TedLimite> {
}

export interface TedLimitesResponse extends ResultadoPadrao<TedLimite[]> {
}
