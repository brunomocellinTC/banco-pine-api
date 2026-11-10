# Automação de API — POC Playwright

Projeto de prova de conceito (POC) para automação de testes de API utilizando **Playwright Test**, **TypeScript** e relatório **Allure**.

A API alvo é a [ReqRes](https://reqres.in), usada como sandbox para exercitar operações REST (listagem, criação, consulta, atualização e exclusão) com foco em arquitetura limpa, tipagem forte e relatório profissional.

---

## Sumário

- [O que é este projeto](#o-que-é-este-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração inicial](#configuração-inicial)
- [Como executar os testes](#como-executar-os-testes)
- [Ambientes e massa de dados](#ambientes-e-massa-de-dados)
- [Arquitetura](#arquitetura)
- [Cobertura de testes](#cobertura-de-testes)
- [Relatório Allure](#relatório-allure)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Scripts npm](#scripts-npm)
- [GitHub Actions (CI)](#github-actions-ci)

---

## O que é este projeto

Este repositório demonstra uma base reutilizável de testes de API, organizada em camadas:

| Camada | Responsabilidade |
|--------|------------------|
| **Tests** | Cenários de negócio e asserções |
| **Clients** | Encapsulamento das chamadas HTTP |
| **Models** | Tipagem de requests, responses e massa de dados |
| **Data** | Massas de dados por ambiente (`producao.json`, `homologacao.json`) |
| **Scripts** | Seleção do ambiente (`ENV`), carregamento da massa e runner da suíte |

A ideia é separar o *o que* está sendo validado (specs) do *como* a API é chamada (clients), facilitando manutenção e evolução da suíte.

Atualmente a suíte possui **9 testes** cobrindo endpoints de **products** e **users**.

---

## Pré-requisitos

Antes de rodar o projeto, garanta que as ferramentas abaixo estejam instaladas:

| Ferramenta | Versão sugerida | Para quê |
|------------|-----------------|----------|
| [Node.js](https://nodejs.org/) | 18+ (LTS) | Runtime e gerenciamento de pacotes via npm |
| npm | vem com o Node.js | Instalação de dependências e scripts |
| Node.js | 18+ (LTS) | Runtime dos testes e da CLI Allure 3 |
| Editor (opcional) | VS Code / Cursor | Desenvolvimento e debug |

> **Importante:** o Allure 3 é executado pelo Node.js e não requer Java.

Para validar as instalações:

```bash
node -v
npm -v
```

---

## Configuração inicial

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd automacao-api
```

### 2. Instalar as dependências

```bash
npm install
```

Principais pacotes utilizados:

- `@playwright/test` — framework de testes
- `typescript` — tipagem estática
- `dotenv` — variáveis de ambiente
- `allure-playwright` — reporter Allure para Playwright
- `allure` — CLI Allure 3 para geração e visualização do relatório HTML

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (ele já está no `.gitignore` e **não** deve ser versionado):

```env
REQRES_API_KEY=sua_api_key
REQRES_PROJECT_ID=seu_project_id
ENV=producao
```

| Variável | Uso |
|----------|-----|
| `REQRES_API_KEY` | Enviada no header `x-api-key` das requisições |
| `REQRES_PROJECT_ID` | Usada como query param em operações de products |
| `ENV` | Ambiente da automação (`producao` ou `homologacao`). Define a massa de dados e o header `X-Reqres-Env` |

A configuração do Playwright carrega esse arquivo automaticamente via `dotenv` em `playwright.config.ts`. Se `ENV` não for informado, o valor padrão é **`producao`**.

### Teclado virtual (Home)

O teste `Tests/Home.spec.ts` usa o client `AutenticacaoApiClient` e o contrato
`TecladoVirtualResponse`, seguindo a separação entre Tests, Clients e Models.
Adicione ao `.env` da raiz os campos abaixo (exemplo apenas; nenhum `.env` é criado):

```env
HOME_API_BASE_URL=https://host-da-api-de-homologacao
HOME_CPF=cpf_valido_da_massa_de_testes
```

`HOME_API_BASE_URL` deve conter a origem da API, sem o caminho do endpoint.
`HOME_CPF` deve ser um CPF válido da massa autorizada para esse ambiente,
mantido como string para preservar zeros à esquerda. O client o envia no
query parameter `CPF`.

Esse teste substitui a URL e os headers globais da ReqRes, sem alterar os
testes existentes. As variáveis `REQRES_API_KEY` e `REQRES_PROJECT_ID` continuam
exclusivas dos testes da ReqRes.

O contrato fornecido retorna `item.hashAutenticacao`, mas não especifica hash
de entrada, header de autenticação nem esquema (por exemplo, Bearer). Por isso,
nenhum hash é enviado neste cenário. Se a API exigir autenticação prévia, será
necessário confirmar esse contrato antes de configurar o header e sua variável
de ambiente. Não versione o CPF nem credenciais reais.

```bash
npx playwright test Tests/Home.spec.ts
```

---

## Como executar os testes

```bash
# Executa toda a suíte (usa o ENV do .env; padrão: producao)
npm test

# Executa a suíte com a massa de produção (Data/producao.json)
npm run test:producao

# Executa a suíte com a massa de homologação (Data/homologacao.json)
npm run test:homologacao

# Executa e já abre o relatório Allure no navegador
npm run test:allure
```

Os scripts `test:producao` e `test:homologacao` sobrescrevem a flag `ENV` da sessão, mesmo que o `.env` esteja com outro valor.

Outros exemplos úteis do Playwright:

```bash
# Um arquivo específico
npx playwright test Tests/products-create.spec.ts

# Um arquivo específico em homologacao
npm run test:homologacao -- Tests/products-create.spec.ts

# Um teste pelo nome
npx playwright test -g "should create product successfully"

# Em modo headed (menos comum em API, mas disponível)
npx playwright test --headed
```

---

## Ambientes e massa de dados

A suíte separa **o que** é enviado na API da **lógica** do teste. Cada ambiente tem o seu próprio arquivo JSON em `Data/`, selecionado pela flag `ENV`.

| Flag `ENV` | Arquivo carregado | Uso típico |
|------------|-------------------|------------|
| `producao` (padrão) | `Data/producao.json` | Dados de produção |
| `homologacao` | `Data/homologacao.json` | Dados de homologação |

### O que a flag controla

Um único valor de `ENV` define:

1. Qual JSON de massa de dados será lido (`Data/<ENV>.json`)
2. O header HTTP `X-Reqres-Env` enviado em todas as requisições
3. O campo `env` exibido nas informações de ambiente do Allure

Valores diferentes de `producao` e `homologacao` fazem a execução falhar na inicialização, com uma mensagem indicando os ambientes aceitos.

### Como escolher o ambiente

Há duas formas, nesta ordem de precedência:

1. **Scripts npm** — `npm run test:producao` ou `npm run test:homologacao` (sobrescreve o `.env`)
2. **Arquivo `.env`** — `ENV=producao` ou `ENV=homologacao` (usado por `npm test` e pelos demais comandos)

Se nenhuma das duas estiver definida, a automação assume `producao`.

### Estrutura da massa

Os dois arquivos devem ter **as mesmas chaves**, mudando apenas os valores. Hoje a massa cobre os cenários de criação de product:

```json
{
  "products": {
    "create": {
      "valid": {
        "name": "Automation Test Product",
        "price": 99.99,
        "category": "Automation",
        "in_stock": true
      },
      "withoutName": {
        "price": 99.99,
        "category": "Automation",
        "in_stock": true
      }
    }
  }
}
```

O contrato dessa estrutura fica em `Models/product.model.ts` (`TestData`). O helper `getTestData()` em `Scripts/test-data.ts` lê o JSON do ambiente atual e devolve o objeto já tipado.

### Uso no teste

O spec não monta o payload na mão: ele pede a massa do ambiente em execução.

```ts
import { getTestData } from '../Scripts/test-data';

const { products } = getTestData();
const product = products.create.valid;

const response = await productsApi.create(product);
```

Hoje isso já está aplicado em `Tests/products-create.spec.ts`.

### Como incluir novas massas

1. Adicione a mesma chave em `Data/producao.json` **e** em `Data/homologacao.json`
2. Atualize a interface `TestData` em `Models/product.model.ts`
3. Consuma o campo no spec com `getTestData()`

Manter as chaves iguais nos dois arquivos evita que um ambiente quebre na hora de trocar a flag.

---

## Arquitetura

A suíte segue um desenho em camadas, com dependência unidirecional:

```text
Tests/          →  usa Clients, Models e Scripts (massa de dados)
Scripts/        →  lê ENV, carrega Data/<ENV>.json e executa a suíte
Data/           →  massas por ambiente (producao.json, homologacao.json)
Clients/        →  usa Models e o APIRequestContext do Playwright
Models/         →  apenas tipagens (sem dependência de testes/Clients)
```

### Diagrama simplificado

```text
┌─────────────────────────────────────────┐
│              Tests/*.spec.ts            │
│   (cenários + expect / assertions)      │
└────────────┬───────────────┬────────────┘
             │ usa           │ usa
             ▼               ▼
┌────────────────────┐  ┌─────────────────────────┐
│ Scripts/test-data  │  │  Clients/*-api-client   │
│ getEnv / getTestData│  │  ProductsApiClient      │
└─────────┬──────────┘  │  UsersApiClient         │
          │ lê          │         extends         │
          ▼             │      BaseApiClient      │
┌────────────────────┐  └────────────┬────────────┘
│ Data/producao.json │               │ tipa com
│ Data/homologacao.json│               ▼
└────────────────────┘  ┌─────────────────────────┐
                        │       Models/*.ts       │
                        │ requests, responses,    │
                        │ TestData, ApiResponse<T>│
                        └─────────────────────────┘
```

### Clients

- **`BaseApiClient`** — abstrai métodos HTTP genéricos (`get`, `post`, `put`, `patch`, `delete`) e normaliza o retorno em `ApiResponse<T>` (`status`, `headers`, `body`).
- **`ProductsApiClient`** — operações de products (`list`, `create`, `getById`, `update`, `deleteById`).
- **`UsersApiClient`** — operação de listagem de users.

Os specs não montam URL nem tratam parsing de JSON diretamente: isso fica nos clients.

### Models

Interfaces TypeScript que representam contratos da API, por exemplo:

- `CreateProductRequest`, `UpdateProductRequest`
- `ProductRecordResponse`, `ProductsResponse`
- `UsersResponse`, `User`
- `TestData` — contrato da massa de dados por ambiente
- `ApiResponse<T>` — envelope comum de toda resposta tratada pelos clients

Isso traz autocomplete, segurança de tipos e deixa os testes mais legíveis.

### Scripts e Data

- **`Scripts/test-data.ts`** — expõe `getEnv()` e `getTestData()`. Lê a flag `ENV`, valida se é `producao` ou `homologacao` e carrega o JSON correspondente.
- **`Data/producao.json`** / **`Data/homologacao.json`** — massas de dados versionadas, uma por ambiente, com as mesmas chaves.

Os specs não devem hardcodar payload de ambiente: isso fica nos JSONs.

### Configuração Playwright

O arquivo `playwright.config.ts` define:

- `testDir`: `./Tests`
- `baseURL`: `https://reqres.in`
- headers globais (`x-api-key`, `X-Reqres-Env` derivado da flag `ENV`)
- reporters: `list` (console) + `allure-playwright`
- retries/workers condicionais para ambiente CI

### Fluxo de um teste típico

1. O spec recebe o fixture `request` do Playwright.
2. Instancia um client (`ProductsApiClient` / `UsersApiClient`).
3. Obtém o payload via `getTestData()` (massa do ambiente `ENV`), quando aplicável.
4. Chama o método do client.
5. Valida `status` e campos do `body` com `expect`.

Exemplo conceitual:

```ts
const { products } = getTestData();
const product = products.create.valid;

const productsApi = new ProductsApiClient(request);
const response = await productsApi.create(product);

expect(response.status).toBe(201);
expect(response.body.data.data.name).toBe(product.name);
```

---

## Cobertura de testes

| Arquivo | Cenários |
|---------|----------|
| `products-create.spec.ts` | Criar product válido; criar sem `name` (massa via `Data/<ENV>.json`) |
| `products-get.spec.ts` | Listar products com sucesso; buscar por id; 404 para id inexistente |
| `products-update.spec.ts` | Atualizar product com sucesso |
| `products-delete.spec.ts` | Deletar product; 404 ao deletar inexistente |
| `users-get.spec.ts` | Listar users com sucesso |

**Total atual: 9 testes.**

---

## Relatório Allure

O projeto usa **Allure** no lugar do relatório HTML nativo do Playwright como visualização principal.

### Como funciona

1. Durante a execução, o reporter `allure-playwright` grava resultados brutos em `allure-results/` (JSON por teste + metadados de ambiente).
2. A CLI do Allure 3 (`allure`) transforma esses resultados em um relatório HTML em `allure-report/`.
3. Você visualiza o relatório no navegador.

```text
npm test
   │
   ▼
allure-results/     ← resultados brutos
   │
   ▼  (allure generate / serve)
allure-report/      ← HTML navegável
```

### Comandos

```bash
# Roda os testes, gera o relatório e abre no navegador
npm run test:allure

# Gera o relatório e abre no navegador
npm run report

# Apenas gera a pasta estática allure-report
npm run report:generate

# Abre um relatório já gerado
npm run report:open

# Gera e abre um HTML único
npm run report:html

# Limpa os resultados e relatórios anteriores
npm run report:clear

```

### O que você encontra no relatório

- Visão geral de **passed / failed / broken / skipped**
- Duração por teste e timeline
- Organização por suites (arquivos/specs)
- Informações de ambiente configuradas no reporter (`framework`, `baseURL`, `env` — este último vem da flag `ENV`)
- Histórico entre execuções (quando a pasta `history` é preservada entre runs)

### Pastas geradas

| Pasta | Conteúdo | Versionada? |
|-------|----------|-------------|
| `allure-results/` | Resultados brutos da última execução | Não (`.gitignore`) |
| `allure-report/` | Relatório HTML estático | Não (`.gitignore`) |

> Ambas as pastas são descartáveis e recriadas a cada geração de relatório.

---

## Estrutura de pastas

```text
automacao-api/
├── .github/
│   └── workflows/
│       └── playwright.yml   # Pipeline de CI
├── Clients/                 # Camada de clientes HTTP
│   ├── base-api-client.ts
│   ├── products-api-client.ts
│   └── users-api-client.ts
├── Data/                    # Massas de dados por ambiente
│   ├── producao.json
│   └── homologacao.json
├── Models/                  # Tipagens de request/response e TestData
├── Scripts/
│   ├── run-tests.ts         # Runner que aplica a flag ENV
│   └── test-data.ts         # Seleção de ambiente e carga da massa
├── Tests/                   # Specs de API
├── playwright.config.ts     # Configuração do Playwright + Allure
├── package.json
├── tsconfig.json
├── .env                     # Credenciais locais + ENV (não versionado)
└── README.md
```

---

## Scripts npm

| Script | Comando | Descrição |
|--------|---------|-----------|
| `test` | `playwright test` | Executa a suíte (usa `ENV` do `.env`; padrão `producao`) |
| `test:producao` | `node Scripts/run-tests.ts producao` | Executa a suíte com `Data/producao.json` |
| `test:homologacao` | `node Scripts/run-tests.ts homologacao` | Executa a suíte com `Data/homologacao.json` |
| `test:allure` | `npm test` + geração e abertura do relatório | Executa, gera e abre o relatório |
| `report` | Gera o relatório e executa `allure open` | Gera e abre o relatório |
| `report:generate` | Limpa a saída e executa `allure generate` | Gera relatório HTML estático |
| `report:open` | `allure open allure-report` | Abre relatório já gerado |
| `report:html` | Gera e abre o HTML único | Abre o relatório autocontido |
| `report:html:generate` | Gera o relatório com `ALLURE_SINGLE_FILE=1` | Gera HTML único |
| `report:html:open` | Abre `allure-report/index.html` | Abre o HTML único |
| `report:clear` | Limpa `allure-results` e `allure-report` | Remove resultados e relatórios anteriores |
| `allure:generate` / `allure:open` | Aliases para `report:generate` / `report:open` | Mantém compatibilidade com comandos existentes |

---

## GitHub Actions (CI)

O repositório possui um workflow em `.github/workflows/playwright.yml` que executa a suíte automaticamente no GitHub.

### Quando o pipeline roda

| Evento | Branches |
|--------|----------|
| `push` | `main`, `master` |
| `pull_request` | `main`, `master` |

### O que o job faz

1. Faz checkout do código
2. Configura Node.js (LTS) com cache de npm
3. Instala dependências com `npm ci`
4. Executa `npx playwright test` com as variáveis de autenticação da ReqRes (sem `ENV` no workflow, o padrão é **producao**)
5. Publica o artefato `allure-results` (retenção de 30 dias)

Como os testes são **somente de API**, o workflow **não** instala browsers do Playwright.

### Secrets obrigatórios

No CI não existe arquivo `.env`. As credenciais precisam estar cadastradas como **Secrets** do repositório:

| Secret | Equivalente local | Uso |
|--------|-------------------|-----|
| `REQRES_API_KEY` | `REQRES_API_KEY` no `.env` | Header `x-api-key` |
| `REQRES_PROJECT_ID` | `REQRES_PROJECT_ID` no `.env` | Query param das rotas de products |

Para rodar o CI em homologação, basta incluir `ENV: homologacao` no step `Run Playwright tests`. Sem essa variável, o pipeline usa `producao`.

#### Como cadastrar

1. Abra o repositório no GitHub
2. Vá em **Settings → Secrets and variables → Actions**
3. Em **Repository secrets**, clique em **New repository secret**
4. Crie `REQRES_API_KEY` e `REQRES_PROJECT_ID` com os mesmos valores do seu `.env` local

Sem esses secrets, a API responde **401 Unauthorized** e todos os testes falham.

### Como acompanhar

- Aba **Actions** do repositório → selecione o workflow **Playwright Tests**
- Em cada run, baixe o artefato `allure-results` se quiser gerar o relatório HTML localmente:

```bash
# Após baixar e extrair o artefato
npm run allure:generate
npm run allure:open
```

### Trecho relevante do workflow

```yaml
- name: Run Playwright tests
  env:
    REQRES_API_KEY: ${{ secrets.REQRES_API_KEY }}
    REQRES_PROJECT_ID: ${{ secrets.REQRES_PROJECT_ID }}
  run: npx playwright test
```
