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

    Cenários InvestimentoSuitability

1) Salvar

# language: pt
Funcionalidade: Salvamento do Questionário de Suitability
  Como um colaborador do sistema
  Eu quero salvar as respostas do questionário de suitability
  Para definir e obter o perfil de investimento do investidor

  Cenário: Salvamento bem-sucedido do questionário de suitability
    Dado que informo o campo "idQuestionario"
    E informo a lista "perguntas" contendo os campos "idQuestao" e "idOpcao"
    Quando faço uma requisição POST para o endpoint "/api/v1/Investimento/Suitability/Questionario/Salvar" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "nomePerfilInvestidor" e "descricaoPerfilInvestidor" com valores não nulos


2) Obter (Questionario)

# language: pt
Funcionalidade: Obtenção do Questionário de Suitability
  Como um colaborador do sistema
  Eu quero obter o questionário de suitability a ser respondido pelo cliente
  Para disponibilizar as perguntas e opções necessárias para a definição do perfil de investidor

  Cenário: Obtenção bem-sucedida do questionário de suitability
    Dado que desejo consultar o questionário de suitability vigente
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Suitability/Questionario/Obter"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "id", "descricao", "validadeDias", "tag", "dataInicioVigencia" e o array "perguntas"
    E cada elemento dentro de "perguntas" deve conter as chaves "id", "descritivo", "temDica", "idTipoPerguntaLayout", "idQuestionarioGrupo", "ordenacao" e o array "opcoes"
    E cada elemento dentro de "opcoes" deve conter as chaves "id", "idPergunta", "idQuestionarioPerguntaOpcao", "peso", "ordenacao", "temDica", "descritivo" e "descricao" com valores não nulos


3) Obter (perfil)

# language: pt
Funcionalidade: Obtenção do Perfil de Suitability
  Como um colaborador do sistema
  Eu quero obter o perfil de suitability de investimento do cliente
  Para verificar a classificação do investidor e o status de vigência do questionário

  Cenário: Obtenção bem-sucedida do perfil de suitability do cliente
    Dado que desejo consultar o perfil de suitability do cliente
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Suitability/Perfil/Obter"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "possuiPerfil", "idPerfilInvestidor", "perfilInvestidor", "descricao" e "suitabilityExpirado" com valores não nulos


