import { ApiListEnvelopeCopia } from './api-envelope-copia.model';

export interface ExtratoTransacaoCopia {
    dataTransacao: string;
    saldoAtual: number;
    natureza: string;
    nomeRecebedor: string;
    valorTransacao: number;
    saldoDisponivel: number;
    descricaoHistorico: string;
    complementoHistorico: string;
}

export interface ExtratoDiaCopia {
    data: string;
    transacoes: ExtratoTransacaoCopia[];
}

export interface ExtratoResponseCopia extends ApiListEnvelopeCopia<ExtratoDiaCopia> {
}
