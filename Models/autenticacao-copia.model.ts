import { ApiEnvelopeCopia } from './api-envelope-copia.model';

export interface TecladoVirtualItemCopia {
    posicao: number;
    identificador: string;
    opcoes: unknown;
}

export interface TecladoVirtualResponseCopia extends ApiEnvelopeCopia<{
    tecladoItens: TecladoVirtualItemCopia[];
}> {
}
