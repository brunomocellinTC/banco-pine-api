export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface ContaDadosPessoais {
    nome?: string;
    cpf?: string;
    email?: string;
    telefone?: string;
}

export interface ContaEndereco {
    cep?: string;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
}

export interface ContaListagem {
    id?: string;
    nome?: string;
    tipo?: string;
    status?: string;
}

export interface ContaDadosPessoaisResponse extends ResultadoPadrao<ContaDadosPessoais> {
}

export interface ContaEnderecoResponse extends ResultadoPadrao<ContaEndereco> {
}

export interface ContaListaResponse extends ResultadoPadrao<ContaListagem[]> {
}

export interface ContaStatusResponse extends ResultadoPadrao<unknown> {
}
