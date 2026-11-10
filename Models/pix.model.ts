export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface PixChave {
    id?: string;
    chave?: string;
    tipo?: string;
    status?: string;
}

export interface PixTransferencia {
    id?: string;
    valor?: number;
    data?: string;
    status?: string;
}

export interface PixAutorizacao {
    id?: string;
    nome?: string;
    status?: string;
    valor?: number;
}

export interface PixChaveResponse extends ResultadoPadrao<PixChave> {
}

export interface PixChaveListaResponse extends ResultadoPadrao<PixChave[]> {
}

export interface PixTransferenciaResponse extends ResultadoPadrao<PixTransferencia> {
}

export interface PixHistoricoResponse extends ResultadoPadrao<PixTransferencia[]> {
}

export interface PixAutorizacaoResponse extends ResultadoPadrao<PixAutorizacao> {
}

export interface PixAutorizacaoListaResponse extends ResultadoPadrao<PixAutorizacao[]> {
}
