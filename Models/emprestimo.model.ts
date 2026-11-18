export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface EmprestimoProduto {
    id?: string;
    nome?: string;
    valor?: number;
    parcela?: number;
    taxa?: number;
}

export interface EmprestimoParcela {
    numero?: number;
    valor?: number;
    dataVencimento?: string;
    status?: string;
}

export interface EmprestimoProdutosResponse extends ResultadoPadrao<EmprestimoProduto[]> {
}

export interface EmprestimoDetalheResponse extends ResultadoPadrao<EmprestimoProduto> {
}

export interface EmprestimoParcelasResponse extends ResultadoPadrao<EmprestimoParcela[]> {
}
