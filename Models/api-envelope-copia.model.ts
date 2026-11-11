export interface ApiEnvelopeCopia<TItem = unknown> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: TItem;
}

export interface ApiListEnvelopeCopia<TItem = unknown> extends ApiEnvelopeCopia {
    totalRegistros?: number;
    itens?: TItem[];
}
