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

    Cenários InvestimentoProduto

1) Comprar

# language: pt
Funcionalidade: Aquisição de Produto de Investimento
  Como um cliente autenticado
  Eu quero realizar a compra de um produto de investimento
  Para que eu possa aplicar meu dinheiro conforme a simulação desejada

Cenário: Compra bem-sucedida de um produto de investimento
  Dado que eu sou um cliente autenticado e decidi comprar um produto de investimento
  E que possuo o ID do produto, o valor da aplicação e um OTP válido
  E que eu aceitei o termo de adesão e confirmei a aplicação
  Quando eu faço uma requisição POST para o endpoint "/api/v1/Investimento/Produto/Comprar" com os dados da compra
  Então o código de status da resposta deve ser 204 (No Content)


2) ObterDetalhe

# language: pt
Funcionalidade: Obtenção de Detalhes de Produto de Investimento
  Como um colaborador do sistema
  Eu quero consultar os detalhes de um produto de investimento informando seu identificador
  Para visualizar as características, prazos e condições para aplicação

  Cenário: Solicitação bem-sucedida dos detalhes do produto com identificador válido
    Dado que possuo um identificador de produto válido no parâmetro "idProduto"
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Produto/ObterDetalhe" com o "idProduto" informado
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "id", "nomeEmissor", "produto", "valorMinimo", "prazo", "dataVencimento", "rentabilidade", "horarioLimite", "tributacao", "descricaoLiquidez", "garantidoFGC", "siglaProduto", "dataInicio", "descricaoPerfil", "prazoId" e "podeAplicar" com valores não nulos


3) Obter

# language: pt
Funcionalidade: Obtenção de Produtos de Investimento do Usuário
  Como um colaborador do sistema
  Eu quero consultar a lista de produtos de investimento disponíveis para o usuário
  Para que os produtos sejam exibidos agrupados por categoria

  Cenário: Solicitação bem-sucedida da lista de produtos de investimento sem parâmetros
    Dado que o serviço de investimentos está disponível
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Produto/Obter" sem parâmetros
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "itens"
    E cada elemento dentro do array "itens" deve conter as chaves "grupo" e o array "produtos"
    E cada elemento dentro do array "produtos" deve conter as chaves "id", "produto", "nomeEmissor", "rentabilidade", "dataVencimento", "destaque", "valorMinimo", "prazo", "descricaoLiquidez", "dataInicio" e "nomeProduto" com valores não nulos
