import { ApiEnvelopeCopia } from './api-envelope-copia.model';

export interface EmprestimoParcelaCopia {
    [campo: string]: unknown;
}

export interface EmprestimoProdutoCopia {
    [campo: string]: unknown;
}

export interface EmprestimoParcelasResponseCopia extends ApiEnvelopeCopia<EmprestimoParcelaCopia[]> {
}

export interface EmprestimoDetalheResponseCopia extends ApiEnvelopeCopia<EmprestimoProdutoCopia> {
}

export interface EmprestimoProdutosResponseCopia extends ApiEnvelopeCopia<EmprestimoProdutoCopia[]> {
}
