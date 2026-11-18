# Integração dos HARs no projeto Playwright

Foram lidos os 9 HARs anexados. O arquivo `Data/har-observed-cases.json` contém apenas metadados sanitizados: método, rota, parâmetros ou placeholders de ambiente, status observado, contagem e indicação de status documentado.
**HAR é histórico observado**, não garantia de que a API retornará o mesmo código em uma nova execução. Em especial, HTTP 200 com `item: null` não comprova resultado funcional e HTTP 500 é defeito/diagnóstico, jamais sucesso.

- Registros de operações HTTP no HAR: **171**; cenários distintos após sanitização: **142**.
- Casos por método/status: GET 200: 100, GET 400: 11, GET 401: 3, GET 422: 16, GET 500: 9, POST 200: 1, POST 422: 2.
- Status fora do Swagger: 31 casos distintos.

## Arquivos novos ou alterados

- `Data/har-observed-cases.json`: matriz de evidências sanitizada. **Não inclui HAR bruto, headers, respostas de conta, hash, CPF nem corpo de requisição.**
- `Tests/support/har-cases.ts`: seleciona parâmetros observados para GETs, preferindo resposta com `item` preenchido; usa variável de ambiente quando o valor pode identificar recurso.
- `Tests/support/get-fixtures.ts`: prioriza `Data/get-fixtures.local.json`, depois HAR, e por último GET sem parâmetros.
- `Tests/GetBadRequest.spec.ts` e `Tests/HarObserved422.spec.ts`: reproduzem erros específicos *observados* (400 ou 422). Se não constam no Swagger, são marcados como divergência, não tratados como conformidade.
- `Tests/HarGetVariants.spec.ts`: combinações de filtros capturadas no HAR, excluindo a combinação padrão da rota.
- `Tests/HarObserved500.spec.ts`: cenário de regressão de 500, desativado por padrão; quando ativado, **500 reprova o teste**.
- `Tests/QueryCombinations.spec.ts`: matriz adicional controlada por `Data/query-combinations.local.json`, não incluído no ZIP.

## Executar no notebook com sua VPN e seu .env local

```bash
npm run test:har
npm run test:matriz
RUN_HAR_500=1 npm run test:har:500
npm run report
```
`RUN_HAR_500=1` é sintaxe Bash/Git Bash; em PowerShell use `$env:RUN_HAR_500="1"; npm run test:har:500`. **Não há build necessário para receber este ZIP.**

## Massa de negócio e filtros

Quando um parâmetro privado (ID de produto, operação, contrato, código de transação, recorrência, CPF, chave PIX etc.) aparece em HAR, o valor é substituído por `${ENV:HAR_NOME_DO_PARAMETRO}` ou por `CPF`/`CHAVE_PIX_TESTE`. Você deve definir essa variável no `.env` com um recurso válido do ambiente (não compartilhar o valor).
Para fornecer uma massa por rota, copie `Data/get-fixtures.example.json` para `Data/get-fixtures.local.json` e complete os valores. O arquivo local está ignorado pelo Git.
As variações de filtros demonstradas no HAR não equivalem a todas as combinações possíveis: use `Data/query-combinations.example.json` como base e copie para `Data/query-combinations.local.json`, escolhendo status esperado por cenário e mantendo somente casos com massa conhecida.

## Erros HTTP 500 observados

- `GET /api/v1/Investimento/Carteira/Resgate/Status`
- `GET /api/v1/Investimento/ObterRelatorio`
- `GET /api/v1/Investimento/Produto/Comprar/Status`
- `GET /api/v1/Investimento/Simulacao/ObterProduto`
- `GET /api/v1/Investimento/Simulacao/ObterProdutos`
- `GET /api/v1/Onboarding/Endereco/Consultar`
- `GET /api/v1/Pix/Recorrencia/ObterAgendamentos`
- `GET /api/v1/Ted/Comprovante`

Os HARs com 500 não determinam se a causa é dado ausente, regra de negócio, exceção não tratada ou indisponibilidade. A automação não mascarará 500 como resposta correta.

## Limitações
Não executamos chamadas contra a API corporativa nem compilação/build, conforme pedido. Resultados de HAR foram aplicados como *dados observados*, e não como certificados de sucesso futuro. Não geramos POST/PATCH/DELETE com payload genérico: continuam exigindo massa segura e habilitação explícita.
