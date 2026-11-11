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

Casos de Teste - Pix Transferência:

1) ObterHistórico

# language: pt

Funcionalidade: Consulta de Histórico de Transferências Pix
  Como um cliente autenticado no sistema
  Eu quero consultar o histórico de transferências Pix realizadas
  Para que eu possa acompanhar minhas movimentações financeiras

  Esquema do Cenário: Consulta bem-sucedida do histórico de transferências com diferentes períodos
    Dado que possuo autenticação válida
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterHistorico" com o parâmetro "Periodo" igual a "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter o campo "totalRegistros"
    E se a lista "itens" não estiver vazia, cada transação deve conter as chaves "nomeFavorecido", "valor", "data", "status", "tipo", "natureza", "endToEnd", "tipoComprovante", "devolucao" e "idRecorrencia"

    Exemplos:
      | periodo     |
      | MENSAL      |
      | BIMESTRAL   |
      | TRIMESTRAL  |


  Cenário: Consulta bem-sucedida do histórico de transferências por intervalo de datas específico
    Dado que possuo autenticação válida
    E defino as datas de início "De" e fim "Ate" para a consulta
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterHistorico" com os parâmetros "De" e "Ate"
    Então o código de status da resposta deve ser 200 (OK)
    E o campo "totalRegistros" deve ser retornado
    E todas as transações na lista "itens" devem ter uma "data" dentro do intervalo especificado




2) ObterTransacoesRecentes

# language: pt

Funcionalidade: Obtenção de Transações Recentes do Pix
  Como um cliente autenticado no sistema
  Eu quero consultar minhas transações Pix mais recentes
  Para que eu possa visualizar rapidamente minhas últimas movimentações

  Cenário: Consulta bem-sucedida das últimas transações realizadas
    Dado que sou um cliente autenticado com transações Pix em meu histórico
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterTransacoesRecentes"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter uma lista "itens" com até 5 transações
    E cada item na lista "itens" deve conter as chaves "nomeFavorecido", "documentoFavorecido", "banco", "chave", "tipo" e "praMim"
    E o objeto "banco" dentro de cada item deve conter as chaves "codigo", "nome", "agencia", "conta" e "tipoConta"

3) ObterComprovante


# language: pt

Funcionalidade: Obtenção de Comprovante de Transação Pix
  Como um cliente ou colaborador do sistema
  Eu quero obter o comprovante detalhado de uma transação Pix específica
  Para que eu possa validar e armazenar os detalhes completos da operação

  Esquema do Cenário: Consulta bem-sucedida do comprovante para diferentes tipos de transação
    Dado que possuo um "EndToEnd" válido para uma transação registrada de "<tipo>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterComprovante" com o "EndToEnd" e o parâmetro igual a "<tipo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter um objeto "item" com os detalhes do comprovante
    E o objeto "item" deve possuir as chaves principais como "nomeContraParte", "documentoContraParte", "valor", "data" e "codigoOperacao"

    Exemplos:
      | tipo            |
      | ORDEM_PAGAMENTO |
      | DEVOLUCAO       |
      | AGENDAMENTO     |
      | AUTOMATICO      |
      | SAQUE           |
      | TROCO           |



4) ListarHistoricoAgendamento

# language: pt

Funcionalidade: Listagem do Histórico de Transações Agendadas do Pix
  Como um cliente autenticado
  Eu quero consultar o histórico de minhas transações agendadas
  Para que eu possa acompanhar e gerenciar meus pagamentos futuros

  Esquema do Cenário: Consulta bem-sucedida do histórico de agendamentos com diferentes filtros
    Dado que sou um cliente autenticado e possuo transações agendadas no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ListarHistoricoAgendamento" com os parâmetros "TipoTransacao" igual a "<tipoDeTransacao>" e "Periodo" igual a "<periodo>"
    E informo as datas de início e fim válidas
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter uma lista "itens" e o campo "totalRegistros"
    E se a lista "itens" não estiver vazia, cada item deve conter as chaves "id", "nomeFavorecido", "valor", "status", "periodicidade", "dataInicial" e "dataFinal"

    Exemplos:
      | tipoDeTransacao | periodo    |
      | RECORRENCIA     | MENSAL     |
      | RECORRENCIA     | BIMESTRAL  |
      | RECORRENCIA     | TRIMESTRAL |
      | AGENDAMENTO     | MENSAL     |
      | AGENDAMENTO     | BIMESTRAL  |
      | AGENDAMENTO     | TRIMESTRAL |


5) ObterInstituicoes

# language: pt

Funcionalidade: Obtenção de Instituições Financeiras para Pix
  Como um usuário do sistema
  Eu quero obter a lista de todas as instituições financeiras que operam com Pix
  Para que eu possa selecionar um banco de destino ao realizar uma transferência

  Cenário: Consulta bem-sucedida da lista de instituições financeiras
    Dado que desejo consultar as instituições financeiras suportadas pelo Pix
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterInstituicoes"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter uma lista "itens" com as instituições
    E cada item na lista "itens" deve conter as chaves "id", "codigo", "nome" e "tipo"
    E o campo "totalRegistros" deve refletir o número total de instituições na lista "itens"

6) ObterTipoContas

# language: pt

Funcionalidade: Obtenção de Tipos de Conta para Pix
  Como um usuário do sistema
  Eu quero obter a lista de tipos de conta disponíveis para realizar um Pix
  Para que eu possa selecionar o tipo correto durante uma transação

  Cenário: Consulta bem-sucedida da lista de tipos de conta
    Dado que desejo consultar os tipos de conta suportados para transações Pix
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterTipoContas"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter uma lista chamada "itens"
    E cada objeto na lista "itens" deve possuir as chaves "id" e "tipo"
    E o campo "totalRegistros" deve corresponder ao número de itens na lista

7) FazerTransferencia

# language: pt

Funcionalidade: Realização de Transferência via Pix
  Como um cliente autenticado do banco
  Eu quero realizar uma transferência via Pix para um favorecido
  Para que eu possa enviar dinheiro de forma instantânea e segura

  Cenário: Realizar uma transferência Pix com sucesso e validar o comprovante
    Dado que sou um cliente autenticado e com saldo suficiente na conta
    E possuo todos os dados válidos para a transferência, incluindo chave Pix, valor e dados de segurança
    Quando eu envio uma requisição POST para o endpoint "/api/v1/Pix/Transferencias/FazerTransferencia" com os dados completos da transação
    Então o código de status da resposta deve ser 201 (Created)
    E a resposta deve conter um objeto "item" não nulo
    E o campo "status" dentro do objeto "item" deve ser "PAGAMENTO_REALIZADO"
    E o campo "tipoComprovante" dentro do objeto "item" deve ser "ORDEM_PAGAMENTO"
    E o campo "codigoOperacao" dentro do objeto "item" deve existir e não ser nulo
    E os campos "nomeFavorecido" e "valor" dentro do objeto "item" devem corresponder aos dados enviados na requisição

8) FazerDevolucao

# language: pt

Funcionalidade: Solicitação de Devolução de Valor via Pix
  Como um usuário do sistema
  Eu quero registrar uma solicitação de devolução de um valor recebido via Pix
  Para que o processo de estorno possa ser iniciado corretamente

  Cenário: Registrar uma solicitação de devolução de Pix com dados válidos
    Dado que possuo o "endToEndId" de uma transação Pix recebida e válida
    E especifico o valor a ser devolvido no corpo da requisição
    E forneço o header obrigatório "x-nome-plataforma"
    Quando eu envio uma requisição POST para o endpoint "/api/v1/Pix/Transferencias/FazerDevolucao"
    Então o código de status da resposta deve ser 201 (Created)
    E a resposta deve conter um objeto "item" não nulo
    E o objeto "item" deve conter a chave "transferenciaid" com um valor de identificação não nulo

9) ObterMotivos

# language: pt

Funcionalidade: Obtenção de Motivos de Infração no Pix
  Como um usuário do sistema
  Eu quero consultar a lista de motivos de infração de Pix disponíveis
  Para que eu possa selecionar o motivo correto ao registrar uma infração

  Cenário: Consulta bem-sucedida da lista de motivos de infração
    Dado que o sistema possui motivos de infração de Pix cadastrados
    Quando eu faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/Infracao/ObterMotivos"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter um array "itens"
    E o campo "totalRegistros" deve ser um número igual à quantidade de itens
    E se o array "itens" não estiver vazio, cada elemento deve conter as chaves "id", "descricao", "tipoInfracao" e "tipoSituacao"



