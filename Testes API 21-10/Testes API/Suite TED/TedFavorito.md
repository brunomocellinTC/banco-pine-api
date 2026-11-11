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

    Cenários TED


1) Criar

# language: pt
Funcionalidade: Criação de Favorecido TED
  Como um colaborador do sistema
  Eu quero criar um favorecido TED
  Para cadastrar uma nova conta de destino para transferências TED

  Cenário: Criação bem-sucedida de favorecido TED com dados válidos
    Dado que possuo os dados válidos para cadastro do favorecido
    Quando faço uma requisição POST para o endpoint "/api/v1/Ted/Favorecido/Criar" com o seguinte corpo:
      """json
      {
        "documento": "string",
        "nome": "string",
        "agencia": "string",
        "conta": "string",
        "idBanco": "string",
        "tipoConta": "CONTA_CORRENTE"
      }
      """
    Então o código de status da resposta deve ser 201 (Created)
    E a resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode" com valores não nulos
    E o campo "item" deve conter o valor booleano true


2) Obter

# language: pt
Funcionalidade: Obtenção de Lista de Favorecidos de TED
  Como um colaborador do sistema
  Eu quero obter a lista de favorecidos de TED
  Para consultar os dados das contas cadastradas para transferência

  Cenário: Consulta bem-sucedida da lista de favorecidos de TED
    Dado que possuo acesso à consulta de favorecidos
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Favorecido/Obter"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "totalRegistros"
    E a resposta deve conter a lista "itens"
    E cada elemento dentro de "itens" deve conter as chaves "documento", "nome", "agencia", "conta", "ispb", "tipoConta" e o objeto "banco"
    E cada objeto "banco" deve conter as chaves "id", "codigo" e "nome" com valores não nulos


3) Excluir

# language: pt
Funcionalidade: Exclusão de Favorecido TED
  Como um colaborador do sistema
  Eu quero excluir um favorecido de TED
  Para remover os dados de uma conta cadastrada da lista de favorecidos

  Cenário: Exclusão bem-sucedida de favorecido TED com dados válidos
    Dado que possuo os dados de um favorecido válido a ser excluído
    Quando faço uma requisição DELETE para o endpoint "/api/v1/Ted/Favorecido/Excluir" com o seguinte corpo:
      """json
      {
        "documento": "string",
        "nomeFavorecido": "string",
        "agencia": "string",
        "conta": "string",
        "tipoConta": "CONTA_CORRENTE",
        "banco": {
          "id": "string",
          "codigo": "string",
          "nome": "string"
        }
      }
      """
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode" com valores não nulos
    E o campo "item" deve conter o valor booleano true
