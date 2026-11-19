# Evidências HAR nos testes dos domínios

As 243 requests dos 13 HARs foram consolidadas em 203 evidências sanitizadas em `Data/har-observed-cases.json`, incluindo 32 evidências de escrita. As evidências enriquecem os testes existentes de cada domínio; não geram um conjunto paralelo de testes. Evidência não é contagem de operações: o contrato continua com 193 operações únicas.

Uma entrada repetida (método, rota, query, path, body e contexto de autenticação) não é registrada novamente por vir de outro HAR. Payloads diferentes não são confundidos por terem o mesmo status. Quando a mesma entrada tem respostas diferentes, a evidência de sucesso tem prioridade; as capturas continuam rastreáveis no arquivo de dados.

## Verificações

- Status exato do cenário observado; 400, 401 e 422 são distintos. 500 nunca aprova como sucesso.
- Schema do Swagger, com divergências conhecidas anotadas. `STRICT_SWAGGER=1` reprova também os desvios conhecidos e erros com status não documentado.
- Presença e tipos dos campos capturados, inclusive campos aninhados comuns aos registros observados. Um objeto vazio não substitui resultado preenchido.
- Identidade do erro: 48 evidências de 4xx possuem comparação do código ou, quando ausente, dos erros/mensagem. Apenas o SHA-256 da identidade é versionado, sem o conteúdo privado. Posições `LineNumber` e `BytePositionInLine` do parser JSON são normalizadas para não confundir formatação com outro erro.
- Teclado virtual exige cinco itens e hash preenchido; consultas de CEP válido e o tipo de destino de recuperação de senha conferem a correspondência com a entrada.
- Escritas capturadas aproveitam os bodies reais com seus tipos e Content-Type. Os quatro JSONs malformados mantêm o texto original em massa privada, para testar a validação que realmente foi observada. Respostas 204 exigem ausência de corpo.
- Valores conhecidos da massa podem ser exigidos em `Data/get-fixtures.local.json`, propriedade `expected`.

Saldos, datas, IDs gerados e tamanhos de listas não ficam congelados na captura. Listas vazias são permitidas quando o contrato e a expectativa funcional do cenário permitem. Os dados observados não provam todas as regras de negócio.

O arquivo sanitizado contém nomes de campos, tipos, identificadores das capturas e fingerprints dos erros. Não contém bodies brutos, headers de autenticação ou valores privados extraídos das respostas. Os arquivos `.har` continuam privados e ignorados pelo Git, mas **não são necessários para rodar os testes**.

Os valores privados dos parâmetros/payloads ficam em **`Data/har-values.local.json`**, gerado localmente e ignorado pelo Git. Copie esse arquivo privadamente para a VPN ou forneça as variáveis correspondentes no `.env`, que têm prioridade. Os templates versionados preservam o tipo de cada campo; um ID numérico não vira string por estar configurado no ambiente. Hashes de autenticação dos HARs não são reutilizados: as chamadas usam `LOGIN_HASH` atual.

Os formatos de resposta repetidos são compartilhados no próprio JSON sanitizado, sem repetir o contrato inteiro por combinação de filtro. `npm run har:import` atualiza essas evidências e a massa local a partir da pasta `hars`, sem executar testes nem chamar a API. Valores locais já existentes são preservados.

## Execução

```bash
npm run test:gets
```

Para incluir POST/PUT/PATCH/DELETE capturados, no Git Bash:

```bash
RUN_MUTATIONS=1 npm test
```

No PowerShell: `$env:RUN_MUTATIONS='1'` antes de `npm test`. Isso envia operações de escrita reais; a flag não é habilitada automaticamente pelo importador.

No Allure, a árvore usa rótulos explícitos: `automacao-api → tag → endpoint`. `allurerc.mjs` define `groupBy: ['parentSuite', 'suite', 'subSuite']` e `appendTitlePath: false`, para o Allure 3 não acrescentar diretórios, arquivos ou describes à árvore. A configuração usa os [rótulos de hierarquia](https://allurereport.org/docs/playwright-reference/#suite-based-hierarchy) e o [agrupamento do Allure 3](https://allurereport.org/docs/v3/configure/#awesome-plugin). `ContractIntegrity` e `OpenApiSchema` ficam separados na raiz. Ao atualizar esta organização, limpe o relatório antigo com `npm run report:clear` antes da nova execução.

`RUN_HAR_500=1` inclui entradas históricas de 500 como diagnósticos dentro do endpoint correspondente. Se houver 500 atual, o teste reprova. Não são habilitadas por padrão.

As combinações de `Data/query-combinations.local.json` também entram no respectivo endpoint, com deduplicação da entrada. Não há categoria separada de matriz ou HAR.
