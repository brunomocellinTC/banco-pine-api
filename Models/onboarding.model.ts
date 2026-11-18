export interface ResultadoPadrao<T> {
    'Request-Id'?: string;
    reqId?: string;
    mensagem?: string;
    statusCode?: string;
    item?: T;
}

export interface OnboardingInput {
    documento?: string;
    codigo?: string;
    valor?: string | number;
    tipo?: string;
}

export interface OnboardingItem {
    id?: string;
    nome?: string;
    status?: string;
}

export interface OnboardingResponse extends ResultadoPadrao<OnboardingItem> {
}

export interface OnboardingListaResponse extends ResultadoPadrao<OnboardingItem[]> {
}
