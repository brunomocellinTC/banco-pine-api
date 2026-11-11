import { ApiListEnvelopeCopia } from './api-envelope-copia.model';

export interface ComprovanteTransacaoCopia {
    idTransacao: string;
    tipo: string;
    titulo: string;
    descricao: string;
    valor: number;
    natureza: string;
    data: string;
}

export interface ComprovanteGrupoCopia {
    data: string;
    transacoes: ComprovanteTransacaoCopia[];
}

export interface ComprovanteItemCopia {
    items: ComprovanteGrupoCopia[];
}

export interface ComprovanteListagemResponseCopia extends ApiListEnvelopeCopia<ComprovanteItemCopia> {
}
