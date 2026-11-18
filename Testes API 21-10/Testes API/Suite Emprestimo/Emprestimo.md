1) ObterParcelas

# language: pt
Funcionalidade: Obtenção das Parcelas de Empréstimo
Como um colaborador do sistema
Eu quero consultar as parcelas de um empréstimo informando os parâmetros necessários
Para que eu possa acompanhar a situação, vencimentos e pagamentos das parcelas do contrato

Cenário: Consulta bem-sucedida das parcelas de empréstimo com parâmetros válidos
Dado que possuo os parâmetros "NumeroContrato" e "DataCarga" válidos
Quando faço uma requisição GET para o endpoint "/api/v1/Emprestimo/ObterParcelas" com os parâmetros informados
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter o array "itens"
E cada elemento dentro de "itens" deve conter as chaves "parcelaAtual", "parcelaTotal", "valorParcela", "vencimento", "pagoEm" e "statusPagamento" com valores não nulos


2) ObterDocumento

# language: pt
Funcionalidade: Obtenção de Documento de Empréstimo
Como um colaborador do sistema
Eu quero solicitar o documento de um empréstimo informando o número do contrato
Para que eu possa consultar ou realizar o download do documento correspondente

Cenário: Obtenção bem-sucedida do documento de empréstimo com número de contrato válido
Dado que possuo um número de contrato válido
Quando faço uma requisição GET para o endpoint "/api/v1/Emprestimo/ObterDocumento" com o parâmetro "numeroContrato" informado
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter o conteúdo do documento em formato de texto com valor não nulo e não vazio


3) Obter

# language: pt
Funcionalidade: Obtenção da Lista de Empréstimos e Produtos
Como um colaborador do sistema
Eu quero consultar os empréstimos e produtos disponíveis
Para que eu possa visualizar as contratações vigentes e as opções de produtos

Cenário: Consulta bem-sucedida da lista de empréstimos e produtos
Dado que possuo autorização para consultar a listagem de empréstimos
Quando faço uma requisição GET para o endpoint "/api/v1/Emprestimo/Obter" sem parâmetros
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter o array "itens"
E cada elemento dentro de "itens" deve conter os arrays "emprestimos" e "produtos"
E cada elemento dentro de "emprestimos" deve conter as chaves "numeroContrato", "nome", "valorDaParcela", "dataUltimaParcela", "dataContrato", "valorOriginal", "valorAtual", "valorAPagar", "parcelasTotal", "parcelasPagas" e "dataCarga" com valores não nulos
E cada elemento dentro de "produtos" deve conter as chaves "id", "nome", "descricao", "posicao" e o array "secoes"
E cada elemento dentro de "secoes" deve conter as chaves "id", "nome" e "descricao" com valores não nulos


4) ObterProdutos

# language: pt
Funcionalidade: Obtenção de Produtos para Empréstimo
Como um colaborador do sistema
Eu quero solicitar a lista de produtos disponíveis para empréstimo
Para que eu possa consultar as opções de produtos e suas seções correspondentes

Cenário: Consulta bem-sucedida da lista de produtos para empréstimo
Dado que possuo autorização para consultar os produtos de empréstimo
Quando faço uma requisição GET para o endpoint "/api/v1/Emprestimo/ObterProdutos" sem parâmetros
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter o array "itens"
E cada lista contida em "itens" deve possuir elementos com as chaves "id", "nome", "descricao", "posicao" e o array "secoes"
E cada elemento dentro de "secoes" deve conter as chaves "id", "nome" e "descricao" com valores não nulos
