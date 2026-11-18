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


Cenário Pix QrCode

1) Gerar

# language: pt

Funcionalidade: Geração de QR Code PIX
  Como um cliente autenticado
  Eu quero gerar um QR Code com os dados de cobrança informados
  Para que eu possa receber pagamentos via PIX

  Cenário: Geração bem-sucedida de QR Code PIX com dados válidos
    Dado que sou um cliente autenticado e possuo uma chave PIX cadastrada
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/QrCode/Gerar"
    E informo no corpo da requisição os campos "valor", "mensagem", "chavePixFavorecido" e "tipoChaveFavorecido"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter os campos "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "qrCodeImagem", "pixCopiaCola", "valor", "mensagem", "nomeFavorecido", "chavePixFavorecido" e "tipoChaveFavorecido" com valores não nulos

2) Processar

# language: pt

Funcionalidade: Processamento de QR Code PIX
  Como um cliente autenticado
  Eu quero processar os dados de um QR Code PIX
  Para que eu possa obter as informações necessárias e prosseguir com o pagamento

  Cenário: Processamento bem-sucedido dos dados de um QR Code PIX válido
    Dado que sou um cliente autenticado e possuo o payload de um QR Code válido
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/QrCode/Processar" informando no corpo da requisição o campo "valorQrCode"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter os campos "Request-Id", "reqId", "mensagem" e "statusCode"
    E o objeto "item" deve conter as chaves "valor", "identificador", "mensagem", "nomeFavorecido", "chavePixFavorecido", "tipoChaveFavorecido", "tipoQrCode", "tipoPix", "referencia" e "modalidadeAgente" com valores não nulos
    E o objeto "item.banco" deve conter as chaves "codigo", "nome", "agencia", "conta" e "tipoConta" com valores não nulos
    E o objeto "item.dadosRecorrencia" deve conter as chaves "idRecorrencia", "jornada", "retentativa", "valorRecorrencia", "valorMinimo", "ispbRecebedor", "nomeRecebedor", "cnpjRecebedor", "documentoPagador", "nomePagador", "dataInicial", "dataFinal", "periodicidade", "contrato", "objetoPagamento", "prazoAutorizacao" e "proximoPagamento" com valores não nulos

