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

    Cenário Pix Automático

1) Agendamentos

# language: pt

Funcionalidade: Busca de Agendamentos de Cobranças no PIX Automático
  Como um colaborador do sistema
  Eu quero buscar os agendamentos de cobranças do PIX Automático
  Para consultar os detalhes e o status dos pagamentos programados

  Cenário: Busca bem-sucedida de agendamentos com parâmetros válidos
    Dado que possuo os parâmetros de consulta "PaginaAtual", "ItensPorPagina" e "IdRecorrencia" válidos
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Automatico/Agendamentos" com os parâmetros informados
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as chaves "periodicidade", "proximoPagamento", "recebedor", "pagador" e um array "agendamentos"
    E cada elemento dentro de "agendamentos" deve conter as chaves "idRecorrencia", "valor", "dataAgendamento", "nomeRecebedor" e "status"

2) Atualizar

# language: pt

Funcionalidade: Atualização de Recorrência de Pagamento no PIX Automático
  Como um colaborador do sistema
  Eu quero atualizar uma recorrência de pagamento no PIX Automático
  Para modificar suas configurações como valor máximo e notificações

  Cenário: Atualização bem-sucedida de recorrência com dados válidos
    Dado que possuo dados válidos para a atualização, incluindo "idRecorrencia", "valorMaximoPagador", "usoLimiteCredito" e "notificacoesAgendamento"
    Quando faço uma requisição PUT para o endpoint "/api/v1/Pix/Automatico/Recorrencia/Atualizar" com os dados informados no corpo da requisição
    Então o código de status da resposta deve ser 201 (Created)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as chaves "id", "valorMaximoPagador", "usoLimiteCredito" e "notificacoesAgendamento" com os valores atualizados

3) Cancelar

# language: pt

Funcionalidade: Cancelamento de Recorrência de Pagamento no PIX Automático
  Como um usuário do sistema
  Eu quero cancelar uma recorrência de pagamento no PIX Automático
  Para que eu possa interromper cobranças futuras programadas

Cenário: Cancelamento bem-sucedido de uma recorrência de PIX Automático
  Dado que possuo um "idrecorrencia" válido e um "motivoCancelamento"
  Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Automatico/Recorrencia/Cancelar" com os dados para cancelamento
  Então o código de status da resposta deve ser 201 (Created)
  E a resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "item" com valores não nulos
  E o valor da chave "statusCode" deve ser "Continue"

4) Aprovar

# language: pt
Funcionalidade: Aprovação de Recorrência no Pix Automático
  Como um colaborador do sistema
  Eu quero aprovar uma recorrência de pagamento no Pix Automático
  Para que as cobranças automáticas programadas sejam autorizadas e executadas conforme as condições estabelecidas

  Cenário: Aprovação bem-sucedida de recorrência no Pix Automático com dados válidos
    Dado que possuo os dados válidos para aprovação contendo "id", "dataInicial", "dataFinal", "periodicidade", "valor", "valorMinimoRecebedor", "valorMaximoPagador", "jornada", "contrato", "descricao" e "objetoPagamento"
    E possuo o objeto "recebedor" com as chaves "nome", "cnpj" e "codIspb"
    E possuo o objeto "devedor" com as chaves "nome" e "documento"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Automatico/Recorrencia/Aprovar" enviando o corpo da requisição
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "idRecorrencia", "objetoPagamento", "codigoCliente", "primeiroPagamento", "proximoPagamento", "prazoAutorizacao", "periodicidade", "valorMaximoDefinido" e "contrato" com valores não nulos
    E o objeto "recebedor" dentro de "item" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos
    E o objeto "devedor" dentro de "item" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos
    E o objeto "pagador" dentro de "item" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos


5) Recorrencia

# language: pt
Funcionalidade: Transferência Pix com Aprovação de Recorrência Automática
  Como um colaborador do sistema
  Eu quero realizar uma transferência Pix e aprovar uma recorrência de pagamentos automáticos futuros
  Para liquidar o pagamento atual e programar os débitos recorrentes acordados

  Cenário: Realização com sucesso de transferência Pix com aprovação de recorrência futura
    Dado que possuo os dados da transferência contendo "nomeFavorecido", "chave", "tipoChave", "documentoFavorecido", "valor", "formaPagamento", "data", "salvarContato", "endToEndId", "mensagem", "modalidadeAgente", "referencia" e "prestadorDoServicoDeSaque"
    E possuo o objeto "banco" preenchido com "codigo", "nome", "agencia", "conta" e "tipoConta"
    E possuo o objeto "recorrencia" com "id", "dataInicial", "dataFinal", "periodicidade", "valor", "valorMinimoRecebedor", "valorMaximoPagador", "jornada", "contrato", "descricao" e "objetoPagamento"
    E o objeto "recorrencia" contém os dados de "recebedor" ("nome", "cnpj", "codIspb") e "devedor" ("nome", "documento")
    E possuo o objeto "dadosSeguranca" com o "otp" preenchido
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Automatico/Recorrencia" enviando o corpo da requisição
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "totalRegistros", "paginalAtual" e "registrosPorPagina"
    E a lista "itens" não deve ser vazia
    E cada elemento de "itens" deve conter as chaves:
      | status              |
      | nomeFavorecido      |
      | valor               |
      | data                |
      | documentoFavorecido |
      | chaveFavorecido     |
      | bancoFavorecido     |
      | formaPagamento      |
      | mensagem            |
      | codigoOperacao      |
      | nome                |
      | documento           |
      | recorrenciaAprovada |
      | tipoPagamento       |
      | banco               |
    E cada item deve conter o objeto "recorrencia" com as chaves:
      | idRecorrencia       |
      | objetoPagamento     |
      | codigoCliente       |
      | primeiroPagamento   |
      | proximoPagamento    |
      | prazoAutorizacao    |
      | periodicidade       |
      | valorMaximoDefinido |
      | contrato            |
    E o objeto "recorrencia" do item deve conter os objetos "recebedor", "devedor" e "pagador" preenchidos com "nome", "documento" e "instituicao"


6) Recorrencias

# language: pt
Funcionalidade: Listagem de Recorrências do Pix Automático por Período
  Como um colaborador do sistema
  Eu quero consultar as recorrências cadastradas no Pix Automático utilizando filtros de paginação, período e intervalo de datas
  Para acompanhar os agendamentos e cobranças recorrentes de acordo com os critérios selecionados

  Esquema do Cenário: Listagem bem-sucedida de recorrências utilizando filtros completos
    Dado que possuo os parâmetros de paginação "PaginaAtual" como <paginaAtual> e "ItensPorPagina" como <itensPorPagina>
    E informo o filtro de intervalo de datas com "De" em "<de>" e "Ate" em "<ate>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Automatico/Recorrencias" informando os parâmetros de consulta com o período "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "totalRegistros", "paginalAtual" e "registrosPorPagina"
    E o corpo da resposta deve conter o array "itens"
    E cada elemento dentro de "itens" deve conter a chave "data" e o array "recorrencias"
    E cada elemento dentro de "recorrencias" deve conter as chaves "id", "data", "valor", "recebedor", "devedor" e "informacoes"
    E o objeto "recebedor" deve conter as chaves "nome", "cnpj" e "codIspb" com valores não nulos
    E o objeto "devedor" deve conter as chaves "nome" e "cpfCnpj" com valores não nulos
    E o objeto "informacoes" deve conter as chaves "objetoPagamento", "codigoCliente", "primeiroPagamento", "valorMaximo" e "periodicidade" com valores não nulos

    Exemplos:
      | paginaAtual | itensPorPagina | periodo    | de                   | ate                  |
      | 1           | 10             | MENSAL     | 2026-10-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 20             | BIMESTRAL  | 2026-09-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 50             | TRIMESTRAL | 2026-08-01T00:00:00Z | 2026-10-31T23:59:59Z |


7) Rejeitar

# language: pt
Funcionalidade: Rejeição de Autorização de Pagamento no PIX Automático
  Como um usuário do sistema
  Eu quero rejeitar uma autorização de pagamento no PIX Automático
  Para que eu possa impedir que uma cobrança específica seja efetuada

Cenário: Rejeição bem-sucedida de uma autorização de pagamento
  Dado que possuo um "idAutorizacao", um "idRecorrencia" e um "motivoRejeicao" válidos
  Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Automatico/Autorizacao/Rejeitar" com os dados da rejeição
  Então o código de status da resposta deve ser 200 (OK)
  E a resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e "item" com valores não nulos
  E o valor da chave "statusCode" deve ser "Continue"

8) Aprovar

# language: pt
Funcionalidade: Aprovação de Autorização de Pagamento no Pix Automático
  Como um colaborador do sistema
  Eu quero aprovar uma autorização de pagamento no Pix Automático
  Para confirmar as condições acordadas e permitir a efetivação das cobranças recorrentes

  Cenário: Aprovação bem-sucedida de autorização de pagamento no Pix Automático
    Dado que informo os campos de autorização "idAutorizacao", "idRecorrencia", "valorMaximoPagador", "objetoPagamento", "dataInicial", "dataExpiracaoAutorizacao" e "periodicidade"
    E informo o objeto "recebedor" com os campos "nome", "cnpj" e "codIspb"
    E informo o objeto "devedor" com os campos "nome" e "documento"
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Automatico/Autorizacao/Aprovar" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "idAutorizacao", "objetoPagamento", "codigoCliente", "primeiroPagamento", "proximoPagamento", "prazoAutorizacao", "periodicidade" e "valorMaximoDefinido"
    E o objeto "item" deve conter os objetos "recebedor", "devedor" e "pagador"
    E o objeto "recebedor" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos
    E o objeto "devedor" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos
    E o objeto "pagador" deve conter as chaves "nome", "documento" e "instituicao" com valores não nulos

9) Historico

# language: pt
Funcionalidade: Consulta do Histórico de Autorizações do Pix Automático
  Como um colaborador do sistema
  Eu quero consultar o histórico de autorizações no Pix Automático utilizando filtros de paginação, período e intervalo de datas
  Para acompanhar as autorizações cadastradas e seus respectivos detalhes de acordo com os critérios selecionados

  Esquema do Cenário: Consulta bem-sucedida do histórico de autorizações utilizando filtros completos
    Dado que possuo os parâmetros de paginação "PaginaAtual" como <paginaAtual> e "ItensPorPagina" como <itensPorPagina>
    E informo o filtro de intervalo de datas com "De" em "<de>" e "Ate" em "<ate>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Automatico/Autorizacoes/Historico" informando os parâmetros de consulta com o período "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "totalRegistros", "paginalAtual" e "registrosPorPagina"
    E o corpo da resposta deve conter o array "itens"
    E cada elemento dentro de "itens" deve conter a chave "data" e o array "autorizacoes"
    E cada elemento dentro de "autorizacoes" deve conter as chaves "id", "idRecorrencia", "status", "dataSolicitacao", "dataAutorizacao", "periodicidade", "recebedor", "devedor" e "informacoes"
    E o objeto "recebedor" deve conter as chaves "nome", "cnpj" e "codIspb" com valores não nulos
    E o objeto "devedor" deve conter as chaves "nome" e "cpfCnpj" com valores não nulos
    E o objeto "informacoes" deve conter as chaves "objetoPagamento", "codigoCliente", "primeiroPagamento", "prazoAutorizacao", "valorMaximo", "valorRecorrencia", "usoLimiteCredito" e "notificacoesAgendamento" com valores não nulos

    Exemplos:
      | paginaAtual | itensPorPagina | periodo    | de                   | ate                  |
      | 1           | 10             | MENSAL     | 2026-10-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 20             | BIMESTRAL  | 2026-09-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 50             | TRIMESTRAL | 2026-08-01T00:00:00Z | 2026-10-31T23:59:59Z |


10) Autorizações

# language: pt
Funcionalidade: Busca de Autorizações do Pix Automático
  Como um colaborador do sistema
  Eu quero consultar as autorizações ativas e pendentes no Pix Automático utilizando filtros de paginação, status, período e intervalo de datas
  Para acompanhar as autorizações cadastradas e seus respectivos detalhes de acordo com os critérios selecionados

  Esquema do Cenário: Consulta bem-sucedida de autorizações utilizando filtros completos
    Dado que possuo os parâmetros de paginação "PaginaAtual" como <paginaAtual> e "ItensPorPagina" como <itensPorPagina>
    E informo o filtro de intervalo de datas com "De" em "<de>" e "Ate" em "<ate>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Automatico/Autorizacoes" informando os parâmetros de consulta com o status "<status>" e o período "<periodo>"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode", "totalRegistros", "paginalAtual" e "registrosPorPagina"
    E o corpo da resposta deve conter o array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "id", "idRecorrencia", "status", "dataSolicitacao", "dataAutorizacao", "periodicidade", "recebedor", "devedor" e "informacoes"
    E o objeto "recebedor" deve conter as chaves "nome", "cnpj" e "codIspb" com valores não nulos
    E o objeto "devedor" deve conter as chaves "nome" e "cpfCnpj" com valores não nulos
    E o objeto "informacoes" deve conter as chaves "objetoPagamento", "codigoCliente", "primeiroPagamento", "prazoAutorizacao", "valorMaximo", "valorRecorrencia", "usoLimiteCredito" e "notificacoesAgendamento" com valores não nulos

    Exemplos:
      | paginaAtual | itensPorPagina | status   | periodo    | de                   | ate                  |
      | 1           | 10             | ATIVA    | MENSAL     | 2026-10-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 20             | PENDENTE | BIMESTRAL  | 2026-09-01T00:00:00Z | 2026-10-31T23:59:59Z |
      | 1           | 50             | ATIVA    | TRIMESTRAL | 2026-08-01T00:00:00Z | 2026-10-31T23:59:59Z |

  

