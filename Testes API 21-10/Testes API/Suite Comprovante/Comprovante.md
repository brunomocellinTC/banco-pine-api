1) Listar

# language: pt
Funcionalidade: Listagem de Comprovantes Recentes por Período
  Como um colaborador do sistema
  Eu quero consultar a lista de comprovantes recentes filtrando pelos períodos permitidos
  Para visualizar e acompanhar o histórico de comprovantes de transações de acordo com o intervalo selecionado

  Esquema do Cenário: Listagem bem-sucedida de comprovantes recentes por opção de período
    Dado que possuo o parâmetro de período "<periodo>" válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Comprovante/Listar" informando o parâmetro de consulta "Periodo" com o valor "<periodo>"
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
