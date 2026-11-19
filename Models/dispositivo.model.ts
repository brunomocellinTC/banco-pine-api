export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface DispositivoTokenInput {
    dispositivoId?: string;
    token?: string;
    codigo?: string;
}

export interface DispositivoItem {
    id?: string;
    nome?: string;
    status?: string;
}

export interface DispositivoListaResponse extends ResultadoPadrao<DispositivoItem[]> {
}

export interface DispositivoTokenResponse extends ResultadoPadrao<DispositivoTokenInput> {
}

export interface DispositivoResponse extends ResultadoPadrao<unknown> {
}
