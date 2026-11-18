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

    Cenário Pix Contestação


1) Criar

# language: pt

Funcionalidade: Registro de Contestação Pix
  Como um colaborador do sistema
  Eu quero registrar uma solicitação de contestação Pix
  Para que a transação contestada possa ser enviada para análise

  Cenário: Registro bem-sucedido de solicitação de contestação com dados válidos
    Dado que possuo os dados válidos para contestação contendo "endToEnd", "tipoSituacao" e "detalhesParaAnalise"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Contestacao/Criar" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta não deve retornar nenhum conteúdo

2) Listar

# language: pt

Funcionalidade: Listagem de Contestações Pix
  Como um colaborador do sistema
  Eu quero consultar as contestações Pix em um determinado período
  Para que eu possa acompanhar o histórico e os status das solicitações

  Cenário: Consulta bem-sucedida de contestações Pix informando período válido
    Dado que possuo um período válido com as datas de consulta "De" e "Ate"
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Contestacao/Listar" com os parâmetros informados via query
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "totalRegistros" e o array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "valor", "data", "status", "protocolo", "rebedorOriginal" e "idTransacao" com valores válidos

3) Cancelar

# language: pt

Funcionalidade: Cancelamento de Contestação Pix
  Como um colaborador do sistema
  Eu quero solicitar o cancelamento de uma contestação Pix
  Para que o processo de contestação seja descontinuado

  Cenário: Cancelamento bem-sucedido de contestação Pix com identificador válido
    Dado que possuo os dados válidos para cancelamento contendo a propriedade "idRecuperacao"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Contestacao/Cancelar" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta não deve retornar nenhum conteúdo
