import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';

export class BaseApiClient {
  protected readonly request: APIRequestContext;
  protected readonly basePath: string;
  protected readonly headers: Record<string, string>;

  constructor(request: APIRequestContext, basePath: string, headers: Record<string, string> = {}) {
    this.request = request;
    this.basePath = basePath;
    this.headers = headers;
  }

  protected async get<T>(endpoint: string,params?: Record<string, string>): Promise<ApiResponse<T>> {
    const response = await this.request.get(`${this.basePath}${endpoint}`,{ params, headers: this.headers });
    return this.handleResponse<T>(response);
  }

  protected async post<T>(endpoint: string,data: unknown): Promise<ApiResponse<T>> {
    const response = await this.request.post(`${this.basePath}${endpoint}`,{ data, headers: this.headers });
    return this.handleResponse<T>(response);
  }

  protected async put<T>(endpoint: string,data: unknown): Promise<ApiResponse<T>> {
    const response = await this.request.put(`${this.basePath}${endpoint}`,{ data, headers: this.headers });
    return this.handleResponse<T>(response);
  }

  protected async patch<T>(endpoint: string,data: unknown): Promise<ApiResponse<T>> {
    const response = await this.request.patch(`${this.basePath}${endpoint}`,{ data, headers: this.headers });
    return this.handleResponse<T>(response);
  }

  protected async delete(endpoint: string,params?: Record<string, string>): Promise<ApiResponse<null>> {
    const response = await this.request.delete(`${this.basePath}${endpoint}`,{ params, headers: this.headers });

    return {
      status: response.status(),
      headers: response.headers(),
      body: null,
    };
  }

  protected async handleResponse<T>(response: APIResponse): Promise<ApiResponse<T>> {
    return {
      status: response.status(),
      headers: response.headers(),
      body: await response.json(),
    };
  }
}