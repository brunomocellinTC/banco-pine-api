import { ApiEnvelopeCopia, ApiListEnvelopeCopia } from './api-envelope-copia.model';

export interface InvestimentoItemCopia {
    [campo: string]: unknown;
}

export interface InvestimentoEnvelopeCopia extends ApiEnvelopeCopia<InvestimentoItemCopia> {
}

export interface InvestimentoListaCopia extends ApiListEnvelopeCopia<InvestimentoItemCopia> {
}
