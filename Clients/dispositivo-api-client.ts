import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    DispositivoListaResponse,
    DispositivoResponse,
    DispositivoTokenInput,
    DispositivoTokenResponse,
} from '../Models/dispositivo.model';
import { BaseApiClient } from './base-api-client';

export class DispositivoApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Dispositivo');
    }

    async listar(params?: Record<string, string>): Promise<ApiResponse<DispositivoListaResponse>> {
        return this.get<DispositivoListaResponse>('/Listar', params);
    }

    async cadastrarTokenOtp(data: DispositivoTokenInput): Promise<ApiResponse<DispositivoTokenResponse>> {
        return this.post<DispositivoTokenResponse>('/Token/Otp/Cadastrar', data);
    }

    async cadastrarTokenFirebase(data: DispositivoTokenInput): Promise<ApiResponse<DispositivoTokenResponse>> {
        return this.post<DispositivoTokenResponse>('/Token/Firebase/Cadastrar', data);
    }

    async excluir(params?: Record<string, string>): Promise<ApiResponse<DispositivoResponse>> {
        return this.delete('/Excluir', params);
    }
}
