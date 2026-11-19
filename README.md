# Automação de APIs — Pine IBPF

Os testes ficam nos domínios do Pine: Conta, Pix, Ted, Investimento, Home, Onboarding etc. Cada endpoint reúne seus cenários de sucesso e erro. Não há suíte paralela de replay nem categorias separadas de sucesso/erro.

A hierarquia do Allure é explícita: `automacao-api → tag do Swagger → endpoint → cenários`. `ContractIntegrity` e `OpenApiSchema` são raízes separadas. Os arquivos de suporte não fazem parte dessa árvore; os testes são declarados nos próprios arquivos de domínio.

O contrato contém **193 operações (método + rota): 108 GETs e 85 operações de escrita**. [Data/endpoint-coverage.json](Data/endpoint-coverage.json) cruza todo o Swagger com as pendências da lista fornecida em 19/11/2026. As 110 operações marcadas a partir da lista incluem as duas versões de InformeRendimento presentes no Swagger.

## Executar na VPN

- `npm test`: cenários disponíveis e placeholders pendentes no próprio domínio. Pendências aparecem como fixme/skipped, sem requisição e sem aprovação.
- `npm run test:gets`: somente GETs executáveis, incluindo erros esperados; exclui os placeholders.
- `npm run test:negativos`: cenários de erro disponíveis.
- `npm run test:unit`: verificações locais do validador e inventário.
- `npm run report`: relatório Allure.

Após executar cenários de API, consulte **test-results/endpoint-coverage.md** ou o JSON ao lado. O resumo separa total de operações, operações executadas, sucesso aprovado, erro aprovado, falhas e pendências. Filtros e repetições não multiplicam a contagem de endpoints. Validar um 422 não significa cobrir o sucesso da operação.

Um 200 com massa insuficiente, informado na lista, pode ter o contrato verificado e continuar com a validação funcional pendente. Isso fica explícito no relatório.

Credenciais ficam no `.env` privado: `API_BASE_URL`, `LOGIN_HASH` e `CPF` quando necessário. Os testes anônimos de 401 usam contexto sem autenticação.

Os 13 HARs atuais contêm 243 requests, consolidadas em 203 evidências distintas. Os payloads capturados de escrita são aproveitados com `RUN_MUTATIONS=1`. **Copie também `Data/har-values.local.json` para o notebook da VPN**: contém a massa privada extraída, está ignorado pelo Git e não segue em push/pull. Valores definidos no `.env` têm prioridade. Sem essa massa, os cenários dependentes permanecem pendentes.

Os HARs brutos não são necessários no notebook da VPN: [README-HAR.md](README-HAR.md). Para configurar massa e expectativas funcionais: [README-REFATORACAO.md](README-REFATORACAO.md).

Esta reorganização foi preparada sem executar testes, build ou chamadas à API. Os números de aprovação dependem da execução real na VPN.
