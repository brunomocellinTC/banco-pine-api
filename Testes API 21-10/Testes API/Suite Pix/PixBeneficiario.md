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

    Cenário Pix Beneficiario

1) Cadastrar

# language: pt
Funcionalidade: Cadastro de Beneficiário Pix
  Como um colaborador do sistema
  Eu quero solicitar o cadastramento de permissão de um beneficiário de chave Pix favorita
  Para permitir transferências Pix facilitadas para a conta cadastrada

  Cenário: Cadastro bem-sucedido de beneficiário Pix com dados válidos
    Dado que possuo os dados válidos de um beneficiário contendo "cpfCnpjFavorito" e "nomeFavorito"
    E possuo o objeto "contaFavorito" com "idFavorito", "chave" e "tipoChave"
    E possuo os dados de "banco" preenchidos com "codigo", "nome", "agencia", "conta" e "tipoConta"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Beneficiario/Cadastrar" enviando o corpo da requisição
    Então o código de status da resposta deve ser 202 (Accepted)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "item" com valores não nulos


2) Promover

# language: pt

Funcionalidade: Promoção de Permissão de Beneficiário Pix
  Como um colaborador do sistema
  Eu quero promover a permissão de um beneficiário de chave Pix favorita
  Para conceder permissões diferenciadas nas operações de Pix do usuário

  Cenário: Promoção bem-sucedida de beneficiário com dados de segurança válidos
    Dado que possuo um identificador "idFavoritoConta" válido
    E informo o objeto "dadosSeguranca" com o campo "otp" preenchido
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Beneficiario/Promover" com os dados informados no corpo da requisição
    Então o código de status da resposta deve ser 202 (Accepted)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "item"
    E o campo "item" deve conter um valor numérico não nulo

3) Verificar

# language: pt

Funcionalidade: Verificação de Beneficiário Pix
  Como um colaborador do sistema
  Eu quero verificar os dados de uma conta beneficiária
  Para identificar se possui a mesma titularidade e se já está cadastrada como beneficiário

  Cenário: Verificação bem-sucedida de beneficiário com dados válidos
    Dado que possuo dados de conta válidos informando os campos "documento", "agencia" e "conta"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Beneficiario/Verificar" enviando os dados no corpo da requisição
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as chaves "ehMesmaTitularidade" e "ehBeneficiario" com valores booleanos
