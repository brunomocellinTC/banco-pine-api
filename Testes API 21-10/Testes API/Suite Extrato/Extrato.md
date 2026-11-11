1) Obter

# language: pt
Funcionalidade: Obtenção de Extrato e Movimentações Financeiras
  Como um colaborador do sistema
  Eu quero consultar o histórico de extratos e movimentações financeiras da conta filtrando pelos períodos permitidos
  Para acompanhar as movimentações financeiras realizadas de acordo com o intervalo selecionado

  Esquema do Cenário: Obtenção bem-sucedida do extrato por opção de período
    Dado que possuo o parâmetro de período "<periodo>" válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Extrato/Obter" informando o parâmetro de consulta "Periodo" com o valor "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
    E o corpo da resposta deve conter o array "itens"
    E cada elemento dentro de "itens" deve conter a chave "data" e o array "transacoes"
    E cada elemento dentro de "transacoes" deve conter as chaves "dataTransacao", "saldoAtual", "natureza", "nomeRecebedor", "valorTransacao", "saldoDisponivel", "descricaoHistorico" e "complementoHistorico" com valores não nulos

    Exemplos:
      | periodo    |
      | MENSAL     |
      | BIMESTRAL  |
      | TRIMESTRAL |
