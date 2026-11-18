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


1) ObterProdutos

# language: pt
Funcionalidade: Obtenção de Produtos TED
  Como um colaborador do sistema
  Eu quero obter produtos TED
  Para consultar os produtos disponíveis para operações de TED

  Cenário: Consulta de produtos TED sem conteúdo retornado
    Dado que não informo nenhum parâmetro na requisição
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Limites/ObterProdutos"
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio


2) Atualizar

# language: pt
Funcionalidade: Atualização de Limites do TED
  Como um colaborador do sistema
  Eu quero atualizar limites do TED para um produto específico
  Para ajustar os limites operacionais conforme necessário

  Cenário: Atualização bem-sucedida dos limites do TED
    Dado que possuo os dados necessários para a alteração de limites
    Quando faço uma requisição PUT para o endpoint "/api/v1/Ted/Limites/Atualizar" com o seguinte corpo:
      """json
      {
        "idProduto": "string",
        "periodo": "DIURNO",
        "limitePeriodo": 0,
        "limiteTransacao": 0,
        "limitePessoaFisica": 0,
        "limitePessoaJuridica": 0,
        "tipoAtualizacao": "AUMENTAR"
      }
      """
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio


3) ObterPorProduto

# language: pt
Funcionalidade: Obtenção de Limites do TED por Produto
  Como um colaborador do sistema
  Eu quero obter os limites do TED de acordo com a gestão selecionada
  Para consultar as configurações e limites atribuídos a um produto específico

  Cenário: Consulta bem-sucedida dos limites do TED por produto
    Dado que possuo um "idProduto" válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Ted/Limites/ObterPorProduto" com o parâmetro de consulta "idProduto"
    Então o código de status da resposta deve ser 200 (OK)


