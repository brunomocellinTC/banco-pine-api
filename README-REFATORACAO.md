# Automação API Pine — refatoração orientada ao Swagger

## Contrato
- `swagger.json`: contrato OpenAPI atualizado com 190 paths, **193 operações**, **108 GET**.
- `Models/swagger-get-routes.ts`: catálogo tipado gerado a partir do Swagger, incluindo query, path, status e depreciação.
- `Clients/swagger-api-client.ts`: cliente único para todos os GETs, com validação de nomes de parâmetros e encoding de path.
- `Clients/base-api-client.ts`: base única para GET/POST/PUT/PATCH/DELETE; cabeçalhos herdados da fixture `request`, incluindo `x-login-hash`; aceita resposta sem body e conteúdo binário.
- `Clients/{domínio}-api-client.ts`: clientes de domínio mantidos; clients `-copia` removidos. POST/PUT/PATCH/DELETE são catalogados em `MutationContracts.spec.ts` e desabilitados por padrão; exigem `RUN_MUTATIONS=1` e `Data/mutation-fixtures.local.json` com massa aprovada.

## Segurança
- `.env` nunca é incluído no ZIP; mantenha o seu próprio `.env` local com `API_BASE_URL`, `LOGIN_HASH` e, se aplicável, `CPF` de testes.
- `.gitignore` exclui `.env`, `Data/get-fixtures.local.json`, arquivos Allure e resultados temporários.
- Metadados Allure não registram hashes, CPF, valores de query, endereço ou corpo de resposta.

## Execução
```bash
npm ci
npx playwright test --list
npx playwright test Tests/OpenApiSchema.spec.ts
npx playwright test Tests/GetSuccess.spec.ts --workers=1 --retries=0
npx playwright test Tests/GetBadRequest.spec.ts --workers=1 --retries=0
npm run report:generate
npm run report:open
```

### Massa de testes
`GetSuccess.spec.ts` cobre os GETs **não duplicados**; os outros são executados por `*.spec.ts` dos clients. O catálogo cobre todos os **108 GETs**. `MutationContracts.spec.ts` cataloga as **85 operações mutáveis**, sem executá-las automaticamente. Sem parâmetros, o GET é executado. Endpoints parametrizados precisam de casos confiáveis; se não há fixture, aparecem como **skipped** e NÃO como sucesso.

Para preencher os cenários dependentes de dados: copie `Data/get-fixtures.example.json` para `Data/get-fixtures.local.json`, substitua todos os placeholders por dados **autorizados e existentes**, e mantenha só os itens necessários. Não commite esse arquivo. Alguns endpoints precisam de IDs obtidos de consultas de lista.

Endpoints depreciados ficam skipped por padrão. `RUN_DEPRECATED=1` habilita os casos com massa disponível.

`GetBadRequest.spec.ts` envia parâmetro deliberadamente incompatível com `integer`, `number`, `uuid`, `date-time` ou enum e exige **exatamente HTTP 400** quando documentado. Se a API retornar 200, o caso FALHA; isso exige investigação de validação, não relaxamento do teste.

`ApiErrors.spec.ts` confirma um cenário de falta de autenticação (401). O Swagger listar 401 **não comprova** que todos os recursos exijam hash; por isso não se gera 401 em massa para rotas anônimas.

### Notas de investigação do comportamento observado
- `GET /api/v1/Conta/ConsultarCep/{cep}` e `/api/v1/Endereco/Cep/{cep}`: resposta HTTP 200 para `00000000`/`CEP_INVALIDO` observada no HML. O Swagger **tipa `cep` como string, sem padrão ou minLength**; não existe garantia contratual de 400 nesse input. O teste incorreto foi removido. Validar corpo/erro de negócio com a equipe.
- `GET /api/v1/Endereco/Obter`: o corpo HTTP 200 apresentou `$.item.dataRegistro` em formato diferente do `date-time` do Swagger. A validação foi mantida estrita para revelar a divergência; não se mascara o desvio.
- Binários e 204 não devem passar por `JSON.parse` indiscriminadamente. A base trata body vazio como null e arquivo como Buffer.
- Os nomes de query são exatamente os do Swagger (`cpf` minúsculo em `Autenticacao/ObterTecladoVirtual`).

### Qualidade da cobertura
- Catalogar uma rota não significa testá-la em sucesso: `passed` só ocorre com resposta real e contrato validado.
- Uma resposta 200 a um cenário negativo não pode aprovar o caso.
- 400, 401, 404, 422 são cenários **separados**, com status explícitos. Não se substitui um pelo outro.
- Os testes de contratos verificam os campos exigidos de acordo com o `required` no Swagger; validações de negócio precisam de fixtures e oráculos adicionais.
- Um `200` válido no schema pode conter erro de negócio no envelope; isso depende de regra documentada específica por endpoint.

## Limitações
Os tipos originais em `Models/*.model.ts` são simplificados e alguns declaram `item` com o formato errado (lista versus objeto). O validador real de resposta usa os schemas completos `components/schemas` do Swagger. Para tipagem exata em compile-time de todos os resultados, recomenda-se gerar tipos a partir da OpenAPI com uma ferramenta especializada; não declarar que os modelos simplificados são o contrato completo.

### Contrato de modelos TypeScript
`Models/openapi-generated.ts` contém os tipos gerados para os **430 schemas** de `components/schemas` e o tipo de resposta de cada GET. Os modelos de domínio legados permanecem por compatibilidade, mas não substituem o schema completo do Swagger.

### Evitando duplicações no Allure
Os 17 GETs com testes especializados de clientes não são registrados novamente na suíte `GetSuccess.spec.ts`; todos os demais GETs são registrados, executados apenas com massa adequada ou marcados como skipped. A matriz BDD lista os **193 métodos+rotas** do Swagger, não execuções realizadas.

### Validação de payload
Na suíte de mutações, `expectOpenApiRequest()` valida os campos e tipos do `requestBody` contra o Swagger **antes de enviar a requisição**. GETs validam nomes, enums e tipos dos parâmetros no `SwaggerApiClient`, exceto testes negativos que precisam enviar propositalmente parâmetros malformados.
