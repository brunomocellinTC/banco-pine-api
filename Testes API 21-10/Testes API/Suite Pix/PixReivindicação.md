Cenário Pix Reivindicação

exemplo:


Funcionalidade: Obtenção de Comprovante de Transação Pix
  Como um cliente ou colaborador do sistema
  Eu quero obter o comprovante detalhado de uma transação Pix específica
  Para que eu possa validar e armazenar os detalhes completos da operação

  Esquema do Cenário: Consulta bem-sucedida do comprovante para diferentes tipos de transação
    Dado que possuo um "EndToEnd" válido para uma transação registrada do <"tipo">
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Transferencias/ObterComprovante" com o "EndToEnd" e o parâmetro "Tipo" igual a "<tipoComprovante>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter um objeto "item" com os detalhes do comprovante
    E o objeto "item" deve possuir as chaves principais como "nomeContraParte", "documentoContraParte", "valor", "data" e "codigoOperacao"

    Exemplos:
      | tipo            |
      | ORDEM_PAGAMENTO |
      | DEVOLUCAO       |
      | AGENDAMENTO     |
      | AUTOMATICO      |
      | SAQUE           |
      | TROCO           |


1) Cadastrar

# language: pt

Funcionalidade: Cadastro de Reivindicação de Chave PIX
  Como um usuário do sistema
  Eu quero cadastrar uma reivindicação de portabilidade de uma chave PIX
  Para que eu possa iniciar o processo de transferência da chave para minha conta

  Cenário: Cadastro bem-sucedido de reivindicação de chave PIX do tipo EMAIL
    Dado que possuo os dados válidos para a reivindicação de uma chave PIX ("tipo", "chave", "tipoChave")
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Cadastrar" com os dados da reivindicação
    Então o código de status da resposta deve ser 201 (Created)
    E a resposta deve conter as chaves "reqId" e "item" com valores não nulos
    E o objeto "item" deve conter as chaves "id", "statusSolicitacao", "prazoConfirmacao" e "nomeBanco"
    E o valor da chave "statusSolicitacao" dentro de "item" deve ser "ABERTA"


2) Cancelar

# language: pt

Funcionalidade: Cancelamento de Reivindicação de Chave PIX
  Como um usuário do sistema
  Eu quero cancelar uma reivindicação ou portabilidade de chave PIX existente
  Para que eu possa interromper o processo de transferência

  Cenário: Cancelamento bem-sucedido de uma reivindicação existente
    Dado que possuo o "id" de uma reivindicação de chave PIX elegível para cancelamento
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Cancelar" com o "id" da reivindicação
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve estar vazio


3) ManterChave

# language: pt

Funcionalidade: Manutenção de Chave PIX em Processo de Reivindicação
  Como um usuário do sistema
  Eu quero confirmar a manutenção de uma chave PIX que está sendo reivindicada
  Para que eu possa concluir o processo e manter a chave em minha posse

  Cenário: Manutenção de chave PIX bem-sucedida
    Dado que possuo os dados válidos para a manutenção de uma chave PIX ("id", "tipo", "codigo")
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/ManterChave" com os dados para manutenção
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve estar vazio


4) Concluir

# language: pt

Funcionalidade: Conclusão de Reivindicação de Chave PIX
  Como um usuário do sistema
  Eu quero concluir uma reivindicação ou portabilidade de chave PIX
  Para que eu possa finalizar o processo de transferência da chave para minha conta

  Cenário: Conclusão bem-sucedida de uma reivindicação de portabilidade
    Dado que possuo os dados válidos para a conclusão de uma reivindicação de chave PIX ("id", "tipo", "codigo")
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Concluir" com os dados para conclusão
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve estar vazio


5) Confirmar

# language: pt

Funcionalidade: Confirmação de Reivindicação de Chave PIX
  Como um usuário do sistema
  Eu quero confirmar uma reivindicação ou portabilidade de chave
  Para que o processo de transferência seja iniciado

  Cenário: Confirmação bem-sucedida de uma reivindicação existente
    Dado que possuo o "id" de uma reivindicação de chave PIX válida para confirmação
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Confirmar" com o "id" da reivindicação
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve estar vazio


6) Consultar

# language: pt

Funcionalidade: Consulta de Reivindicação de Chave PIX
  Como um usuário do sistema
  Eu quero consultar os detalhes de uma reivindicação de chave PIX
  Para que eu possa verificar seu status e informações

  Cenário: Consulta bem-sucedida de uma reivindicação com ID válido
    Dado que possuo o "id" de uma reivindicação de chave PIX válida
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Consultar" com o "id" da reivindicação
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter um objeto "item" com os detalhes da reivindicação
    E o objeto "item" deve conter as chaves "id", "status", "tipo", "chave" e "reclamante" com valores não nulos
    E o objeto "item" deve conter o sub-objeto "contaReclamante" com as chaves "participante", "numeroConta" e "tipoConta"


7) Receber

# language: pt

Funcionalidade: Recebimento de Reivindicação de Chave PIX
  Como um sistema receptor (participante)
  Eu quero receber uma notificação de reivindicação ou portabilidade de chave
  Para que eu possa processá-la e retornar os detalhes da reivindicação

  Cenário: Recebimento bem-sucedido de uma reivindicação com claimId válido
    Dado que possuo um "claimId" válido para uma nova reivindicação de chave PIX
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Reivindicacao/Receber" com o "claimId" informado
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter um objeto "item" com os detalhes da reivindicação recebida
    E o objeto "item" deve conter as chaves "id", "status", "tipo", "chave" e "reclamante" com valores não nulos
    E o objeto "item" deve conter o sub-objeto "contaReclamante" com as chaves "participante", "numeroConta" e "tipoConta"


8) Listar

# language: pt

Funcionalidade: Listagem de Reivindicações Pendentes de Chave PIX
  Como um usuário do sistema
  Eu quero listar todas as reivindicações pendentes
  Para que eu possa acompanhá-las e tomar as ações necessárias

  Cenário: Listagem bem-sucedida de reivindicações pendentes
    Dado que desejo consultar as reivindicações de chave PIX pendentes
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Reivindicacao/Listar"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter a chave "items" que é um array
    E cada objeto dentro do array "items" deve conter as chaves "id", "status", "tipo", "chave", "nomeSolicitante" e "fimPeriodoConclusao"
    E o corpo da resposta deve conter a chave "totalRegistros" com um valor numérico


