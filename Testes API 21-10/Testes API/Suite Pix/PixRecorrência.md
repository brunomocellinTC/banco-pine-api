Pix Recorrência

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



1) ObterAgendamentos

# language: pt

Funcionalidade: Obtenção de Agendamentos de PIX por Recorrência
  Como um usuário do sistema
  Eu quero obter os agendamentos de PIX associados a uma recorrência específica
  Para que eu possa visualizar e gerenciar os pagamentos agendados

  Cenário: Consulta bem-sucedida de agendamentos para uma recorrência válida
    Dado que possuo um ID de recorrência válido
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Recorrencia/ObterAgendamentos" informando o ID da recorrência
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter um array "itens"
    E cada objeto dentro do array "itens" deve conter as chaves "agendamentoId", "endToEnd", "recorrenciaId", "documento", "agencia", "conta", "chavePixFavorecido", "tipoChave", "nomeFavorecido", "documentoFavorecido", "codIspbFavorecido", "nomeBancoFavorecido", "agenciaFavorecido", "contaFavorecido", "valor", "dataRegistro", "dataAgendamento", "dataCancelamento", "dataInicial", "dataFinal", "transacaoId", "status", "periodicidade" e "campoLivre"
    E o corpo da resposta deve conter a chave "totalRegistros" com um valor total de itens


2) ListarEfetivasCanceladas

# language: pt

Funcionalidade: Listagem de Recorrências Efetivas e Canceladas do PIX
  Como um cliente autenticado
  Eu quero consultar as minhas recorrências de PIX efetivas e canceladas
  Para que eu possa gerenciar e acompanhar o histórico de recorrências realizadas

  Esquema do Cenário: Consulta bem-sucedida do histórico de recorrências com filtros de período e intervalo de datas
    Dado que sou um cliente autenticado e possuo recorrências cadastradas no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Recorrencia/ListarEfetivasCanceladas" informando o parâmetro "Periodo" igual a "<periodo>" e as datas nos parâmetros "De" e "Ate"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter uma lista "itens" e o campo "totalRegistros"
    E se a lista "itens" não estiver vazia, cada item deve conter as chaves "id", "nomeFavorecido", "valor", "periodicidade", "dataInicio", "dataFim", "nomeBanco" e "status"

    Exemplos:
      | periodo    |
      | MENSAL     |
      | BIMESTRAL  |
      | TRIMESTRAL |

3) Cancelar

# language: pt

Funcionalidade: Cancelamento de Recorrência do PIX
  Como um cliente autenticado
  Eu quero solicitar o cancelamento de uma recorrência do PIX
  Para que as próximas transações programadas não sejam executadas

  Cenário: Cancelamento bem-sucedido de uma recorrência ativa do PIX
    Dado que sou um cliente autenticado e possuo uma recorrência ativa cadastrada
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Recorrencia/Cancelar" informando no corpo da requisição o "id" da recorrência
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio


