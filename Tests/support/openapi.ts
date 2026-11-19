import { APIResponse, expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parseResponseBody } from '../../Clients/response-body';

interface OpenApiSchema {
    $ref?: string;
    type?: string | string[];
    format?: string;
    nullable?: boolean;
    enum?: unknown[];
    required?: string[];
    properties?: Record<string, OpenApiSchema>;
    items?: OpenApiSchema;
    additionalProperties?: boolean | OpenApiSchema;
    minLength?: number; maxLength?: number; pattern?: string; minimum?: number; maximum?: number;
}

interface OpenApiResponse {
    content?: Record<string, { schema?: OpenApiSchema }>;
}

interface OpenApiOperation {
    responses: Record<string, OpenApiResponse>;
    parameters?: Array<{ name: string; in: string; required?: boolean; schema?: OpenApiSchema }>;
    deprecated?: boolean;
    requestBody?: {required?:boolean;content?:Record<string,{schema?:OpenApiSchema}>};
}

interface OpenApiDocument {
    paths: Record<string, Record<string, OpenApiOperation>>;
}

const openApiPath = path.resolve(process.cwd(), 'swagger.json');
const openApi = JSON.parse(fs.readFileSync(openApiPath, 'utf8')) as OpenApiDocument;

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function resolveReference(reference: string): OpenApiSchema {
    if (!reference.startsWith('#/')) {
        throw new Error(`Referência OpenAPI não suportada: ${reference}`);
    }

    let value: unknown = openApi;
    for (const segment of reference.slice(2).split('/')) {
        const key = segment.replace(/~1/g, '/').replace(/~0/g, '~');
        if (!isRecord(value) || !(key in value)) {
            throw new Error(`Referência OpenAPI não encontrada: ${reference}`);
        }
        value = value[key];
    }

    if (!isRecord(value)) {
        throw new Error(`Schema OpenAPI inválido na referência: ${reference}`);
    }

    return value as OpenApiSchema;
}

function matchesType(value: unknown, type: string): boolean {
    switch (type) {
        case 'object':
            return isRecord(value);
        case 'array':
            return Array.isArray(value);
        case 'string':
            return typeof value === 'string';
        case 'number':
            return typeof value === 'number' && Number.isFinite(value);
        case 'integer':
            return typeof value === 'number' && Number.isInteger(value);
        case 'boolean':
            return typeof value === 'boolean';
        default:
            return true;
    }
}

function matchesFormat(value: unknown, format: string): boolean {
    switch (format) {
        case 'date-time':
            return typeof value === 'string' &&
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) &&
                Number.isFinite(Date.parse(value));
        case 'uuid':
            return typeof value === 'string' &&
                /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value);
        case 'int32':
            return typeof value === 'number' &&
                Number.isInteger(value) &&
                value >= -2147483648 &&
                value <= 2147483647;
        case 'binary':
            return typeof value === 'string' || Buffer.isBuffer(value);
        case 'double':
            return typeof value === 'number' && Number.isFinite(value);
        default:
            return true;
    }
}

function validateSchema(
    value: unknown,
    schema: OpenApiSchema,
    location: string,
    referenceStack: Set<string> = new Set(),
): string[] {
    if (value === null && schema.nullable) {
        return [];
    }

    if (schema.$ref) {
        if (referenceStack.has(schema.$ref)) {
            return [];
        }
        const nextStack = new Set(referenceStack);
        nextStack.add(schema.$ref);
        return validateSchema(value, resolveReference(schema.$ref), location, nextStack);
    }

    if (value === null) {
        return schema.type === undefined ? [] : [`${location} não deve ser nulo`];
    }
    if (schema.format === 'binary' && Buffer.isBuffer(value)) return [];


    const types = schema.type === undefined
        ? []
        : Array.isArray(schema.type)
            ? schema.type
            : [schema.type];
    if (types.length > 0 && !types.some((type) => matchesType(value, type))) {
        return [`${location} deve ser ${types.join(' ou ')}`];
    }

    const errors: string[] = [];
    if (schema.enum && !schema.enum.some((candidate) => Object.is(candidate, value))) {
        errors.push(`${location} não corresponde a nenhum valor permitido`);
    }
    if (schema.minLength !== undefined && typeof value === 'string' && value.length < schema.minLength) errors.push(`${location} deve ter ao menos ${schema.minLength} caracteres`);
    if (schema.maxLength !== undefined && typeof value === 'string' && value.length > schema.maxLength) errors.push(`${location} deve ter no máximo ${schema.maxLength} caracteres`);
    if (schema.pattern && typeof value === 'string' && !new RegExp(schema.pattern).test(value)) errors.push(`${location} não corresponde ao padrão`);
    if (schema.minimum !== undefined && typeof value === 'number' && value < schema.minimum) errors.push(`${location} abaixo do mínimo`);
    if (schema.maximum !== undefined && typeof value === 'number' && value > schema.maximum) errors.push(`${location} acima do máximo`);
    if (schema.format && !matchesFormat(value, schema.format)) {
        errors.push(`${location} deve corresponder ao formato ${schema.format}`);
    }

    if (Array.isArray(value) && schema.items) {
        value.forEach((item, index) => {
            errors.push(
                ...validateSchema(item, schema.items as OpenApiSchema, `${location}[${index}]`, referenceStack),
            );
        });
    }

    if (isRecord(value)) {
        const properties = schema.properties || {};
        const hasRequestIdAlias =
            'Request-Id' in properties &&
            !('Request-Id' in value) &&
            'requestId' in value;

        for (const key of schema.required || []) {
            if (!(key in value) && !(key === 'Request-Id' && hasRequestIdAlias)) {
                errors.push(`${location}.${key} é obrigatório`);
            }
        }
        for (const [key, propertySchema] of Object.entries(properties)) {
            const valueKey: string = key === 'Request-Id' && hasRequestIdAlias
                ? 'requestId'
                : key;
            if (valueKey in value) {
                errors.push(
                    ...validateSchema(value[valueKey], propertySchema, `${location}.${key}`, referenceStack),
                );
            }
        }
        if (schema.additionalProperties === false) {
            for (const key of Object.keys(value)) {
                if (!(key in properties) && !(key === 'requestId' && hasRequestIdAlias)) {
                    errors.push(`${location}.${key} não está definido no schema`);
                }
            }
        } else if (isRecord(schema.additionalProperties)) {
            for (const [key, property] of Object.entries(value)) {
                if (!(key in properties) && !(key === 'requestId' && hasRequestIdAlias)) {
                    errors.push(
                        ...validateSchema(
                            property,
                            schema.additionalProperties as OpenApiSchema,
                            `${location}.${key}`,
                            referenceStack,
                        ),
                    );
                }
            }
        }
    }

    return errors;
}

export function requireApiEnvironment(): { baseUrl: string; loginHash: string } {
    const baseUrl = process.env.API_BASE_URL?.trim();
    const loginHash = process.env.LOGIN_HASH?.trim();

    if (!baseUrl) {
        throw new Error('Configure API_BASE_URL no arquivo .env.');
    }
    if (!loginHash) {
        throw new Error('Configure LOGIN_HASH no arquivo .env.');
    }

    return { baseUrl, loginHash };
}

export async function readResponseBody(response: APIResponse): Promise<unknown> {
    const raw = await response.body();
    if (raw.length === 0) return null;
    const type = response.headers()['content-type'] || '';
    if (raw.subarray(0,5).toString() === '%PDF-') return raw;
    const text = raw.toString('utf8');
    if (/\bjson\b|\+json\b|^(text\/|application\/xml)/i.test(type) || /^\s*[\{\[]/.test(text))
        return parseResponseBody(text, type);
    return raw;
}

export function getOpenApiOperation(method: string, route: string): OpenApiOperation | undefined {
    return openApi.paths[route]?.[method.toLowerCase()];
}

export function documentedSuccessStatuses(method: string, route: string): number[] {
    const operation = getOpenApiOperation(method, route);
    if (!operation) throw new Error(`Operação ausente do Swagger: ${method} ${route}`);
    return Object.keys(operation.responses).map(Number).filter(n => n >= 200 && n < 300);
}


/** Valida o payload de sucesso antes de enviar POST/PUT/PATCH/DELETE. */
export function expectOpenApiRequest(method:string, route:string, body:unknown): void {
    const operation = getOpenApiOperation(method, route);
    if (!operation) throw new Error(`Operação não encontrada no Swagger: ${method} ${route}`);
    const bodySchema = operation.requestBody?.content?.['application/json']?.schema ||
        Object.values(operation.requestBody?.content || {}).find(item=>item.schema)?.schema;
    if (!bodySchema) {
        if (body !== undefined) throw new Error(`Body não documentado para ${method} ${route}`);
        return;
    }
    if (body === undefined) throw new Error(`Massa de sucesso sem body para ${method} ${route}`);
    const issues = validateSchema(body, bodySchema, '$request');
    if (issues.length) throw new Error(`Payload divergente do Swagger em ${method} ${route}: ${issues.join('; ')}`);
}

/**
 * Compatibilidade observada exclusivamente nos HARs da HML. Não modifica o Swagger.
 * A execução normal reprova desvios desconhecidos, e registra desvios conhecidos no Allure.
 * STRICT_SWAGGER=1 transforma também os desvios conhecidos em falhas.
 */
export function strictSwagger(): boolean { return process.env.STRICT_SWAGGER === '1'; }

function valueAtLocation(root: unknown, location: string): unknown {
    if (!location.startsWith('$')) return undefined;
    const tokens = location.slice(1).match(/\.[^.[\]]+|\[\d+\]/g) || [];
    let current: unknown = root;
    for (const token of tokens) {
        const key: string | number = token.startsWith('[')
            ? Number(token.slice(1,-1)) : token.slice(1);
        if ((Array.isArray(current) || isRecord(current)) && key in current) {
            current = (current as Record<string | number, unknown>)[key];
        } else return undefined;
    }
    return current;
}

/** ISO local com ou sem fração; a API .NET HML retorna isso sem fuso. */
function isObservedDotNetDateTime(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,7})?$/.test(value)) return false;
    // Evita aceitar datas totalmente inválidas ou valores arbitrários como compatíveis.
    const millis = Date.parse(`${value}Z`);
    if (!Number.isFinite(millis)) return false;
    const canonical = new Date(millis).toISOString().slice(0,19);
    return canonical === value.slice(0,19);
}

/** Os únicos GETs onde o Allure enviado evidenciou datas ISO locais sem offset. */
const observedDateTimeRoutes = new Set([
    '/api/v1/Chat/ObterMensagens',
    '/api/v1/Conta/Obter',
    '/api/v1/Conta/ObterSaldo',
    '/api/v1/Conta/ListarContas',
    '/api/v1/Conta/Perfil/Obter',
    '/api/v1/Endereco/Obter',
    '/api/v1/Extrato/Obter',
    '/api/v1/Home/Investimento/Carteira',
    '/api/v1/Home/Investimento/Historico',
    '/api/v1/Home/ObterInvestimentos',
    '/api/v1/Investimento/Carteira',
    '/api/v1/Investimento/ObterInvestimentos',
    '/api/v1/Investimento/ObterPortifolio',
    '/api/v1/Investimento/Resumo',
    '/api/v1/Notificacao/Obter',
    '/api/v1/Pix/Favorito/Listar',
    '/api/v1/Pix/Transferencias/ObterHistorico',
    '/api/v1/Ted/Extratos',
]);

const extraPropertiesInHar: Record<string, RegExp> = {
    '/api/v1/Comprovante/Listar': /^\$\.itens\[\d+\]\.(?:data|transacoes)$/,
    '/api/v1/Ted/ObterHistorico': /^\$\.itens\[\d+\]\.(?:data|transacoes)$/,
    '/api/v1/Emprestimo/Obter': /^\$\.item$/,
};

export interface ContractInspection {
    /** Erros não cobertos pelas evidências HAR. */
    errors: string[];
    /** Desvios concretos, conscientemente tolerados apenas no modo funcional. */
    observedDifferences: string[];
}

/** Não interpreta falha de schema como HTTP 200 funcional inexistente. */
export function inspectResponseContract(
    method: string, route: string, status: number, body: unknown,
): ContractInspection {
    const operation = openApi.paths[route]?.[method.toLowerCase()];
    if (!operation) return {errors:[`A operação ${method.toUpperCase()} ${route} não existe no OpenAPI.`], observedDifferences:[]};
    const response = operation.responses[String(status)];
    if (!response) return {errors:[`O status ${status} não está documentado para ${method.toUpperCase()} ${route}.`], observedDifferences:[]};
    const schema = Object.values(response.content || {}).find(c => c.schema)?.schema;
    if (!schema) return {
        errors: body === null ? [] : [`${method.toUpperCase()} ${route} (${status}) deve retornar sem corpo`],
        observedDifferences:[],
    };
    const rawErrors = validateSchema(body,schema,'$');
    const errors:string[]=[];
    const observedDifferences:string[]=[];
    for (const issue of rawErrors) {
        const format = issue.match(/^(\$[^ ]+) deve corresponder ao formato (date-time|uuid)$/);
        if (method.toUpperCase()==='GET' && status===200 && format) {
            const [,loc,kind] = format;
            const value=valueAtLocation(body,loc);
            if (kind==='date-time' && observedDateTimeRoutes.has(route) && isObservedDotNetDateTime(value)) {
                observedDifferences.push(`${loc}: date-time ISO local sem fuso (observado nos HARs .NET)`);
                continue;
            }
            if (kind==='uuid' && route==='/api/v1/Pix/Transferencias/ObterTipoContas' &&
                /^\$\.itens\[\d+\]\.id$/.test(loc) && typeof value==='string' &&
                value.length>0 && value.length<=16) {
                observedDifferences.push(`${loc}: código de tipo de conta em vez de UUID (HAR)`);
                continue;
            }
        }
        const unknownProperty = issue.match(/^(\$[^ ]+) não está definido no schema$/);
        if (method.toUpperCase()==='POST' && status===200 && route==='/api/v1/Senha/Codigo/Solicitar' &&
            unknownProperty?.[1]==='$.item' && isRecord(body) && isRecord(body.item) &&
            Object.keys(body.item).length===2 && typeof body.item.tipo==='string' && body.item.tipo.length>0 &&
            typeof body.item.valor==='string' && body.item.valor.length>0) {
            observedDifferences.push('$.item: destino de recuperação com tipo e valor observado no HAR');
            continue;
        }
        if (method.toUpperCase()==='GET' && status===200 && unknownProperty &&
            extraPropertiesInHar[route]?.test(unknownProperty[1])) {
            observedDifferences.push(`${unknownProperty[1]}: propriedade extra presente no HAR`);
            continue;
        }
        if (method.toUpperCase()==='GET' && status===200 &&
            route==='/api/v1/Pix/Favorito/Listar' &&
            /^\$\.itens\[\d+\]\.chaves\[\d+\]\.tipoChave não deve ser nulo$/.test(issue) &&
            valueAtLocation(body, issue.slice(0, issue.indexOf(' não deve ser nulo')))===null) {
            observedDifferences.push('$.itens[*].chaves[*].tipoChave: nulo observado no HAR');
            continue;
        }
        if (method.toUpperCase()==='GET' && status===200 &&
            route==='/api/v1/Conta/Encerramento/Obter' &&
            issue==='$.item não deve ser nulo' && isRecord(body) && body.item===null) {
            observedDifferences.push('$.item: nulo por ausência de solicitação de encerramento');
            continue;
        }
        if (method.toUpperCase()==='GET' && status===200 &&
            route==='/api/v1/Emprestimo/ObterProdutos' &&
            /^\$\.itens\[\d+\] deve ser array$/.test(issue)) {
            const index = Number(issue.match(/\[(\d+)\]/)?.[1]);
            if (Array.isArray((body as {itens?:unknown[]})?.itens) &&
               isRecord((body as {itens:unknown[]}).itens[index])) {
                observedDifferences.push(`$.itens[${index}]: objeto em vez de lista (HAR)`);
                continue;
            }
        }
        if (method.toUpperCase()==='GET' && route==='/api/v1/Conta/ListarPaises' &&
            status===401 && body===null && issue==='$ não deve ser nulo') {
            observedDifferences.push('HTTP 401 sem ProblemDetails: corpo vazio observado');
            continue;
        }
        errors.push(issue);
    }
    return {errors,observedDifferences};
}

/**
 * Os desvios conhecidos ficam visíveis no Allure, nunca são aplicados a erros desconhecidos.
 * O contrato pode ser auditado integralmente usando STRICT_SWAGGER=1.
 */
function annotateObservedDifferences(method:string, route:string, differences:string[]):void {
    if (!differences.length) return;
    const info=test.info();
    const distinct=[...new Set(differences.map(msg=>msg.replace(/\[\d+\]/g,'[*]')))];
    info.annotations.push({type:'DIVERGENCIA_CONTRATO_HAR',
        description:`${method.toUpperCase()} ${route}: ${differences.length} divergência(s); ${distinct.slice(0,4).join(' | ')}${distinct.length>4?' | ...':''}`});
}

export function expectOpenApiResponse(
    method: string, route: string, status: number, body: unknown,
): void {
    const result=inspectResponseContract(method,route,status,body);
    annotateObservedDifferences(method,route,result.observedDifferences);
    const errors=strictSwagger()
        ? [...result.errors,...result.observedDifferences]
        : result.errors;
    if (errors.length) {
        throw new Error(`Resposta fora do schema OpenAPI para ${method.toUpperCase()} ${route} (${status}): `+
           `${body===null?'corpo ausente; ':''}${errors.slice(0,12).join('; ')}${errors.length>12?`; ... (+${errors.length-12} problemas)`:''}`);
    }
}

/** As duas rotas foram capturadas HTTP 200, embora o Swagger declare só 204. */
const observedSuccessStatusDifferences = new Set([
    '/api/v1/Pix/Limites/ObterProdutos',
    '/api/v1/Ted/Limites/ObterProdutos',
]);

export function expectSuccessResponse(
    method: string, route: string, response: {status: number; body: unknown},
    expectedStatus?: number,
): void {
    const statuses=documentedSuccessStatuses(method,route);
    const actual=response.status;
    // Não classificar 401, 422 e 500 como sucesso em hipótese alguma.
    expect(actual >= 200 && actual < 300,`${method.toUpperCase()} ${route}: resposta não é sucesso HTTP (${actual})`).toBeTruthy();
    if (expectedStatus!==undefined) {
        expect(actual,`${method.toUpperCase()} ${route}: sucesso observado no HAR`).toBe(expectedStatus);
    }
    if (!statuses.includes(actual)) {
        const known=statuses.length===1 && statuses[0]===204 && actual===200 &&
            method.toUpperCase()==='GET' && observedSuccessStatusDifferences.has(route);
        if (!known || strictSwagger()) {
            throw new Error(`${method.toUpperCase()} ${route}: HTTP ${actual} fora dos sucessos do Swagger (${statuses.join(', ')})`);
        }
        test.info().annotations.push({type:'DIVERGENCIA_STATUS_SWAGGER',
            description:`Swagger espera HTTP 204, HAR e HML retornam HTTP 200 para ${route}`});
        // Não validar corpo 200 contra schema de 204: não há schema 200 no Swagger.
        return;
    }
    expectOpenApiResponse(method,route,actual,response.body);
}

/** Status de erro explícito: um 401 jamais pode aprovar um cenário de 400. */
export function expectErrorResponse(
    method: string, route: string, response: {status: number; body: unknown}, expectedStatus: number,
): void {
    expect(expectedStatus >= 400 && expectedStatus < 500, 'Erro esperado deve ser 4xx').toBeTruthy();
    expect(response.status, `${method.toUpperCase()} ${route}: esperado HTTP ${expectedStatus}`).toBe(expectedStatus);
    expectOpenApiResponse(method, route, response.status, response.body);
}
