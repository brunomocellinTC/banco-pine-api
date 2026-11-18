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

    Cenário Pix Agendamento

1) Cancelar

# language: pt

Funcionalidade: Cancelamento de Agendamento Pix
  Como um colaborador do sistema
  Eu quero cancelar um Pix agendado
  Para que a transferência programada não seja executada

  Cenário: Cancelamento bem-sucedido de agendamento Pix com identificador válido
    Dado que possuo um identificador "endToEnd" válido de um Pix agendado
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Agendamento/Cancelar" informando o "endToEnd" no corpo da requisição
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta não deve conter nenhum conteúdo
