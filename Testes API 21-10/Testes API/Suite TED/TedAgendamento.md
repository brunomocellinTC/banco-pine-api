1) Agendamento (Cancelar Ted Agendada)

# language: pt
Funcionalidade: Cancelamento de TED Agendada
  Como um colaborador do sistema
  Eu quero solicitar o cancelamento de uma TED agendada
  Para interromper a execução de uma transferência previamente programada

  Cenário: Cancelamento bem-sucedido de TED agendada com código de transação válido
    Dado que possuo um código de transação válido de uma TED agendada
    Quando faço uma requisição POST para o endpoint "/api/v1/Ted/Agendamento" com o parâmetro de consulta "CodigoTransacao" informado
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode" com valores não nulos
    E o campo "item" deve conter o valor booleano true

2) Agendamento (Listagem de TED Agendada)

# language: pt
Funcionalidade: Listagem de TEDs Agendadas por Período
  Como um colaborador do sistema
  Eu quero consultar as transferências TED agendadas filtrando pelos períodos permitidos
  Para acompanhar os agendamentos pendentes de execução de acordo com o intervalo selecionado

  Esquema do Cenário: Listagem bem-sucedida de TEDs agendadas por opção de período
    Dado que possuo o parâmetro de período "<periodo>" válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Agendamento" informando o parâmetro de consulta "Periodo" com o valor "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter o array "grupos"
    E cada elemento dentro de "grupos" deve conter a chave "data" e o array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "codigoTransacao", "dataAgendada", "dataSolicitacao", "valor", "tipoPagamento", "formaPagamento", "pagador" e "favorecido"
    E o objeto "pagador" deve conter as chaves "nome", "documento", "agencia" e "conta" com valores não nulos
    E o objeto "favorecido" deve conter as chaves "nome", "documento", "agencia", "conta", "nomeBanco" e "ispb" com valores não nulos

    Exemplos:
      | periodo    |
      | MENSAL     |
      | BIMESTRAL  |
      | TRIMESTRAL |
