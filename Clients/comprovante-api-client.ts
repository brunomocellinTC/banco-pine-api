import { APIRequestContext } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { ApiListEnvelope } from '../Models/api-envelope.model';
import { ApiResponse } from '../Models/api-response.model';
export class ComprovanteApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) { super(request, '/api/v1/Comprovante'); }
  listar(params?: Record<string, string>): Promise<ApiResponse<ApiListEnvelope>> {
    return this.get('/Listar', params);
  }
}
