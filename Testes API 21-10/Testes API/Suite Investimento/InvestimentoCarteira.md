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

    Cenários InvestimentoCarteira

1) Resgate

# language: pt
Funcionalidade: Realizar Resgate de Investimento
  Como um cliente do sistema
  Eu quero solicitar o resgate de um produto de investimento
  Para que eu possa liquidar a operação de forma total ou parcial

Cenário: Solicitação de resgate de investimento bem-sucedida
  Dado que possuo os dados válidos de uma operação de investimento para resgate
  Quando faço uma requisição POST para o endpoint "/api/v1/Investimento/Carteira/Resgate"
  E envio no corpo da requisição o "idOperacao", "valor", "resgateTotal", "prosseguirResgate" e os "dadosSeguranca" com um "otp"
  Então o código de status da resposta deve ser 204 (No Content)


2) Calcular

# language: pt
Funcionalidade: Cálculo de Resgate Antecipado de Investimento
  Como um cliente do sistema
  Eu quero solicitar o cálculo prévio de um resgate de investimento
  Para que eu possa visualizar os valores e impostos incidentes antes de confirmar a operação

Cenário: Solicitação bem-sucedida do cálculo de resgate
  Dado que possuo os dados de uma operação válida para o cálculo de resgate
  Quando faço uma requisição POST para o endpoint "/api/v1/Investimento/Carteira/Resgate/Calcular"
  E envio no corpo da requisição os campos "idOperacao", "valor" e "resgateTotal"
  Então o código de status da resposta deve ser 200 (Success)
  E a resposta deve conter um objeto "item" com os resultados do cálculo
  E o objeto "item" deve conter as chaves "valorBruto", "valorLiquido", "valorIr", "valorIof", "aliquotaIr" e "aliquotaIof" com valores não nulos


3) ObterPeriodoResgate

# language: pt
Funcionalidade: Obtenção de Período de Resgate de Investimento
  Como um cliente do sistema
  Eu quero consultar o período em que um produto de investimento pode ser resgatado
  Para que eu possa tomar a decisão de resgate com base nas informações disponíveis

Cenário: Solicitação bem-sucedida do período de resgate para uma operação válida
  Dado que possuo o número de uma operação de investimento válida
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Carteira/ObterPeriodoResgate"
  E informo o número da operação como parâmetro "operacao" na query
  Então o código de status da resposta deve ser 200 (Success)
  E a resposta deve conter um objeto "item" com os detalhes do período
  E o objeto "item" deve conter um array "periodos"
  E cada elemento dentro de "periodos" deve conter as chaves "dataInicio", "dataFim", "descricao" e "taxa" com valores não nulos


4) Obter

# language: pt
Funcionalidade: Obtenção da Carteira de Investimentos do Usuário Logado
  Como um colaborador do sistema
  Eu quero consultar os dados consolidados da carteira do usuário logado
  Para que seja possível visualizar o saldo total e o detalhamento por produto

  Cenário: Solicitação bem-sucedida da carteira de investimentos sem parâmetros
    Dado que o usuário está devidamente autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Carteira/Obter" sem parâmetros
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter o campo "valorTotal" e a lista "itens"
    E cada elemento dentro da lista "itens" deve conter as chaves "produto", "percentual", "valor", "sigla" e "idProduto" com valores não nulos
