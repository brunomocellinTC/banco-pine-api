# Automação de APIs — Pine IBPF

Projeto Playwright + TypeScript orientado ao arquivo `swagger.json`.

**Consulte [`README-REFATORACAO.md`](README-REFATORACAO.md) para a revisão e comandos de execução.**

O código de domínio antigo foi preservado sem os clientes duplicados; o catálogo de GETs e das operações de escrita é gerado a partir do OpenAPI. Cenários de sucesso precisam de massa válida, erros validam o código HTTP exato. A matriz BDD de rastreabilidade está em `Testes API 21-10/BDD-CONTRATO-ATUAL.md`.

Mantenha `LOGIN_HASH`, CPF e demais credenciais **apenas no seu `.env` privado**, nunca no ZIP/repositório. Não executamos operações de escrita por padrão.


## Ajustes dirigidos pelo Allure (18/11/2026)

Veja [`README-RESULTADO-ALLURE.md`](./README-RESULTADO-ALLURE.md) e `Data/allure-failures-classified.json` para as 55 falhas identificadas, diferenças de schema observadas e comando `STRICT_SWAGGER=1`.
