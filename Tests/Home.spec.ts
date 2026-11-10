import { test, expect } from '@playwright/test';
import { AutenticacaoApiClient } from '../Clients/autenticacao-api-client';
import { HomeApiClient } from '../Clients/home-api-client';

test.use({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {},
});

test('Obtenção de Teclado Virtual para Autenticação', async ({ request }) => {
    const baseURL = process.env.API_BASE_URL;
    const cpf = process.env.CPF;

    expect(baseURL, 'Configure API_BASE_URL no .env').toBeTruthy();
    expect(cpf, 'Configure CPF no .env com um CPF de teste valido').toBeTruthy();

    const autenticacaoApi = new AutenticacaoApiClient(request);

    const response = await autenticacaoApi.obterTecladoVirtual(cpf!);

    expect(response.status).toBe(200);
    expect(response.body.item).toBeDefined();
    expect(response.body.item).not.toBeNull();
    expect(Array.isArray(response.body.item.tecladoItens)).toBe(true);
    expect(response.body.item.tecladoItens).toHaveLength(5);

    for (const tecladoItem of response.body.item.tecladoItens) {
        for (const chave of ['posicao', 'identificador', 'opcoes'] as const) {
            expect(tecladoItem).toHaveProperty(chave);
            expect(tecladoItem[chave]).not.toBeNull();
            expect(tecladoItem[chave]).toBeDefined();
        }
    }
});

test('Obtenção da Carteira de Investimentos do Cliente', async ({ request }) => {
    const baseURL = process.env.API_BASE_URL;
    const loginHash = process.env.LOGIN_HASH;

    expect(baseURL, 'Configure API_BASE_URL no .env').toBeTruthy();
    expect(loginHash, 'Configure LOGIN_HASH no .env').toBeTruthy();

    const homeApi = new HomeApiClient(request, loginHash!);
    const response = await homeApi.Carteira();

    expect(response.status).toBe(200);
    expect(response.body.item).toBeDefined();
    expect(response.body.item).not.toBeNull();
    expect(response.body.item.disponivelResgate).not.toBeNull();
    expect(Array.isArray(response.body.item.produtos)).toBe(true);

    for (const produto of response.body.item.produtos) {
        for (const chave of [
            'id',
            'produto',
            'valor',
            'valorRendimento',
            'percentualAcumulado',
            'liquidez',
            'dataVencimento',
            'podeResgatar',
        ] as const) {
            expect(produto).toHaveProperty(chave);
            expect(produto[chave]).not.toBeNull();
            expect(produto[chave]).toBeDefined();
        }
    }
});

const periodos = ['TOTAL', 'MENSAL', 'TRIMESTRAL', 'SEMESTRAL', 'ANUAL', 'ANO_ATUAL'] as const;

for (const periodo of periodos) {
    test(`should get investment history for ${periodo}`, async ({ request }) => {
        const baseURL = process.env.API_BASE_URL;
        const loginHash = process.env.LOGIN_HASH;

        expect(baseURL, 'Configure API_BASE_URL no .env').toBeTruthy();
        expect(loginHash, 'Configure LOGIN_HASH no .env').toBeTruthy();

        const homeApi = new HomeApiClient(request, loginHash!);
        const response = await homeApi.Historico(periodo);

        expect(response.status).toBe(200);
        expect(response.body.item).toBeDefined();
        expect(response.body.item).not.toBeNull();

        for (const chave of ['possuiInvestimento', 'dataInicial', 'dataFinal', 'rendimento'] as const) {
            expect(response.body.item).toHaveProperty(chave);
            expect(response.body.item[chave]).not.toBeNull();
            expect(response.body.item[chave]).toBeDefined();
        }

        expect(Array.isArray(response.body.item.investimentos)).toBe(true);

        for (const investimento of response.body.item.investimentos) {
            for (const chave of [
                'dataReferencia',
                'cdb',
                'cdbMensal',
                'lca',
                'lci',
                'lf',
                'outros',
                'valorAgregado',
                'rendimentoDia',
                'rendimentoAcumulado',
            ] as const) {
                expect(investimento).toHaveProperty(chave);
                expect(investimento[chave]).not.toBeNull();
                expect(investimento[chave]).toBeDefined();
            }
        }
    });
}