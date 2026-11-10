import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import { OnboardingInput, OnboardingListaResponse, OnboardingResponse } from '../Models/onboarding.model';

export class OnboardingApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Onboarding');
    }

    async validarDocumento(data: OnboardingInput): Promise<ApiResponse<OnboardingResponse>> {
        return this.post<OnboardingResponse>('/Documento/Validacao', data);
    }

    async solicitarCodigo(data: OnboardingInput): Promise<ApiResponse<OnboardingResponse>> {
        return this.post<OnboardingResponse>('/Codigo/Solicitar', data);
    }

    async validarCodigo(data: OnboardingInput): Promise<ApiResponse<OnboardingResponse>> {
        return this.post<OnboardingResponse>('/Codigo/Validar', data);
    }

    async consultarEndereco(params?: Record<string, string>): Promise<ApiResponse<OnboardingListaResponse>> {
        return this.get<OnboardingListaResponse>('/Endereco/Consultar', params);
    }

    async cadastrarEndereco(data: OnboardingInput): Promise<ApiResponse<OnboardingResponse>> {
        return this.post<OnboardingResponse>('/Endereco/Cadastrar', data);
    }
}
