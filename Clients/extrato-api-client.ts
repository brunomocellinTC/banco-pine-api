import { APIRequestContext } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { ApiListEnvelope } from '../Models/api-envelope.model';
import { ApiResponse } from '../Models/api-response.model';
export class ExtratoApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) { super(request, '/api/v1/Extrato'); }
  obter(params?: Record<string, string>): Promise<ApiResponse<ApiListEnvelope>> { return this.get('/Obter', params); }
}
