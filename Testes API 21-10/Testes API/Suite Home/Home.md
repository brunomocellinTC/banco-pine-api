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

    Cenários Home

1) Carteira (investimento)

# language: pt
Funcionalidade: Obtenção da Carteira de Investimentos do Cliente
  Como um cliente autenticado no sistema
  Eu quero consultar a minha carteira de investimentos
  Para que eu possa acompanhar todos os produtos investidos e o total de registros

  Cenário: Consulta bem-sucedida da carteira de investimentos
    Dado que sou um cliente autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/Investimento/Carteira"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter a chave "totalRegistros" com valor não nulo
    E a resposta deve conter um array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "id", "produto", "valor", "valorRendimento", "percentualAcumulado", "liquidez", "dataVencimento" e "podeResgatar" com valores não nulos


2) Histórico (Investimento)

# language: pt
Funcionalidade: Obtenção do Histórico de Investimentos para Gráfico
  Como um cliente autenticado no sistema
  Eu quero obter o histórico de investimentos por período
  Para que seja possível exibir os dados de rendimento em gráfico

  Esquema do Cenário: Consulta bem-sucedida do histórico de investimentos com períodos válidos
    Dado que sou um cliente autenticado no sistema
    E informo o período "<periodo>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/Investimento/Historico" com o período "<periodo>" na query
    Então o código de status da resposta deve ser 200 (OK)
    E o objeto "item" deve conter as chaves "possuiInvestimento", "dataInicial", "dataFinal" e "rendimento" com valores não nulos
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


3) Saldo (Investimento)

# language: pt
Funcionalidade: Obtenção de Saldo de Investimento
  Como um cliente autenticado no sistema
  Eu quero consultar o saldo dos meus investimentos
  Para que eu possa visualizar o valor aplicado e o valor em processamento

  Cenário: Consulta bem-sucedida do saldo de investimento
    Dado que sou um cliente autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/Investimento/Saldo"
    Então o código de status da resposta deve ser 200 (OK)
    E o objeto "item" deve conter as chaves "totalAplicado" e "valorEmProcessamento" com valores não nulos


4) ObterInvestimentos

# language: pt
Funcionalidade: Obtenção de Investimentos do Cliente
  Como um cliente autenticado no sistema
  Eu quero obter a consolidação e o histórico dos meus investimentos por período
  Para que eu possa acompanhar minha posição financeira e rendimentos

  Esquema do Cenário: Consulta bem-sucedida de investimentos com períodos válidos
    Dado que sou um cliente autenticado no sistema
    E informo o período "<periodo>"
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/ObterInvestimentos" com o período "<periodo>" na query
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


5) Obter (Funcionalidade)

# language: pt
Funcionalidade: Obtenção de Configurações do Aplicativo (Feature Toggle)
  Como um colaborador do sistema
  Eu quero obter as configurações de funcionalidades ativas no aplicativo
  Para que o aplicativo possa habilitar ou desabilitar recursos conforme as regras vigentes

  Cenário: Consulta bem-sucedida das configurações do aplicativo
    Dado que sou um usuário autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/Funcionalidade/Obter"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter a chave "totalRegistros" com valor não nulo
    E a resposta deve conter um array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "nome" e "ativo" com valores não nulos


6) Obter (Banner)

# language: pt
Funcionalidade: Obtenção de Banners da Home
  Como um cliente autenticado no sistema
  Eu quero obter a lista de banners da home
  Para que eu possa visualizar as comunicações e campanhas disponíveis para o meu perfil

  Cenário: Consulta bem-sucedida de banners da home
    Dado que sou um cliente autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Home/Banner/Obter"
    Então o código de status da resposta deve ser 200 (OK)
    E a resposta deve conter a chave "totalRegistros" com valor não nulo
    E a resposta deve conter um array "itens"
    E cada elemento dentro de "itens" deve conter as chaves "titulo", "descricao", "ativo", "destino" e "ordem" com valores não nulos

