import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';

export class BaseApiClientCopia {
    protected readonly request: APIRequestContext;
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        const baseUrl = process.env.API_BASE_URL;

        if (!baseUrl) {
            throw new Error('Configure API_BASE_URL no arquivo .env.');
        }

        let parsedBaseUrl: URL;
        try {
            parsedBaseUrl = new URL(baseUrl);
        } catch {
            throw new Error('API_BASE_URL deve ser uma URL absoluta válida.');
        }

        if (!['http:', 'https:'].includes(parsedBaseUrl.protocol)) {
            throw new Error('API_BASE_URL deve usar o protocolo HTTP ou HTTPS.');
        }

        this.request = request;
        this.baseUrl = baseUrl.replace(/\/+$/, '');
        this.headers = headers;
    }

    protected get<T>(
        endpoint: string,
        params?: Record<string, string>,
    ): Promise<ApiResponse<T | null>> {
        return this.send<T>('GET', endpoint, { params });
    }

    protected post<T>(
        endpoint: string,
        data?: object,
        params?: Record<string, string>,
    ): Promise<ApiResponse<T | null>> {
        return this.send<T>('POST', endpoint, { data, params });
    }

    protected put<T>(
        endpoint: string,
        data: object,
        params?: Record<string, string>,
    ): Promise<ApiResponse<T | null>> {
        return this.send<T>('PUT', endpoint, { data, params });
    }

    protected delete<T>(
        endpoint: string,
        params?: Record<string, string>,
        data?: object,
    ): Promise<ApiResponse<T | null>> {
        return this.send<T>('DELETE', endpoint, { params, data });
    }

    private async send<T>(
        method: string,
        endpoint: string,
        options: { data?: object; params?: Record<string, string> },
    ): Promise<ApiResponse<T | null>> {
        const url = `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}`;
        const response = await this.request.fetch(url, {
            method,
            data: options.data,
            params: options.params,
            headers: this.headers,
        });

        return this.toApiResponse<T>(response);
    }

    private async toApiResponse<T>(response: APIResponse): Promise<ApiResponse<T | null>> {
        const body = await response.body();

        return {
            status: response.status(),
            headers: response.headers(),
            body: body.length === 0 ? null : JSON.parse(body.toString('utf8')) as T,
        };
    }
}
