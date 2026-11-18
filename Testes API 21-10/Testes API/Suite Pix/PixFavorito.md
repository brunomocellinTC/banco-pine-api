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

    Cenário Pix Favorito

1) Deletar

# language: pt

Funcionalidade: Exclusão de Favorito Pix
  Como um colaborador do sistema
  Eu quero deletar um favorito cadastrado
  Para que ele seja removido da lista de favoritos do cliente

  Cenário: Exclusão bem-sucedida de favorito com ID válido
    Dado que possuo um ID válido de favorito
    Quando faço uma requisição DELETE para o endpoint "/api/v1/Pix/Favorito/Deletar" informando o parâmetro de query "id"
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio

2) DeletarChave

# language: pt

Funcionalidade: Exclusão de Chave Pix de Favorito
  Como um colaborador do sistema
  Eu quero deletar uma chave Pix vinculada a um favorito
  Para que ela seja removida do favorito específico do cliente

  Cenário: Exclusão bem-sucedida de chave Pix com ID de conta favorito válido
    Dado que possuo um ID válido de conta favorito
    Quando faço uma requisição DELETE para o endpoint "/api/v1/Pix/Favorito/DeletarChave" informando o parâmetro de query "idContaFavorito"
    Então o código de status da resposta deve ser 204 (No Content)
    E o corpo da resposta deve ser vazio

3) Listar Favoritos

# language: pt

Funcionalidade: Listagem de Favoritos Pix
  Como um colaborador do sistema
  Eu quero consultar a lista de favoritos cadastrados
  Para que eu possa visualizar as contas e chaves Pix salvas

  Cenário: Consulta bem-sucedida da listagem de favoritos Pix
    Dado que o usuário está autenticado no sistema
    Quando faço uma requisição GET para o endpoint "/api/v1/Pix/Favorito/Listar"
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter os campos "Request-Id", "reqId", "mensagem", "statusCode", "itens" e "totalRegistros"
    E o array "itens" deve conter uma lista de favoritos com as chaves "idFavorito", "documento", "nome", "dataCadastro", "ativo" e "chaves"
    E cada elemento dentro do array "chaves" deve conter as chaves "idFavoritoConta", "chave", "tipoChave", "beneficiario", "statusBeneficiario" e o objeto "banco"
    E o objeto "banco" deve conter as propriedades "codigo", "nome", "agencia", "conta" e "tipoConta"

4) Criar

# language: pt

Funcionalidade: Cadastro de Favorito Pix
  Como um colaborador do sistema
  Eu quero cadastrar um novo favorito Pix
  Para que ele seja adicionado à lista de favoritos do cliente

  Cenário: Criação bem-sucedida de favorito Pix com dados válidos
    Dado que possuo os dados válidos de um favorito contendo "documento", "nome" e "chaveFavorito"
    E a estrutura de "chaveFavorito" possui "chave", "tipo" e os "dadosConta" devidamente preenchidos
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Favorito/Criar" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 201 (Created)
    E o corpo da resposta deve conter as chaves "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as propriedades "documento", "nome", "ativo" e "dataCadastro" com valores não nulos

5) AdicionarChave

# language: pt

Funcionalidade: Adição de Chave Pix a Favorito
  Como um colaborador do sistema
  Eu quero adicionar uma nova chave Pix para um favorito específico
  Para que o cliente possa vincular múltiplas chaves a um contato favorito

  Cenário: Adição bem-sucedida de nova chave Pix com dados válidos
    Dado que possuo os dados válidos para inclusão de chave com os campos "nome", "documento", "chave", "tipo" e o objeto "banco"
    E o objeto "banco" contém as informações "codigo", "nome", "agencia", "conta" e "tipoConta" devidamente preenchidas
    Quando faço uma requisição POST para o endpoint "/api/v1/Pix/Favorito/AdicionarChave" com o corpo da requisição preenchido
    Então o código de status da resposta deve ser 200 (OK)
    E o corpo da resposta deve conter os campos "Request-Id", "reqId", "mensagem", "statusCode" e o objeto "item"
    E o objeto "item" deve conter as propriedades "documento", "nome", "ativo" e "dataCadastro" com valores não nulos
