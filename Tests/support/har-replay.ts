import fs from 'fs';
import path from 'path';
import { parseResponseBody } from '../../Clients/response-body';

interface HarEntry {
  request: { method: string; url: string; headers: Array<{name: string; value: string}>;
    postData?: {mimeType?: string; text?: string} };
  response: {status: number; content: {mimeType?: string; text?: string; encoding?: string}};
}
export interface ReplayOverride {
  query?: Record<string, string | string[] | null>;
  body?: unknown;
  expectedBody?: unknown;
  expectedStatus?: number;
  /** JSON Pointers exatos para valores escalares dinâmicos. Não aceita ignorar objetos/listas. */
  ignore?: string[];
}
export interface ReplayCase {
  id: string;
  method: string;
  pathname: string;
  entry: HarEntry;
  override: ReplayOverride;
}
const own = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);

export function loadHarReplayCases(): ReplayCase[] {
  const dir = path.resolve(process.cwd(), 'hars');
  const overrideFile = path.resolve(process.cwd(), 'Data/har-replay.local.json');
  const overrides: Record<string, ReplayOverride> = fs.existsSync(overrideFile)
    ? JSON.parse(fs.readFileSync(overrideFile, 'utf8')) : {};
  if (!fs.existsSync(dir)) throw new Error('Pasta hars ausente: a suíte 1:1 exige as evidências locais.');
  const cases: ReplayCase[] = [];
  for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.har')).sort()) {
    const har = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')) as {log: {entries: HarEntry[]}};
    har.log.entries.forEach((entry, index) => {
      const id = `${file}#${index + 1}`;
      cases.push({id, method: entry.request.method.toUpperCase(),
        pathname: new URL(entry.request.url).pathname, entry, override: overrides[id] || {}});
    });
  }
  if (!cases.length) throw new Error('Nenhuma request encontrada nos HARs.');
  for (const id of Object.keys(overrides)) {
    if (!cases.some(c => c.id === id)) throw new Error(`Override sem request correspondente: ${id}`);
  }
  return cases;
}

/** Somente placeholders explícitos são substituídos. Nunca reaproveita credenciais dos HARs. */
export function resolveReplayValue(value: unknown): unknown {
  if (typeof value === 'string') {
    return value.replace(/\$\{ENV:([A-Z][A-Z0-9_]*)\}/g, (_, name: string) => {
      const resolved = process.env[name]?.trim();
      if (!resolved) throw new Error(`Variável ausente para replay: ${name}`);
      return resolved;
    });
  }
  if (Array.isArray(value)) return value.map(resolveReplayValue);
  if (value !== null && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, resolveReplayValue(item)]));
  return value;
}

export function replayRequest(c: ReplayCase): {url: string; data?: string; contentType?: string} {
  const source = new URL(c.entry.request.url);
  // Destino sempre é API_BASE_URL; host, cookies e headers da captura não são transportados.
  for (const [key, raw] of Object.entries(c.override.query || {})) {
    source.searchParams.delete(key);
    if (raw === null) continue;
    for (const value of Array.isArray(raw) ? raw : [raw]) {
      source.searchParams.append(key, resolveReplayValue(value) as string);
    }
  }
  const post = c.entry.request.postData;
  const data = own(c.override, 'body') ? JSON.stringify(resolveReplayValue(c.override.body)) : post?.text;
  return {url: source.pathname + source.search, data,
    contentType: post?.mimeType || (data === undefined ? undefined : 'application/json')};
}

export function decodeReplayBody(raw: Buffer, contentType: string): unknown {
  if (!raw.length) return null;
  if (raw.subarray(0, 5).toString() === '%PDF-') return raw;
  const text = raw.toString('utf8');
  if (/\bjson\b|\+json\b|^(text\/|application\/xml)/i.test(contentType) || /^\s*[\{\[]/.test(text))
    return parseResponseBody(text, contentType);
  return raw;
}

export function replayExpectedBody(c: ReplayCase): unknown {
  if (own(c.override, 'expectedBody')) return resolveReplayValue(c.override.expectedBody);
  const content = c.entry.response.content;
  if (!own(content, 'text')) throw new Error('HAR sem conteúdo de resposta: não é possível validar dados 1:1.');
  return decodeReplayBody(Buffer.from(content.text || '', content.encoding === 'base64' ? 'base64' : 'utf8'),
    content.mimeType || '');
}

const escapePointer = (key: string) => key.replace(/~/g, '~0').replace(/\//g, '~1');
const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value) && !Buffer.isBuffer(value);

/** Compara valores e presença de TODOS os campos; erros não exibem dados bancários. */
export function compareReplayBody(expected: unknown, actual: unknown, ignored: string[] = []): string[] {
  const defaults = ['/requestId', '/reqId', '/Request-Id'];
  const ignores = new Set([...defaults, ...ignored]);
  const used = new Set<string>();
  const errors: string[] = [];
  function compare(a: unknown, b: unknown, pointer: string): void {
    if (ignores.has(pointer)) {
      used.add(pointer);
      if (a !== null && typeof a === 'object') errors.push(`${pointer}: ignorar objeto/lista não é permitido`);
      else if (typeof a !== typeof b || (a === null) !== (b === null)) errors.push(`${pointer}: tipo divergente`);
      return;
    }
    if (Buffer.isBuffer(a)) {
      if (!Buffer.isBuffer(b) || !a.equals(b)) errors.push(`${pointer || '/'}: conteúdo binário divergente`);
    } else if (Array.isArray(a)) {
      if (!Array.isArray(b)) { errors.push(`${pointer || '/'}: esperado array`); return; }
      if (a.length !== b.length) errors.push(`${pointer || '/'}: quantidade de itens divergente`);
      a.forEach((item, index) => { if (index < b.length) compare(item, b[index], `${pointer}/${index}`); });
    } else if (isObject(a)) {
      if (!isObject(b)) { errors.push(`${pointer || '/'}: esperado objeto`); return; }
      for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
        const child = `${pointer}/${escapePointer(key)}`;
        if (!own(a, key)) errors.push(`${child}: campo extra`);
        else if (!own(b, key)) errors.push(`${child}: campo ausente`);
        else compare(a[key], b[key], child);
      }
    } else if (!Object.is(a, b)) errors.push(`${pointer || '/'}: valor divergente`);
  }
  compare(expected, actual, '');
  for (const pointer of ignored) {
    if (!used.has(pointer)) errors.push(`${pointer}: exceção não utilizada; revise o JSON Pointer`);
  }
  return errors;
}
