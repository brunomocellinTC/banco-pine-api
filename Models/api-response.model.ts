export interface ApiResponse<T> {
    status: number;
    headers: Record<string, string>;
    body: T;
  }