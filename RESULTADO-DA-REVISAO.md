# Revisão técnica — 18/11/2026

> Registro histórico. A organização por domínios e a contabilização atual estão em README.md e Data/endpoint-coverage.json. As referências a suítes genéricas abaixo descrevem a versão anterior.

## Fonte de verdade

`swagger.json` enviado nesta revisão é o contrato principal: **190 paths**, **193 operações**, **108 GET**, **67 POST**, **11 PUT**, **1 PATCH**, **6 DELETE**, **18 depreciadas**, **430 schemas**.

O OpenAPI anterior do projeto tinha **190 operações**, ou seja, faltavam três GETs:

- `GET /api/v1/Investimento/Carteira/Resgate/Status`
- `GET /api/v1/Investimento/Produto/Comprar/Status`
- `GET /api/v1/Seguros/Obter`

## Ajustes aplicados

1. Excluídos **9 arquivos de clients** (incluindo `BaseApiClientCopia`) e **9 models** com `-copia`. A base HTTP foi unificada e foram preservados clients canônicos de domínio.
2. Padronizadas respostas vazias (`204`), JSON com `text/plain` e respostas binárias (sem forçar `JSON.parse`). Métodos DELETE não descartam mais corpos de resposta de erro.
3. Tipos gerados de **430 schemas**, com as respostas dos 108 GETs e catálogo das **85 operações mutáveis**.
4. Um GET por rota, sem duplicação entre suíte genérica (91 rotas) e testes especializados de client (17 rotas). Cenário sem massa de teste fica **skipped** e não conta como passado.
5. Suíte de Bad Request para **37 GETs** com parâmetro de tipo, formato ou enum testável, **35 ativos** e 2 depreciados, exigindo **HTTP 400 exato**, sem aceitar 401/404/422 como sucesso alternativo.
6. Testes específicos de 401 (ausência de hash), 404 (documento de empréstimo inexistente) e 400 (CPF omitido na autenticação). As respostas observadas não foram inventadas; a expectativa vem do Swagger e do cenário.
7. `MutationContracts.spec.ts`: cataloga as 85 operações POST/PUT/PATCH/DELETE com teste de sucesso e erro 400 quando previsto, **desabilitadas por padrão**, até haver massa aprovada. O payload de sucesso é validado contra o `requestBody` do Swagger **antes do envio**.
8. Matriz BDD atualizada, com as 193 operações e status esperados, em `Testes API 21-10/BDD-CONTRATO-ATUAL.md`.
9. Allure organizado por grupos nas suítes GET, com metadados sem valores de parâmetros, sem loginHash, sem CPF e sem corpos financeiros. Resultados históricos e `.env` não foram incluídos no pacote.

## Pontos ainda a investigar na API real

- CEP inválido retornando 200: o Swagger documenta CEP como string sem padrão de validação. Não existe garantia documental de que `00000000` ou `CEP_INVALIDO` gerará 400. Os antigos testes de CEP inválido foram removidos em vez de aceitar 200 como erro.
- `GET /api/v1/Endereco/Obter`: o valor real de `$.item.dataRegistro` não seguia `date-time`. Continua falhando no validador caso a divergência persista — **não foi flexibilizado**.
- GETs que exigem contrato, UUID, transação, produto, conta ativa ou dados de negócio não podem ser honestamente considerados cobertos sem massa existente. Preencher `Data/get-fixtures.local.json`.
- Testes mutáveis exigem autorização e dados específicos para garantir que uma resposta de sucesso ou falha tenha significado de negócio.
- Os models antigos de domínio são simplificados; para a tipagem fiel use `Models/openapi-generated.ts`. A matriz BDD gerada cobre o contrato, mas os arquivos BDD históricos ainda podem exigir alinhamento de regra de negócio.

## Conferências realizadas

- Comparação estrutural de todas as rotas com o Swagger: **108 GETs** e **85 operações mutáveis** catalogadas.
- Sintaxe TypeScript verificada; tipagem de projeto conferida com interfaces temporárias para as dependências de Playwright (as dependências npm não foram instaladas neste ambiente).
- **9 testes locais de validação de contrato executados com uma harness de asserções; 9 passaram**. Isso não equivale a rodar os testes HTTP pelo Playwright.
- Requisições HTTP da API não foram executadas nesta revisão de código.

## Comandos na raiz do projeto

```bash
npm ci
npx playwright test --list
npm run test:unit
npm run test:gets
npm run test:negativos
npm run report
```

Para testar um endpoint específico:

```bash
npx playwright test -g 'Endereco/Obter' --retries=0 --reporter=list
```

Para habilitar mutações, configure `RUN_MUTATIONS=1` e crie `Data/mutation-fixtures.local.json` com massa autorizada. **Não habilite o modo de mutação para toda a suíte sem revisar os cenários.**
