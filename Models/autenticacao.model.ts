export interface TecladoItem {
    posicao: string;
    identificador: string;
    opcoes: string;
}

export interface TecladoVirtualResponse {
    'Request-Id': string;
    reqId: string;
    mensagem: string;
    statusCode: string;
    item: {
        tecladoItens: TecladoItem[];
        hashAutenticacao: string;
    };
}