# Clientes das suítes de API

Os clientes novos estão separados por domínio em `Clients/*-api-client-copia.ts`, com os modelos correspondentes em `Models/*-copia.model.ts`. Os clientes existentes foram preservados.

O `API_BASE_URL` do `.env` é usado pelo `BaseApiClientCopia`; mantenha nele a URL raiz da API, sem adicionar uma rota de recurso. O cliente acrescenta os caminhos `/api/v1/...` das especificações. Respostas sem corpo, como HTTP 204, são expostas com `body: null`.

| Domínio | Cliente | Modelos |
|---|---|---|
| Autenticação | `Clients/autenticacao-api-client-copia.ts` | `Models/autenticacao-copia.model.ts` |
| Comprovante | `Clients/comprovante-api-client-copia.ts` | `Models/comprovante-copia.model.ts` |
| Empréstimo | `Clients/emprestimo-api-client-copia.ts` | `Models/emprestimo-copia.model.ts` |
| Extrato | `Clients/extrato-api-client-copia.ts` | `Models/extrato-copia.model.ts` |
| Home | `Clients/home-api-client-copia.ts` | `Models/home-copia.model.ts` |
| Investimento | `Clients/investimento-api-client-copia.ts` | `Models/investimento-copia.model.ts` |
| Pix | `Clients/pix-api-client-copia.ts` | `Models/pix-copia.model.ts` |
| TED | `Clients/ted-api-client-copia.ts` | `Models/ted-copia.model.ts` |

O envelope compartilhado de resposta está em `Models/api-envelope-copia.model.ts`. A Home usa `LOGIN_HASH` do ambiente por padrão; os outros clientes aceitam cabeçalhos adicionais no construtor quando necessário.
