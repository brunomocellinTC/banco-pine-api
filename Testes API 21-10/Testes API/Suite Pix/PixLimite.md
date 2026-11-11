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


Cenário Pix Limite:


1) ObterPorProduto

# language: pt

Funcionalidade: Obtenção de Limites do PIX por Produto
  Como um colaborador do sistema
  Eu quero consultar os limites de PIX configurados para um determinado produto
  Para que eu possa verificar as parametrizações de limites operacionais vigentes

  Cenário: Consulta bem-sucedida dos limites do PIX informando um idProduto válido
    Dado que possuo um identificador de produto ("idProduto") válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Limites/ObterPorProduto" com o parâmetro "idProduto" informado na query
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter os campos "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "periodo", "limitePeriodo", "limiteTransacao", "limitePessoaFisica" e "limitePessoaJuridica" com valores não nulos


2) Atualizar

# language: pt

Funcionalidade: Atualização de Limites do PIX para um Produto Específico
  Como um colaborador do sistema
  Eu quero atualizar os limites de PIX de um produto específico
  Para que os novos limites operacionais sejam aplicados com sucesso

  Cenário: Atualização bem-sucedida dos limites do PIX com parâmetros válidos
    Dado que possuo as informações válidas de limites para um produto
    Quando faço uma requisição PUT para o endpoint "/api/v1/Pix/Limites/Atualizar" informando no corpo da requisição as chaves "idProduto", "periodo", "limitePeriodo", "limiteTransacao", "limitePessoaFisica", "limitePessoaJuridica" e "tipoAtualizacao"
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio


3) ObterProdutos

# language: pt

Funcionalidade: Obtenção de Produtos Pix
  Como um colaborador do sistema
  Eu quero solicitar a listagem de produtos Pix
  Para que eu possa consultar os produtos disponíveis no sistema

  Cenário: Solicitação bem-sucedida de produtos Pix sem parâmetros
    Dado que não há necessidade de envio de parâmetros
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Limites/ObterProdutos"
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio
