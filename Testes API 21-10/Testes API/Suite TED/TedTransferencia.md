1) Transferencias

# language: pt
Funcionalidade: Execução de Transferência TED
  Como um colaborador do sistema
  Eu quero executar uma transferência TED entre contas utilizando os dados informados
  Para que a transferência seja solicitada com sucesso

  Cenário: Execução bem-sucedida de transferência TED
    Dado que possuo os dados válidos para a transferência bancária
    Quando faço uma requisição POST para o endpoint "/api/v1/Ted/Transferencias" com o seguinte corpo:
      """json
      {
        "nomeFavorecido": "string",
        "documentoFavorecido": "string",
        "valor": 0,
        "dataVencimento": "2026-10-21T11:45:07.677Z",
        "horaVencimento": "string",
        "agenciaCredito": "string",
        "contaCredito": "string",
        "tipoConta": "CONTA_CORRENTE",
        "banco": {
          "id": "string",
          "codigo": "string",
          "nome": "string"
        },
        "dadosSeguranca": {
          "otp": "string"
        }
      }
      """
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "item"
    E o objeto "item" deve conter a chave "status" com o valor "SOLICITADO"
