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

    Cenários InvestimentoSimulação

1) ObterProdutos

# language: pt
Funcionalidade: Obtenção de Produtos para Simulação de Investimento
  Como um colaborador do sistema
  Eu quero obter a lista de produtos filtrados por valor, prazo e tipo de investimento
  Para consultar a estimativa de rentabilidade e compará-la com a poupança

  Cenário: Obtenção bem-sucedida da lista de produtos para simulação
    Dado que informo os parâmetros de consulta "Valor", "Prazo" e "Tipo" válidos
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Simulacao/ObterProdutos" com os parâmetros informados
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter o array "produtos" e o objeto "poupanca"
    E cada elemento dentro de "produtos" deve conter as chaves "id", "produto", "rentabilidade", "prazo", "percentual" e "valorEstimado" com valores não nulos
    E o objeto "poupanca" deve conter as chaves "valorSimulado", "valorFuturo" e "rentabilidade" com valores não nulos


2) ObterProduto

# language: pt
Funcionalidade: Obtenção de Detalhes de Produto para Simulação
  Como um colaborador do sistema
  Eu quero obter os detalhes de um produto específico de investimento filtrado por valor, prazo e produto
  Para consultar a estimativa de rentabilidade e as características detalhadas da aplicação

  Cenário: Obtenção bem-sucedida dos detalhes do produto para simulação
    Dado que informo os parâmetros de consulta "Valor", "Prazo" e "Produto" válidos
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Simulacao/ObterProduto" com os parâmetros informados
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "id", "produto", "percentual", "valorEstimado", "emissor", "rentabilidade", "prazo", "dataVencimento", "liquidez", "tributacao" e "garantidoFgc" com valores não nulos


3) ObterFiltro

# language: pt
Funcionalidade: Obtenção de Filtros para Simulação de Investimento
  Como um colaborador do sistema
  Eu quero obter a lista de prazos e produtos disponíveis para simulação
  Para que eu possa parametrizar as opções de filtros de simulação de investimentos

  Cenário: Solicitação bem-sucedida dos filtros para simulação sem parâmetros
    Dado que o serviço de investimentos está disponível
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Simulacao/ObterFiltro" sem parâmetros
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "itens" e "totalRegistros"
    E cada elemento dentro do array "itens" deve conter as chaves "id", "produto" e o array "prazos"
    E cada elemento dentro do array "prazos" deve conter as chaves "id", "nome", "diasCorrridosMinimo" e "diasCorridosMaximo" com valores não nulos


