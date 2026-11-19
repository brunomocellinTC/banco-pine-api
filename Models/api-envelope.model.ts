/** Forma documentada no Swagger: propriedades opcionais seguem o contrato OpenAPI. */
export interface ApiEnvelope<T = unknown> {
  'Request-Id'?: string;
  requestId?: string; // alias observado na serialização HTTP
  reqId?: string;
  mensagem?: string;
  statusCode?: string;
  item?: T | null;
}
export interface ApiListEnvelope<T = unknown> extends ApiEnvelope {
  itens?: T[] | null;
  totalRegistros?: number;
}
