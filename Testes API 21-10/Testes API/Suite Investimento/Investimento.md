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

    Cenários Investimento

1) ObterRelatorio

# language: pt
Funcionalidade: Download de Relatório de Investimentos
  Como um cliente autenticado
  Eu quero realizar o download de um relatório dos meus investimentos em um período específico
  Para que eu possa consultar minhas posições e movimentações em um arquivo (PDF ou XLS)

Cenário: Solicitação bem-sucedida do relatório de investimentos
  Dado que sou um cliente autenticado no sistema
  E possuo um tipo de relatório e uma data de referência válidos
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/ObterRelatorio"
  E informo os parâmetros "tipoRelatorio" e "dataReferencia" na query
  Então o código de status da resposta deve ser 200 (Success)
  E o corpo da resposta deve ser uma string não vazia representando o conteúdo do arquivo

2) Detalhe

# language: pt
Funcionalidade: Obtenção de Detalhes de uma Operação de Investimento
  Como um cliente autenticado
  Eu quero consultar os detalhes de um produto específico da minha carteira de investimentos
  Para que eu possa analisar suas informações, como rentabilidade, vencimento e movimentações

Cenário: Consulta bem-sucedida dos detalhes de uma operação de investimento válida
  Dado que sou um cliente autenticado no sistema
  E possuo o número de uma operação de investimento válida
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Carteira/Operacao/Detalhe"
  E informo o número da operação como parâmetro "operacao" na query
  Então o código de status da resposta deve ser 200 (Success)
  E a resposta deve conter um objeto "item" com os detalhes da operação
  E o objeto "item" deve conter as chaves "id", "emissor", "valorLiquido", "rentabilidade", "dataVencimento" e "podeResgatar" com valores não nulos
  E o objeto "item" deve conter um array chamado "movimentacoes"
  E o objeto "item" deve conter um array chamado "eixosX"
  E o objeto "item" deve conter um array chamado "eixosY"

3) Carteira

# language: pt
Funcionalidade: Obtenção do Portfólio de Investimento do Cliente
  Como um cliente autenticado no sistema
  Eu quero consultar minha carteira de investimentos
  Para que eu possa visualizar meu portfólio e o saldo disponível para resgate

Cenário: Consulta bem-sucedida da carteira de investimentos
  Dado que sou um cliente autenticado no sistema
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Carteira"
  Então o código de status da resposta deve ser 200 (OK)
  E a resposta deve conter um objeto "item" com a chave "disponivelResgate"
  E o objeto "item" deve conter um array "produtos"
  E cada elemento dentro de "produtos" deve conter as chaves "id", "produto", "valor", "valorRendimento", "percentualAcumulado", "liquidez", "dataVencimento" e "podeResgatar" com valores não nulos

4) ObterPortifolio

# language: pt
Funcionalidade: Obtenção de Portfólio de Investimentos do Cliente
  Como um cliente autenticado no sistema
  Eu quero consultar o meu portfólio de investimentos
  Para que eu possa acompanhar todos os produtos investidos e o total de registros

Cenário: Consulta bem-sucedida do portfólio de investimentos
  Dado que sou um cliente autenticado no sistema
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/ObterPortifolio"
  Então o código de status da resposta deve ser 200 (OK)
  E a resposta deve conter a chave "totalRegistros" com valor não nulo
  E a resposta deve conter um array "itens"
  E cada elemento dentro de "itens" deve conter as chaves "id", "produto", "valor", "valorRendimento", "percentualAcumulado", "liquidez", "dataVencimento" e "podeResgatar" com valores não nulos

5) Resumo

# language: pt
Funcionalidade: Obtenção de Rendimentos de Investimentos
  Como um cliente autenticado no sistema
  Eu quero consultar os rendimentos dos meus investimentos por período
  Para que eu possa acompanhar os valores aplicados, rendimentos e valores em processamento

Esquema do Cenário: Solicitação bem-sucedida dos investimentos com períodos válidos
  Dado que sou um cliente autenticado no sistema
  E informo o período "<periodo>"
  Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/ObterInvestimentos" informando o "<periodo>" na query
  Então o código de status da resposta deve ser 200 (OK)
  E a resposta deve conter um objeto "item" com as chaves "possuiInvestimento", "dataInicial", "dataFinal", "totalAplicado", "rendimento" e "valorEmProcessamento" com valores não nulos
  E o objeto "item" deve conter um array "investimentos"
  E cada elemento dentro de "investimentos" deve conter as chaves "dataReferencia", "cdb", "cdbMensal", "lca", "lci", "lf", "outros", "valorAgregado", "rendimentoDia" e "rendimentoAcumulado" com valores não nulos

Exemplos:
  | periodo     |
  | TOTAL       |
  | MENSAL      |
  | TRIMESTRAL  |
  | SEMESTRAL   |
  | ANUAL       |
  | ANO_ATUAL   |

6) ObterInvestimentos

# language: pt
Funcionalidade: Obtenção de Rendimentos de Investimentos
  Como um cliente autenticado no sistema
  Eu quero consultar os rendimentos dos meus investimentos por período
  Para que eu possa acompanhar os valores aplicados e o rendimento diário

  Esquema do Cenário: Solicitação bem-sucedida dos investimentos com períodos válidos
    Dado que sou um cliente autenticado no sistema
    E informo o período "<periodo>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/ObterInvestimentos" com o período "<periodo>" na query
    Então o código de status da resposta deve ser 200 (OK)
    E o objeto "item" deve conter as chaves "possuiInvestimento", "dataInicial", "dataFinal", "totalAplicado", "rendimento", "cdb", "cdbMensal", "lca", "lci", "lfs", "outros" e "valorEmProcessamento" com valores não nulos
    E o objeto "item" deve conter um array "investimentos"
    E cada elemento dentro de "investimentos" deve conter as chaves "dataReferencia", "cdb", "cdbMensal", "lca", "lci", "lf", "outros", "valorAgregado", "rendimentoDia" e "rendimentoAcumulado" com valores não nulos

  Exemplos:
    | periodo     |
    | TOTAL       |
    | MENSAL      |
    | TRIMESTRAL  |
    | SEMESTRAL   |
    | ANUAL       |
    | ANO_ATUAL   |


