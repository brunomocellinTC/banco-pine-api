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

    Cenários InvestimentoComprovante


1) Resgate

# language: pt
Funcionalidade: Obtenção de Comprovante de Resgate de Investimento
  Como um colaborador do sistema
  Eu quero consultar o comprovante de resgate informando o código da transação
  Para que seja possível visualizar os dados detalhados da operação, do cliente e do título

  Cenário: Solicitação bem-sucedida do comprovante de resgate com código de transação válido
    Dado que possuo um código de transação válido no parâmetro "codigoTransacao"
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Comprovante/Resgate" com o "codigoTransacao" informado
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item.cliente" deve conter as chaves "nome", "cpfCnpj", "agencia" e "conta" com valores não nulos
    E o objeto "item.operacao" deve conter as chaves "tipoOperacao", "dataOperacao", "numeroNota", "localCustodia", "emissor", "numeroAtivoCetip" e "cnpjEmissor" com valores não nulos
    E o objeto "item.titulo" deve conter as chaves "investimento", "vencimento", "rentabilidade", "dataInicio", "liquidez", "tipoTaxa", "quantidadeInicial", "puInicial", "valorInicial", "formaLiquidacao" e "observacoes" com valores não nulos
    E o objeto "item.detalhe" deve conter as chaves "quantidadeResgatada", "puAtual", "valorBrutoResgate", "irRetido", "iofRetido", "valorLiquidoResgate", "formaLiquidacao" e "observacoes" com valores não nulos


2) Aplicação

# language: pt
Funcionalidade: Obtenção de Comprovante de Aplicação de Investimento
  Como um colaborador do sistema
  Eu quero consultar o comprovante de aplicação informando o código da transação
  Para que seja possível visualizar os dados detalhados da aplicação, do cliente e do título

  Cenário: Solicitação bem-sucedida do comprovante de aplicação com código de transação válido
    Dado que possuo um código de transação válido no parâmetro "codigoTransacao"
    Quando faço uma requisição GET para o endpoint "/api/v1/Investimento/Comprovante/Aplicacao" com o "codigoTransacao" informado
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item.cliente" deve conter as chaves "nome", "cpfCnpj", "agencia" e "conta" com valores não nulos
    E o objeto "item.operacao" deve conter as chaves "tipoOperacao", "dataOperacao", "numeroNota", "localCustodia", "emissor", "numeroAtivoCetip" e "cnpjEmissor" com valores não nulos
    E o objeto "item.titulo" deve conter as chaves "investimento", "vencimento", "rentabilidade", "dataInicio", "liquidez", "tipoTaxa", "quantidadeInicial", "puInicial", "valorInicial", "formaLiquidacao" e "observacoes" com valores não nulos
