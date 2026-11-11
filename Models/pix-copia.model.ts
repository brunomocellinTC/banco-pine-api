import { ApiEnvelopeCopia, ApiListEnvelopeCopia } from './api-envelope-copia.model';

export interface PixItemCopia {
    [campo: string]: unknown;
}

export interface PixEnvelopeCopia extends ApiEnvelopeCopia<PixItemCopia> {
}

export interface PixListaCopia extends ApiListEnvelopeCopia<PixItemCopia> {
}

export interface PixLimitesCopia {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: {
        periodo: string;
        limitePeriodo: number;
        limiteTransacao: number;
        limitePessoaFisica: number;
        limitePessoaJuridica: number;
    };
}

export interface PixQrCodeGerarRequestCopia {
    valor: number;
    mensagem: string;
    chavePixFavorecido: string;
    tipoChaveFavorecido: string;
}

export interface PixQrCodeProcessarRequestCopia {
    valorQrCode: string;
}

export interface PixQrCodeGeradoCopia extends ApiEnvelopeCopia<{
    qrCodeImagem: string;
    pixCopiaCola: string;
    valor: number;
    mensagem: string;
    nomeFavorecido: string;
    chavePixFavorecido: string;
    tipoChaveFavorecido: string;
}> {
}

export interface PixQrCodeBancoCopia {
    codigo: string;
    nome: string;
    agencia: string;
    conta: string;
    tipoConta: string;
}

export interface PixQrCodeDadosRecorrenciaCopia {
    idRecorrencia: string;
    jornada: string;
    retentativa: unknown;
    valorRecorrencia: number;
    valorMinimo: number;
    ispbRecebedor: string;
    nomeRecebedor: string;
    cnpjRecebedor: string;
    documentoPagador: string;
    nomePagador: string;
    dataInicial: string;
    dataFinal: string;
    periodicidade: string;
    contrato: string;
    objetoPagamento: string;
    prazoAutorizacao: string;
    proximoPagamento: string;
}

export interface PixQrCodeProcessadoCopia extends ApiEnvelopeCopia<{
    valor: number;
    identificador: string;
    mensagem: string;
    nomeFavorecido: string;
    chavePixFavorecido: string;
    tipoChaveFavorecido: string;
    tipoQrCode: string;
    tipoPix: string;
    referencia: string;
    modalidadeAgente: string;
    banco: PixQrCodeBancoCopia;
    dadosRecorrencia: PixQrCodeDadosRecorrenciaCopia;
}> {
}
