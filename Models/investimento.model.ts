export interface CarteiraInvestimento {
    id: number;
    produto: string;
    valor: number;
    valorRendimento: number;
    percentualAcumulado: number;
    liquidez: string;
    dataVencimento: string;
    podeResgatar: boolean;
}

export interface CarteiraInvestimentosResponse {
    'Request-Id': string;
    reqId: string;
    mensagem: string;
    statusCode: string;
    item: {
        disponivelResgate: number;
        produtos: CarteiraInvestimento[];
    };
}

export interface HistoricoInvestimento {
    dataReferencia: string;
    cdb: number;
    cdbMensal: number;
    lca: number;
    lci: number;
    lf: number;
    outros: number;
    valorAgregado: number;
    rendimentoDia: number;
    rendimentoAcumulado: number;
}

export interface HistoricoInvestimentosResponse {
    'Request-Id': string;
    reqId: string;
    mensagem: string;
    statusCode: string;
    item: {
        possuiInvestimento: boolean;
        dataInicial: string;
        dataFinal: string;
        rendimento: number;
        investimentos: HistoricoInvestimento[];
    };
}