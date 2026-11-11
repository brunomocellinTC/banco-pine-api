import { ApiEnvelopeCopia, ApiListEnvelopeCopia } from './api-envelope-copia.model';

export interface TedItemCopia {
    [campo: string]: unknown;
}

export interface TedEnvelopeCopia extends ApiEnvelopeCopia<TedItemCopia> {
}

export interface TedListaCopia extends ApiListEnvelopeCopia<TedItemCopia> {
}

export interface TedLimitesResponseCopia extends ApiEnvelopeCopia<TedItemCopia[]> {
}

export interface TedTransferenciaRequestCopia {
    nomeFavorecido: string;
    documentoFavorecido: string;
    valor: number;
    dataVencimento: string;
    horaVencimento: string;
    agenciaCredito: string;
    contaCredito: string;
    tipoConta: string;
    banco: {
        id: string;
        codigo: string;
        nome: string;
    };
    dadosSeguranca: {
        otp: string;
    };
}

export interface TedTransferenciaResponseCopia extends ApiEnvelopeCopia<{
    status: 'SOLICITADO';
}> {
}
