Exemplo: 

# language: pt

Funcionalidade: Obtenção de Teclado Virtual para Autenticação
  Como um colaborador do sistema
  Eu quero solicitar a estrutura de um teclado virtual
  Para que eu possa realizar a autenticação de forma segura

  Cenário: Solicitação bem-sucedida do teclado virtual com CPF válido
    Dado que possuo um CPF válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Autenticacao/ObterTecladoVirtual" com o CPF informado
    Então o código de status da resposta deve ser 200 (OK)
    E o objeto "item" deve conter um array "tecladoItens" com 5 elementos
    E cada elemento dentro de "tecladoItens" deve conter as chaves "posicao", "identificador" e "opcoes" com valores não nulos

    Cenários Home

1) ObterHistorico

  Esquema do Cenário: Listagem bem-sucedida de histórico TED por opção de período
    Dado que possuo o parâmetro de período "<periodo>" válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/ObterHistorico" informando o parâmetro de consulta "Periodo" com o valor "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
    E o corpo da resposta deve conter o array "itens"
    E cada elemento dentro de "itens" deve conter o array "items"
    E cada elemento dentro de "items" deve conter a chave "data" e o array "transacoes"
    E cada elemento dentro de "transacoes" deve conter as chaves "idTransacao", "tipo", "titulo", "descricao", "valor", "natureza" e "data" com valores não nulos

    Exemplos:
      | periodo    |
      | MENSAL     |
      | BIMESTRAL  |
      | TRIMESTRAL |


2) ObterTransaçõesRecentes

# language: pt
Funcionalidade: Listagem de Transações Recentes de TED
  Como um colaborador do sistema
  Eu quero consultar as transações recentes de transferências TED
  Para visualizar os dados dos recebedores das últimas operações realizadas

  Cenário: Listagem bem-sucedida das transações recentes de TED
    Dado que sou um usuário autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/ObterTransacoesRecentes"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
    E o corpo da resposta deve conter o array "itens" com até 5 elementos
    E cada elemento dentro de "itens" deve conter as chaves "agenciaRecebedor", "contaRecebedor", "documentoRecebedor", "nomeRecebedor", "paraMim", "tedTipoContaRecebedor" e "bancoResult"
    E o objeto "bancoResult" deve conter as chaves "id", "codigo" e "nome" com valores não nulos


3) Extratos

# language: pt
Funcionalidade: Obtenção de Extrato de Transferências TED
Como um colaborador do sistema
Eu quero solicitar o extrato das transferências TED
Para que eu possa visualizar o histórico detalhado e paginado das movimentações

Cenário: Solicitação bem-sucedida do extrato de TED com todos os parâmetros válidos
Dado que possuo o parâmetro "Filtro.PeriodoDias" válido
E possuo o parâmetro "Filtro.De" válido
E possuo o parâmetro "Filtro.Ate" válido
E possuo o parâmetro "Pagina" válido
E possuo o parâmetro "Registros" válido
Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Extratos" com os parâmetros informados
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter um array "itens"
E cada elemento dentro de "itens" deve conter as chaves "nomeFavorecido", "nomeBanco", "valorTransacao" e "dataTransacao" com valores não nulos


4) ObterInstituições

# language: pt
Funcionalidade: Obtenção de Instituições Financeiras para TED
Como um colaborador do sistema
Eu quero solicitar a lista de instituições financeiras suportadas
Para que eu possa selecionar a instituição e realizar transferências TED

Cenário: Solicitação bem-sucedida da lista de instituições financeiras
Dado que estou autenticado no sistema
Quando faço uma requisição GET para o endpoint "/api/v1/Ted/ObterInstituicoes"
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter o array "itens"
E cada elemento dentro de "itens" deve conter as chaves "id", "codigo" e "nome" com valores não nulos


5) ObterTipoContas

# language: pt
Funcionalidade: Obtenção de Tipos de Conta para TED
Como um colaborador do sistema
Eu quero solicitar a lista de tipos de conta disponíveis para realização de TED
Para que eu possa selecionar o tipo de conta adequado ao realizar a transferência

Cenário: Solicitação bem-sucedida da lista de tipos de conta
Dado que estou autenticado no sistema
Quando faço uma requisição GET para o endpoint "/api/v1/Ted/ObterTipoContas"
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
E o corpo da resposta deve conter o array "itens"
E cada elemento dentro de "itens" deve conter as chaves "id" e "tipo" com valores não nulos


6) Comprovante

# language: pt
Funcionalidade: Obtenção de Comprovante de Operação TED
Como um colaborador do sistema
Eu quero consultar o comprovante de uma operação TED através do código da operação
Para que eu possa visualizar e comprovar os detalhes da transferência realizada

Cenário: Solicitação bem-sucedida do comprovante de TED com código de operação válido
Dado que possuo o parâmetro "CodigoOperacao" com um código de operação válido
Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Comprovante" com o "CodigoOperacao" informado
Então o código de status da resposta deve ser 200 (OK)
E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
E o objeto "item" deve conter as chaves "autenticacao", "nomeFavorecido", "valorTransferencia", "dataOperacao", "documentoFavorecido", "agenciaFavorecido", "contaFavorecido", "bancoFavorecido", "ispbif", "nomeCliente", "contaCliente", "agenciaCliente", "documentoCliente", "tipoPagamento", "finalidade", "tipo" e "dataAgendamento" com valores não nulos
