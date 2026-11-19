# Evidências HAR nos testes dos domínios

As 171 requests dos nove HARs foram consolidadas em 142 evidências sanitizadas em `Data/har-observed-cases.json`. As evidências enriquecem os testes existentes de cada domínio; não geram um segundo conjunto de 171 testes.

Uma entrada repetida (método, rota, query, path e contexto de autenticação) não é registrada novamente por vir de outro HAR. Quando a mesma entrada tem respostas diferentes, a evidência de sucesso tem prioridade; as capturas continuam rastreáveis no arquivo de dados.

## Verificações

- Status exato do cenário observado; 400, 401 e 422 são distintos. 500 nunca aprova como sucesso.
- Schema do Swagger, com divergências conhecidas anotadas. `STRICT_SWAGGER=1` reprova também os desvios conhecidos e erros com status não documentado.
- Presença e tipos dos campos capturados, inclusive campos aninhados comuns aos registros observados. Um objeto vazio não substitui resultado preenchido.
- Identidade do erro: 29 evidências de 4xx possuem comparação do código ou, quando ausente, dos erros/mensagem. Apenas o SHA-256 da identidade é versionado, sem o conteúdo privado.
- Teclado virtual exige cinco itens; consultas de CEP válido conferem a correspondência com a entrada.
- Valores conhecidos da massa podem ser exigidos em `Data/get-fixtures.local.json`, propriedade `expected`.

Saldos, datas, IDs gerados e tamanhos de listas não ficam congelados na captura. Listas vazias são permitidas quando o contrato e a expectativa funcional do cenário permitem. Os dados observados não provam todas as regras de negócio.

O arquivo sanitizado contém nomes de campos, tipos, identificadores das capturas e fingerprints dos erros. Não contém bodies brutos, headers de autenticação ou valores privados extraídos das respostas. Os arquivos `.har` continuam privados e ignorados pelo Git, mas **não são necessários para rodar os testes**.

## Execução

```bash
npm run test:gets
```

`RUN_HAR_500=1` inclui entradas históricas de 500 como diagnósticos dentro do endpoint correspondente. Se houver 500 atual, o teste reprova. Não são habilitadas por padrão.

As combinações de `Data/query-combinations.local.json` também entram no respectivo endpoint, com deduplicação da entrada. Não há categoria separada de matriz ou HAR.
