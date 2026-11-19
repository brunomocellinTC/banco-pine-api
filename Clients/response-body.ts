/** Decodifica JSON, inclusive quando o servidor declara text/plain.
 * Não confunde body vazio com {} ou com sucesso HTTP.
 */
export function parseResponseBody<T>(body: string, contentType = 'application/json'): T | null {
    const text = body.trim();
    if (!text) return null;
    const looksJson = text.startsWith('{') || text.startsWith('[') || text.startsWith('"') ||
      text === 'null' || text === 'true' || text === 'false';
    if (/\bjson\b|\+json\b/i.test(contentType) || looksJson) return JSON.parse(body) as T;
    return body as T;
}
