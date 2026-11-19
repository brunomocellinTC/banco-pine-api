import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { parseResponseBody } from './response-body';

/** Cliente HTTP único. Cabeçalhos do Playwright (incluindo autenticação) são herdados. */
export class BaseApiClient {
  constructor(
    protected readonly request: APIRequestContext,
    protected readonly basePath: string,
    protected readonly headers: Record<string, string> = {},
  ) {}

  protected get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.send<T>('GET', endpoint, { params });
  }
  protected post<T>(endpoint: string, data?: unknown, params?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.send<T>('POST', endpoint, { data, params });
  }
  protected put<T>(endpoint: string, data?: unknown, params?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.send<T>('PUT', endpoint, { data, params });
  }
  protected patch<T>(endpoint: string, data?: unknown, params?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.send<T>('PATCH', endpoint, { data, params });
  }
  protected delete<T = unknown>(endpoint: string, params?: Record<string, string>, data?: unknown): Promise<ApiResponse<T>> {
    return this.send<T>('DELETE', endpoint, { params, data });
  }
  protected async send<T>(method: string, endpoint: string, opts: {data?: unknown; params?: Record<string, string>} = {}): Promise<ApiResponse<T>> {
    const url = `${this.basePath.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    const response = await this.request.fetch(url, {
      method, headers: this.headers, params: opts.params, ...(opts.data === undefined ? {} : { data: opts.data }),
    });
    return this.handleResponse<T>(response);
  }
  protected async handleResponse<T>(response: APIResponse): Promise<ApiResponse<T>> {
    const contentType = response.headers()['content-type'] || '';
    const buffer = await response.body();
    let body: unknown = null;
    if (buffer.length > 0) {
      const text = buffer.toString('utf8');
      if (buffer.subarray(0,5).toString() === '%PDF-') body = buffer;
      else if (/\bjson\b|\+json\b|^(text\/|application\/xml)/i.test(contentType) ||
        /^\s*[\{\[]/.test(text)) body = parseResponseBody(text, contentType);
      else body = buffer;
    }
    return { status: response.status(), headers: response.headers(), body: body as T | null };
  }
}
