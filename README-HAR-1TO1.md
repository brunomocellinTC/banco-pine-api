# Comparação dos dados dos HARs, request por request

Esta suíte adiciona uma comparação estrita com as respostas capturadas. Não substitui as suítes de contrato existentes. Foi preparada sem executar testes, build ou chamadas à API.

Os nove arquivos locais contêm **171 requests: 167 GETs e 4 POSTs**. Cada entrada gera um teste próprio, inclusive repetições. A identificação é `nome-do-arquivo.har#posição`, começando em 1. O arquivo `Data/har-replay-index.json` permite localizar todas as entradas sem abrir corpos ou credenciais.

## O que verifica

- Mesmo método, path, query completa (inclusive parâmetros repetidos) e body da captura, salvo override explícito.
- Status HTTP exato, inclusive 400, 401 e 422. Um erro de negócio diferente com o mesmo status reprova pela comparação do corpo.
- Valores de todos os campos, presença/ausência, campos extras, quantidade, ordem e conteúdo de listas. Distingue `null`, lista vazia e objeto vazio.
- Apenas os valores dos campos de raiz `requestId`, `reqId` e `Request-Id` podem mudar automaticamente. Presença e tipo continuam obrigatórios conforme a captura.
- A resposta de referência vem diretamente do HAR privado; não são criadas cópias versionadas com dados bancários.

As chamadas usam `API_BASE_URL`, nunca o host do HAR. Quando a captura tem `x-login-hash`, usam o `LOGIN_HASH` atual. Quando não tem, usam um contexto anônimo. Cookies, tokens e demais headers privados da captura não são reutilizados. O Content-Type do body é preservado. Redirects não são seguidos.

## Executar somente no ambiente com VPN

```powershell
npm run test:har:1to1
```

Esse comando habilita a suíte com `RUN_HAR_REPLAY=1`. A execução padrão de `npm test` não registra os 171 cenários adicionais. Os testes unitários do comparador são independentes dessa habilitação.

Por padrão, **156 GETs** ficam habilitados; **11 GETs com 500 observado** e **4 POSTs** ficam ignorados, cada qual com seu motivo. A massa ainda precisa ser válida para os 156 GETs habilitados; isso não é previsão de aprovação.

Para incluir os 11 diagnósticos de 500:

```powershell
$env:RUN_HAR_500 = '1'
npm run test:har:1to1
```

Um 500 atual sempre reprova, mesmo se coincidir com a captura. Um cenário com 500 histórico também não passa se virar 200 sem uma expectativa explícita para o novo resultado.

Os quatro POSTs só são enviados com `RUN_MUTATIONS=1`, seguindo a proteção existente. Isso inclui os POSTs que retornaram 422 no passado: a mesma chamada pode alterar dados se a condição do ambiente mudar. Dois POSTs de sucesso são envios de mensagem no chat.

## Massa atual e campos dinâmicos

Sem overrides, a comparação usa os valores históricos de entrada e saída. Alterações legítimas de saldo, datas, listas, teclado virtual e hashes de autenticação podem reprovar a comparação. Isso sinaliza uma diferença com a captura; não demonstra sozinho um defeito.

Copie `Data/har-replay.example.json` para `Data/har-replay.local.json`. O arquivo local é ignorado pelo Git. Cada chave é um ID do índice; não se aplicam overrides implicitamente a outras requests da mesma rota.

- `query`: substitui parâmetros individualmente; aceita string, lista de strings ou `null` para remover um parâmetro. Suporta `${ENV:NOME}`.
- `body`: substitui o body por JSON e suporta `${ENV:NOME}` recursivamente.
- `expectedBody`: substitui o corpo esperado inteiro por uma expectativa conhecida para a massa atual. Suporta `${ENV:NOME}`.
- `expectedStatus`: substitui o status observado. Se o status mudar, exige também `expectedBody` explícito.
- `ignore`: lista de JSON Pointers exatos, como `/item/hashAutenticacao`, para valores escalares comprovadamente dinâmicos. Mantém presença e tipo; proíbe ignorar objetos/listas inteiros e reprova exceções não utilizadas. Campos ignorados deixam de ter seu valor validado; revisar cada exceção.

Trocar um CPF ou ID de entrada pode mudar os dados esperados: ajuste também `expectedBody` quando necessário. Não atualizar expectativas apenas para acomodar uma falha sem verificar o comportamento correto.

Os anexos próprios desta suíte registram identificação, status e caminhos divergentes, sem os valores de referência/atuais. Os HARs e o arquivo local continuam privados. Os mecanismos de diagnóstico do Playwright podem registrar detalhes de requests; tratar os relatórios como privados, como na suíte existente.

## Limite da evidência

Correspondência exata com um HAR comprova regressão em relação à captura. Não comprova que o resultado histórico estava correto nem cobre entradas que não foram capturadas. Para verificar uma regra de negócio independentemente do histórico, são necessárias expectativas confirmadas para a massa (por exemplo, CEP correspondente, recurso pertencente à conta e filtros respeitados).

A suíte 1:1 compara dados independentemente do Swagger. A auditoria de schema e `STRICT_SWAGGER` continuam nas suítes de contrato existentes.
