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

    Cenário Pix Chave

1) Excluir

# language: pt

Funcionalidade: Exclusão de Chave Pix
  Como um colaborador do sistema
  Eu quero solicitar a exclusão de uma chave Pix
  Para que ela não fique mais vinculada à conta

  Cenário: Exclusão bem-sucedida de uma chave Pix existente
    Dado que possuo uma chave Pix válida e cadastrada
    Quando faço uma requisição DELETE para o endpoint "/api/v1/Pix/Chave/Excluir" com o parâmetro "chave" informado via query
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta não deve retornar nenhum conteúdo

2) Possui

# language: pt

Funcionalidade: Verificação de Existência de Chave Pix
  Como um colaborador do sistema
  Eu quero verificar se o usuário possui chave Pix cadastrada
  Para que o fluxo de gerenciamento de chaves seja direcionado adequadamente

  Cenário: Verificação bem-sucedida se o usuário possui chave Pix cadastrada
    Dado que o usuário está autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Chave/Possui"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter o campo "possuiChave" com valor booleano

3) ObterLista

# language: pt

Funcionalidade: Consulta da Lista de Chaves Pix
  Como um colaborador do sistema
  Eu quero solicitar a listagem de chaves Pix
  Para que eu possa visualizar e gerenciar as chaves cadastradas da conta

  Cenário: Consulta bem-sucedida da lista de chaves Pix cadastradas
    Dado que o usuário está autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Chave/ObterLista"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "itens" e "totalRegistros"
    E cada elemento dentro da lista "itens" deve conter as chaves "id", "instituicao", "dataSolicitacao", "dataResolucao", "tipo", "chave" e "status" com valores não nulos

4) Obter

# language: pt

Funcionalidade: Consulta de Informações de Chave Pix Específica
  Como um colaborador do sistema
  Eu quero buscar as informações de uma chave Pix específica
  Para que eu possa visualizar os dados cadastrais e bancários associados a ela

  Cenário: Consulta bem-sucedida de informações de uma chave Pix válida
    Dado que possuo uma chave Pix válida
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Chave/Obter" informando o parâmetro "chave" via query
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as chaves "chave", "tipo", "documento", "nome", "endToEndId", "banco", "ehMesmaTitularidade" e "ehBeneficiario"
    E o objeto aninhado "banco" deve conter as chaves "codigo", "nome", "agencia", "conta" e "tipoConta" com valores não nulos

5) Criar

# language: pt
Funcionalidade: Criação de Chave Pix
  Como um colaborador do sistema
  Eu quero solicitar o cadastramento de uma nova chave Pix
  Para que o cliente possa receber transferências utilizando a chave registrada

  Esquema do Cenário: Cadastro bem-sucedido de chave Pix com autenticação por dados de segurança (EVP ou CPF)
    Dado que possuo os dados válidos para criação de uma chave do tipo "<tipo>"
    E informo o valor da chave no campo "valor"
    E informo o objeto "dadosSeguranca" com o "otp" preenchido
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Chave/Criar" enviando o corpo da requisição
    Então o código de status da resposta deve ser 201 (Created)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "chave" e "status" com valores não nulos

    Exemplos:
      | tipo |
      | EVP  |
      | CPF  |

  Esquema do Cenário: Cadastro bem-sucedido de chave Pix com validação por código de token (EMAIL ou TELEFONE)
    Dado que possuo os dados válidos para criação de uma chave do tipo "<tipo>"
    E informo o valor da chave no campo "valor"
    E informo o código do token de validação no campo "codigo"
    E o campo "dadosSeguranca" deve ser nulo
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Chave/Criar" enviando o corpo da requisição
    Então o código de status da resposta deve ser 201 (Created)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "chave" e "status" com valores não nulos

    Exemplos:
      | tipo     |
      | EMAIL    |
      | TELEFONE |


6) SolicitarCodigo

# language: pt

Funcionalidade: Solicitação de Código de Confirmação para Chave Pix
  Como um colaborador do sistema
  Eu quero solicitar o código de confirmação de segurança de uma chave Pix
  Para que o usuário possa validar a titularidade e dar continuidade ao cadastro da chave

  Cenário: Solicitação bem-sucedida de código de confirmação com dados válidos
    Dado que possuo dados válidos informando os campos "tipo" e "chave"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Chave/SolicitarCodigo" enviando os dados no corpo da requisição
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve retornar vazio
