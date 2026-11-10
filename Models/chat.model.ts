export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface ChatMensagemInput {
    mensagem?: string;
    tipo?: string;
    remetente?: string;
    conteudo?: string;
}

export interface ChatMensagem {
    id?: string;
    texto?: string;
    data?: string;
    tipo?: string;
    origem?: string;
}

export interface ChatMensagemResponse extends ResultadoPadrao<ChatMensagem> {
}

export interface ChatHistoricoResponse extends ResultadoPadrao<ChatMensagem[]> {
}
