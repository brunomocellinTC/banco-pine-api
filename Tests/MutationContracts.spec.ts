import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { MUTATION_ROUTES } from '../Models/swagger-mutations';
import { expectSuccessResponse, expectErrorResponse, expectOpenApiRequest, readResponseBody, requireApiEnvironment } from './support/openapi';

interface MutationFixture {
  body?: unknown;
  badBody?: unknown;
  query?: Record<string,string>;
  pathParams?: Record<string,string>;
  expectedStatus?: number;
  headers?: Record<string,string>;
}
const file = path.resolve(process.cwd(), 'Data/mutation-fixtures.local.json');
const cases: Record<string, MutationFixture> = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
const applyPath = (route: string, fixture: MutationFixture) =>
  route.replace(/\{([^}]+)\}/g, (_, name: string) => {
    const value = fixture.pathParams?.[name];
    if (!value) throw new Error(`Massa sem parâmetro de path obrigatório: ${name}`);
    return encodeURIComponent(value);
  });

for (const op of MUTATION_ROUTES) {
  const key = `${op.method} ${op.route}`;
  test(`${op.grupo} ${key}: sucesso documentado`, async ({request}) => {
    test.skip(process.env.RUN_MUTATIONS !== '1', 'Mutação desabilitada por segurança (RUN_MUTATIONS=1)');
    test.skip(op.deprecated && process.env.RUN_DEPRECATED !== '1', 'Endpoint depreciado');
    const fixture = cases[key];
    test.skip(!fixture, 'Sem massa de sucesso aprovada para operação mutável');
    requireApiEnvironment();
    expectOpenApiRequest(op.method,op.route,fixture.body);
    const response = await request.fetch(applyPath(op.route, fixture), {
      method: op.method, params: fixture.query, headers: fixture.headers,
      ...(fixture.body === undefined ? {} : {data:fixture.body}),
    });
    expectSuccessResponse(op.method, op.route, {status:response.status(),body:await readResponseBody(response)},fixture.expectedStatus);
  });
  if (op.status.some(n => n === 400)) {
    test(`${op.grupo} ${key}: erro 400 com massa negativa aprovada`, async ({request}) => {
      test.skip(process.env.RUN_MUTATIONS !== '1', 'Mutação desabilitada por segurança (RUN_MUTATIONS=1)');
      test.skip(op.deprecated && process.env.RUN_DEPRECATED !== '1', 'Endpoint depreciado');
      const fixture = cases[key];
      test.skip(!fixture || fixture.badBody === undefined, 'Sem body inválido aprovado e controlado');
      requireApiEnvironment();
      const response = await request.fetch(applyPath(op.route,fixture), {method:op.method,
        params:fixture.query, data: fixture.badBody, headers: fixture.headers,
      });
      expectErrorResponse(op.method, op.route, {status:response.status(),body:await readResponseBody(response)},400);
    });
  }
}
