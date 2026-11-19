# Organização e massa dos testes Pine

## Grupos

Os arquivos `Tests/{domínio}.spec.ts` registram os endpoints de seu domínio. As subdivisões seguem os grupos do Swagger, como PixChave, PixLimite e ContaEncerramento. Sucesso, erro e pendência pertencem ao mesmo endpoint. A lógica compartilhada está em `Tests/support/get-fixtures.ts`, usando os catálogos existentes de GETs e mutações.

As suítes genéricas GetSuccess, GetBadRequest, HarObserved, HarGetVariants, HarReplay, ApiErrors, MutationContracts e QueryCombinations foram integradas aos domínios. O comando `test:har` permanece apenas como alias de `test:gets`; `test:har:1to1` foi removido.

## Inventário e pendências

`Data/endpoint-coverage.json` lista as 193 operações do Swagger. As referências abreviadas de `a testar.txt` foram mapeadas para métodos e rotas reais; os ajustes de nomenclatura estão no início do inventário.

Cada operação sem sucesso disponível tem um placeholder sem chamada HTTP e sem assertiva fictícia, marcado como fixme. As operações da lista com retorno vazio ou massa insuficiente mantêm também a pendência funcional, mesmo que um teste do contrato já possa rodar. Não é criado placeholder por filtro, erro ou repetição de captura.

`npm test` inclui os placeholders para visibilidade da entrega. `npm run test:gets` exclui esses placeholders e executa os GETs disponíveis. Os totais de cobertura são sempre calculados por método + rota, não pela quantidade de testes.

O reporter `Scripts/coverage-reporter.ts` gera `test-results/endpoint-coverage.json` e `endpoint-coverage.md` após a execução de API. Cenário aprovado de erro é separado de sucesso aprovado. O resumo não transforma pendências em cobertura nem soma testes locais do validador como endpoints.

## GETs

Copie `Data/get-fixtures.example.json` para `Data/get-fixtures.local.json` e informe apenas massas existentes. A fixture explícita tem prioridade sobre as evidências HAR. Parâmetros privados podem usar `${ENV:CPF}`.

Cada fixture aceita `query`, `pathParams`, `expectedStatus` e `expected`. A propriedade `expected` é um mapa de JSON Pointer para valor conhecido. Exemplo: `"/item/cep": "01310100"`. Esses valores são comparados exatamente, sem aparecer nos erros próprios da verificação. Não configure valores dinâmicos sem referência controlada.

Quando houver massa explícita válida, ela substitui a pendência da lista para essa operação. O teste ainda precisa executar e aprovar antes de contar como cobertura real. GETs sem massa são apresentados apenas como pendentes; não se fabricam identificadores.

`Data/query-combinations.local.json` continua aceito. Cada combinação é registrada no endpoint; uma entrada já existente é substituída pela expectativa explícita da combinação, sem outra chamada duplicada.

## Escritas

POST/PUT/PATCH/DELETE exigem `RUN_MUTATIONS=1` e fixtures em `Data/mutation-fixtures.local.json`. Sem isso, existem apenas os placeholders. Sucesso valida o requestBody antes de enviar.

A fixture aceita `body`, `badBody`, `query`, `pathParams`, `headers`, `expectedStatus`, `badStatus` e `expected`. `badStatus` é 400 por padrão. Placeholders de ambiente são resolvidos recursivamente nos bodies. Escritas permanecem opt-in mesmo quando a captura histórica retornou erro.

Endpoints depreciados exigem `RUN_DEPRECATED=1`; permanecem contabilizados no total contratual quando desabilitados. `STRICT_SWAGGER=1` exige conformidade integral, incluindo divergências históricas.

## Limitações

Cobertura aprovada é referente às verificações implementadas e à massa usada; não certifica toda regra de negócio. Um HAR é evidência histórica. Não se presume que uma resposta vazia seja resultado funcional válido só porque veio com 200.

A reorganização e o inventário foram conferidos estaticamente. Não foram executados testes, build ou chamadas ao ambiente corporativo.
