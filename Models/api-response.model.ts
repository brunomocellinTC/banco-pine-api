/** HTTP status e headers; body é nulo em 204 ou corpo ausente. */
export interface ApiResponse<T> {
    status: number;
    headers: Record<string, string>;
    body: T | null;
}
