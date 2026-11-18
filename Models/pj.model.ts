export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface PjUsuario {
    id?: string;
    nome?: string;
    email?: string;
    perfil?: string;
    status?: string;
}

export interface PjAprovacao {
    id?: string;
    nome?: string;
    solicitante?: string;
    status?: string;
}

export interface PjUsuarioResponse extends ResultadoPadrao<PjUsuario> {
}

export interface PjUsuariosResponse extends ResultadoPadrao<PjUsuario[]> {
}

export interface PjAprovacaoResponse extends ResultadoPadrao<PjAprovacao> {
}

export interface PjAprovacoesResponse extends ResultadoPadrao<PjAprovacao[]> {
}
