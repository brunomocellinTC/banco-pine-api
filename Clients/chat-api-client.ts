import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import { BaseApiClient } from './base-api-client';
import {
    ChatHistoricoResponse,
    ChatMensagemInput,
    ChatMensagemResponse,
} from '../Models/chat.model';

export class ChatApiClient extends BaseApiClient {
    constructor(request: APIRequestContext) {
        super(request, '/api/v1/Chat');
    }

    async enviarMensagem(data: ChatMensagemInput): Promise<ApiResponse<ChatMensagemResponse>> {
        return this.post<ChatMensagemResponse>('/Mensagem', data);
    }

    async obterMensagens(params?: Record<string, string>): Promise<ApiResponse<ChatHistoricoResponse>> {
        return this.get<ChatHistoricoResponse>('/ObterMensagens', params);
    }
}
