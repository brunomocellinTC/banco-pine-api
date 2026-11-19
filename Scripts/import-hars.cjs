// Importação de arquivos locais: não inicia Playwright nem faz chamadas HTTP.
const fs = require('fs');
const path = require('path');
const {createHash} = require('crypto');
const root = path.resolve(__dirname, '..');
const swagger = JSON.parse(fs.readFileSync(path.join(root, 'swagger.json'), 'utf8'));
const privateFile = path.join(root, 'Data/har-values.local.json');
const privateValues = fs.existsSync(privateFile) ? JSON.parse(fs.readFileSync(privateFile, 'utf8')) : {};
const files = fs.readdirSync(path.join(root, 'hars')).filter(name => name.endsWith('.har'))
  .sort((a, b) => a.localeCompare(b, 'en', {numeric: true}));
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const digest = value => createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');
const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const operations = Object.entries(swagger.paths).flatMap(([route, methods]) =>
  Object.entries(methods).filter(([method]) => ['get', 'post', 'put', 'patch', 'delete'].includes(method))
    .map(([method, operation]) => {
      const names = [];
      const pattern = route.split('/').map(segment => segment.startsWith('{')
        ? (names.push(segment.slice(1, -1)), '([^/]+)') : escapeRegex(segment)).join('/');
      return {route, method: method.toUpperCase(), operation, names, regex: new RegExp(`^${pattern}$`, 'i')};
    }));
const bindings = new Map();
const usedNames = new Set();
function binding(base, value) {
  const key = `${base}:${JSON.stringify(value)}`;
  if (bindings.has(key)) return bindings.get(key);
  let name = base;
  for (let index = 2; usedNames.has(name); index++) name = `${base}_${index}`;
  usedNames.add(name);
  bindings.set(key, name);
  if (!Object.prototype.hasOwnProperty.call(privateValues, name)) privateValues[name] = value;
  return name;
}
function variableName(key, value) {
  if (/^cpf$/i.test(key) || (/^documento$/i.test(key) && typeof value === 'string' && /^\d{11}$/.test(value))) return 'CPF';
  if (/chave/i.test(key) && !/tipo/i.test(key)) return 'CHAVE_PIX_TESTE';
  return `HAR_${key.replace(/[^a-z0-9]/gi, '_').toUpperCase()}`;
}
function sanitizeParameters(values) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => {
    const sensitive = /cpf|cnpj|documento|chave|contrato|(^id|id$)|codigoTransacao|codigoOperacao|^operacao$|recorrencia/i.test(key);
    return [key, sensitive && value !== '' ? `\${ENV:${binding(variableName(key, value), value)}}` : value];
  }));
}
const publicBodyFields = /^(tipo|periodo|tipoAtualizacao|tipoChave|tipoChaveFavorecido)$/i;
function sanitizeBody(value, key = 'BODY') {
  if (Array.isArray(value)) return value.map(item => sanitizeBody(item, key));
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([child, item]) => [child, sanitizeBody(item, child)]));
  if (value === null || value === '' || typeof value === 'boolean' ||
      (typeof value === 'number' && value <= 0) || publicBodyFields.test(key)) return value;
  return {$env: binding(variableName(key, value), value), type: typeof value};
}
function inferShape(values) {
  const type = value => Buffer.isBuffer(value) ? 'binary' : Array.isArray(value) ? 'array' : typeof value;
  const present = values.filter(value => value !== null);
  const shape = {types: [...new Set(present.map(type))].sort(), nullable: present.length !== values.length};
  const objects = present.filter(value => type(value) === 'object');
  if (objects.length) {
    const keys = Object.keys(objects[0]).filter(key => objects.every(value => Object.hasOwn(value, key)) &&
      !/\d{11}|\d{4}-\d{2}-\d{2}|@|^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/i.test(key)).sort();
    shape.properties = Object.fromEntries(keys.map(key => [key, inferShape(objects.map(value => value[key]))]));
  }
  const items = present.filter(Array.isArray).flat();
  if (items.length) shape.items = inferShape(items);
  return shape;
}
function errorIdentity(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const fields = body.codigo != null ? ['codigo'] : Array.isArray(body.erros) && body.erros.length
    ? ['erros'] : body.mensagem ? ['mensagem'] : [];
  function normalize(value) {
    if (typeof value === 'string') return value.replace(/\b(LineNumber|BytePositionInLine)\s*:\s*\d+/g, '$1:*');
    if (Array.isArray(value)) return value.map(normalize);
    if (value && typeof value === 'object') return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, normalize(item)]));
    return value;
  }
  return fields.length ? {fields, sha256: digest(normalize(Object.fromEntries(fields.map(key => [key, body[key]]))))} : null;
}
const pointerKey = key => key.replace(/~/g, '~0').replace(/\//g, '~1');
function observedRelations(inputs, body) {
  const relations = [];
  const identityFields = /^(cep|cpf|cnpj|documento|id|enderecoId|idProduto|numeroContrato|codigoTransacao|codigoOperacao|operacao|recorrencia|tipo|periodo|status)$/i;
  function inputLeaves(value, pointer) {
    if (Array.isArray(value)) return; // Não infere uma relação entre posições de listas distintas.
    if (!value || typeof value !== 'object') return;
    for (const [key, input] of Object.entries(value)) {
      const inputPath = `${pointer}/${pointerKey(key)}`;
      if (input && typeof input === 'object') { inputLeaves(input, inputPath); continue; }
      if (input == null || input === '' || !identityFields.test(key)) continue;
      const responseValues = new Map();
      const comparison = /^(cep|cpf|cnpj|documento)$/i.test(key) ? 'digits' : 'text';
      const normalize = item => comparison === 'digits' ? String(item).replace(/\D/g, '') : String(item);
      function find(value, location) {
        if (Array.isArray(value)) { value.forEach(item => find(item, `${location}/*`)); return; }
        if (!value || typeof value !== 'object') return;
        for (const [field, child] of Object.entries(value)) {
          const childPath = `${location}/${pointerKey(field)}`;
          if (field.toLowerCase() === key.toLowerCase() && child != null && typeof child !== 'object') {
            if (!responseValues.has(childPath)) responseValues.set(childPath, []);
            responseValues.get(childPath).push(child);
          }
          if (child && typeof child === 'object') find(child, childPath);
        }
      }
      find(body, '');
      for (const [response, values] of responseValues) if (values.every(value => normalize(value) === normalize(input))) {
        relations.push({input: inputPath, response, comparison});
      }
    }
  }
  for (const [key, value] of Object.entries(inputs)) inputLeaves(value, `/${key}`);
  return relations;
}
function responseBody(content) {
  const buffer = Buffer.from(content.text || '', content.encoding === 'base64' ? 'base64' : 'utf8');
  if (!buffer.length) return null;
  const text = buffer.toString('utf8');
  if (/json/i.test(content.mimeType || '') || /^\s*[\{\[]/.test(text)) return JSON.parse(text);
  return /^text\//i.test(content.mimeType || '') ? text : buffer;
}
const grouped = new Map();
const ignored = [];
let totalRawRequests = 0;
for (const file of files) {
  const har = JSON.parse(fs.readFileSync(path.join(root, 'hars', file), 'utf8'));
  har.log.entries.forEach((entry, index) => {
    if (entry.request.method === 'OPTIONS') return;
    totalRawRequests++;
    const url = new URL(entry.request.url);
    const match = operations.find(op => op.method === entry.request.method && op.regex.test(decodeURIComponent(url.pathname)));
    if (!match) { ignored.push({source: `${file}#${index + 1}`, method: entry.request.method, path: url.pathname}); return; }
    const rawQuery = Object.fromEntries(url.searchParams);
    if ([...url.searchParams.keys()].some(key => url.searchParams.getAll(key).length > 1)) {
      throw new Error(`Query repetida precisa de tratamento explícito em ${file}#${index + 1}`);
    }
    const pathMatch = match.regex.exec(decodeURIComponent(url.pathname));
    const rawPaths = Object.fromEntries(match.names.map((name, i) => [name, pathMatch[i + 1]]));
    const query = sanitizeParameters(rawQuery);
    const pathParams = sanitizeParameters(rawPaths);
    const request = {};
    const post = entry.request.postData;
    let rawBody;
    if (post && Object.prototype.hasOwnProperty.call(post, 'text')) {
      request.contentType = post.mimeType || 'application/json';
      try { rawBody = JSON.parse(post.text); request.body = sanitizeBody(rawBody); }
      catch { request.rawBodyEnv = binding(`HAR_RAW_${match.route.replace('/api/v1/', '').replace(/[^a-z0-9]/gi, '_').toUpperCase()}`, post.text); }
    }
    const authenticated = entry.request.headers.some(header => header.name.toLowerCase() === 'x-login-hash');
    const signature = {method: match.method, route: match.route, query, pathParams, request, authenticated};
    const key = JSON.stringify(canonical({...signature, status: entry.response.status}));
    if (!grouped.has(key)) grouped.set(key, {...signature, status: entry.response.status,
      group: match.operation.tags[0], deprecated: !!match.operation.deprecated,
      documented: !!match.operation.responses[String(entry.response.status)],
      id: `har-${digest({...signature, status: entry.response.status}).slice(0, 12)}`,
      sources: [], capturedAt: [], bodies: [], relations: []});
    const c = grouped.get(key);
    c.sources.push(`${file}#${index + 1}`);
    c.capturedAt.push(entry.startedDateTime.slice(0, 10));
    const response = responseBody(entry.response.content);
    c.bodies.push(response);
    c.relations.push(observedRelations({query: rawQuery, pathParams: rawPaths, body: rawBody}, response));
  });
}
if (ignored.length) throw new Error(`Requests ausentes do Swagger: ${JSON.stringify(ignored)}`);
const cases = [...grouped.values()].map(({bodies, capturedAt, relations, ...c}) => {
  const objects = bodies.filter(body => body && typeof body === 'object' && !Array.isArray(body) && !Buffer.isBuffer(body));
  const keys = [...new Set(objects.flatMap(Object.keys))].sort();
  const withItem = objects.filter(body => Object.prototype.hasOwnProperty.call(body, 'item'));
  const itemNonNull = withItem.length ? withItem.every(body => body.item != null) ? true :
    withItem.every(body => body.item === null) ? false : null : null;
  const identities = bodies.map(errorIdentity);
  const identity = identities[0] && identities.every(value => JSON.stringify(value) === JSON.stringify(identities[0]))
    ? identities[0] : undefined;
  const consistentRelations = relations[0].filter(relation => relations.every(list =>
    list.some(item => JSON.stringify(item) === JSON.stringify(relation))));
  return {...c, observations: c.sources.length, capturedAt: [...new Set(capturedAt)].sort(),
    ...(c.status < 300 && consistentRelations.length ? {requestRelations: consistentRelations} : {}),
    responseShape: {keys, itemNonNull}, responseContract: inferShape(bodies),
    ...(c.status >= 400 && c.status < 500 && identity ? {errorIdentity: identity} : {}),
    caseType: c.status < 300 ? 'success' : c.status < 500 ? 'client-error' : 'server-error'};
});
// O mesmo formato de resposta é compartilhado entre filtros e erros equivalentes.
const responseContracts = {};
const sanitizedCases = cases.map(({responseContract, ...c}) => {
  const responseContractRef = digest(responseContract);
  responseContracts[responseContractRef] = responseContract;
  return {...c, responseContractRef};
});
fs.writeFileSync(path.join(root, 'Data/har-observed-cases.json'), JSON.stringify({
  source: `${files.length} arquivos HAR; sem headers privados ou corpos de resposta`,
  sourceFiles: files, totalRawRequests, cases: sanitizedCases, responseContracts,
}, null, 2) + '\n');
fs.writeFileSync(privateFile, JSON.stringify(privateValues, null, 2) + '\n');
console.log(JSON.stringify({files: files.length, rawRequests: totalRawRequests, cases: cases.length,
  mutationCases: cases.filter(c => c.method !== 'GET').length,
  errorIdentities: cases.filter(c => c.errorIdentity).length,
  relatedCases: cases.filter(c => c.requestRelations).length, privateVariables: Object.keys(privateValues).length}));
