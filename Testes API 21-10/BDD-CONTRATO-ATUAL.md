# Matriz de rastreabilidade BDD — contrato OpenAPI

Fonte: `swagger.json`. **193 operações**, **108 GET**. Status citados são documentados, **não resultados executados**.

## Critérios de aceite

- **Dado** que existe uma massa válida aprovada para o recurso, **quando** a operação é invocada, **então** o status é o código 2xx documentado e o body respeita o schema.
- **Dado** um parâmetro tipado (número, UUID, data, enum) de tipo inválido, **quando** consultado, **então** deve retornar exatamente 400 **se este comportamento estiver implementado conforme contrato**.
- **Dado** uma operação protegida e ausência de credencial, **quando** consultada, **então** deve retornar exatamente 401 (testado em `Conta/ListarPaises`).
- Sem massa de sucesso, o cenário fica **skipped** e não conta como coberto.
- A mera existência de um 400/401 no Swagger não assegura que todo dado inválido dispare o código.

| Grupo | Método | Rota | Sucesso documentado | Erro 400 | Outro erro | Depreciado |
|---|---|---|---|---|---|---|
| Autenticacao | GET | /api/v1/Autenticacao/ObterTecladoVirtual | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Autenticacao | POST | /api/v1/Autenticacao/Login | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Chat | GET | /api/v1/Chat/ObterMensagens | 200 | N/A | N/A | Não |
| Chat | POST | /api/v1/Chat/Mensagem | 200 | N/A | N/A | Não |
| Comprovante | GET | /api/v1/Comprovante/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/Cliente | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ConsultaConta | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ConsultarCep/{cep} | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Conta | GET | /api/v1/Conta/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ListarComSessao | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Conta | GET | /api/v1/Conta/ListarContas | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ListarPaises | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ObterDados | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Conta | GET | /api/v1/Conta/ObterDadosPessoais | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Conta | GET | /api/v1/Conta/ObterDeclaracao | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ObterEndereco | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Conta | GET | /api/v1/Conta/ObterProfissoes | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | GET | /api/v1/Conta/ObterSaldo | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Conta | POST | /api/v1/Conta/AlterarStatus | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Conta | POST | /api/v1/Conta/IncluirEndereco | 200 | 400 com badBody controlado | 401 sem hash | Sim |
| Conta | POST | /api/v1/Conta/Selecionar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Conta | PUT | /api/v1/Conta/AlterarConta | 200 | 400 com badBody controlado | 401 sem hash | Sim |
| Conta | PUT | /api/v1/Conta/AtualizarDadosPessoais | 200 | 400 com badBody controlado | 401 sem hash | Sim |
| Conta | PUT | /api/v1/Conta/AtualizarDeclaracao | 204 | 400 com badBody controlado | 401 sem hash | Sim |
| Conta | PUT | /api/v1/Conta/AtualizarEndereco | 200 | 400 com badBody controlado | 401 sem hash | Sim |
| ContaEncerramento | GET | /api/v1/Conta/Encerramento/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| ContaEncerramento | POST | /api/v1/Conta/Encerramento/Cancelar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| ContaEncerramento | POST | /api/v1/Conta/Encerramento/Solicitar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| ContaInformeRendimento | GET | /api/v1/Conta/InformeRendimento/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| ContaInformeRendimento | GET | /api/v1/Conta/InformeRendimento/Obter | 200 | 400 malformado | 401 sem hash | Não |
| ContaPerfil | GET | /api/v1/Conta/Perfil/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| ContaPerfil | PUT | /api/v1/Conta/Perfil/Atualizar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Dispositivo | DELETE | /api/v1/Dispositivo/Excluir | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Dispositivo | GET | /api/v1/Dispositivo/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Dispositivo | POST | /api/v1/Dispositivo/Token/Firebase/Cadastrar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Dispositivo | POST | /api/v1/Dispositivo/Token/Otp/Cadastrar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Emprestimo | GET | /api/v1/Emprestimo/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Emprestimo | GET | /api/v1/Emprestimo/ObterDocumento | 200 | 400 apenas com caso validado | 404 sob massa controlada | Não |
| Emprestimo | GET | /api/v1/Emprestimo/ObterParcelas | 200 | 400 apenas com caso validado | N/A | Não |
| Emprestimo | GET | /api/v1/Emprestimo/ObterProdutos | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Endereco | GET | /api/v1/Endereco/Cep/{cep} | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Endereco | GET | /api/v1/Endereco/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Endereco | PUT | /api/v1/Endereco/Atualizar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Extrato | GET | /api/v1/Extrato/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Faq | GET | /api/v1/Faq/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Banner/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Emprestimo/Produtos/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Funcionalidade/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Investimento/Carteira | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Investimento/Historico | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/Investimento/Saldo | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/ObterInvestimentos | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Home | GET | /api/v1/Home/ObterOfertas | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Home | GET | /api/v1/Home/ObterPortifolio | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| Home | GET | /api/v1/Home/PJ/GerenciarUsuario/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InformeRendimento | GET | /api/v1/InformeRendimento/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| InformeRendimento | GET | /api/v1/InformeRendimento/Obter | 200 | 400 malformado | 401 sem hash | Sim |
| Investimento | GET | /api/v1/Investimento/Carteira | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Investimento | GET | /api/v1/Investimento/Carteira/Operacao/Detalhe | 200 | 400 malformado | 401 sem hash | Não |
| Investimento | GET | /api/v1/Investimento/DetalhePortifolio | 200 | 400 malformado | 401 sem hash | Sim |
| Investimento | GET | /api/v1/Investimento/ObterInvestimentos | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Investimento | GET | /api/v1/Investimento/ObterPortifolio | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Investimento | GET | /api/v1/Investimento/ObterRelatorio | 200 | 400 malformado | 401 sem hash | Não |
| Investimento | GET | /api/v1/Investimento/Resumo | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoCarteira | GET | /api/v1/Investimento/Carteira/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoCarteira | GET | /api/v1/Investimento/Carteira/ObterPeriodoResgate | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoCarteira | GET | /api/v1/Investimento/Carteira/Resgate/Status | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoCarteira | POST | /api/v1/Investimento/Carteira/Resgate | 204 | 400 com badBody controlado | 401 sem hash | Não |
| InvestimentoCarteira | POST | /api/v1/Investimento/Carteira/Resgate/Calcular | 200 | 400 com badBody controlado | 401 sem hash | Não |
| InvestimentoComprovante | GET | /api/v1/Investimento/Comprovante/Aplicacao | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoComprovante | GET | /api/v1/Investimento/Comprovante/Resgate | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoProduto | GET | /api/v1/Investimento/Produto/Comprar/Status | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoProduto | GET | /api/v1/Investimento/Produto/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoProduto | GET | /api/v1/Investimento/Produto/ObterDetalhe | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoProduto | POST | /api/v1/Investimento/Produto/Comprar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| InvestimentoQuestionario | GET | /api/v1/Investimento/Questionario/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| InvestimentoQuestionario | POST | /api/v1/Investimento/Questionario/Salvar | 200 | 400 com badBody controlado | 401 sem hash | Sim |
| InvestimentoSimulacao | GET | /api/v1/Investimento/Simulacao/ObterFiltro | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoSimulacao | GET | /api/v1/Investimento/Simulacao/ObterProduto | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoSimulacao | GET | /api/v1/Investimento/Simulacao/ObterProdutos | 200 | 400 malformado | 401 sem hash | Não |
| InvestimentoSuitability | GET | /api/v1/Investimento/Suitability/ObterPerfil | 200 | 400 apenas com caso validado | 401 sem hash | Sim |
| InvestimentoSuitability | GET | /api/v1/Investimento/Suitability/Perfil/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoSuitability | GET | /api/v1/Investimento/Suitability/Questionario/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| InvestimentoSuitability | POST | /api/v1/Investimento/Suitability/Questionario/Salvar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Notificacao | GET | /api/v1/Notificacao/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Notificacao | PUT | /api/v1/Notificacao/Lida | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Notificacao | PUT | /api/v1/Notificacao/Lidas | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Onboarding | GET | /api/v1/Onboarding/Endereco/Consultar | 200 | N/A | N/A | Não |
| Onboarding | GET | /api/v1/Onboarding/EstadoCivil | 200 | N/A | N/A | Não |
| Onboarding | GET | /api/v1/Onboarding/Genero | 200 | N/A | N/A | Não |
| Onboarding | GET | /api/v1/Onboarding/Profissoes | 200 | N/A | N/A | Não |
| Onboarding | GET | /api/v1/Onboarding/Termos | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Codigo/Solicitar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Codigo/Validar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/DataNascimento | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Documento/Validacao | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Documentos | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Endereco/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/EstadoCivil | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Genero | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Liveness/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Patrimonio/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Profissao | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Renda/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/ResidenciaFiscal/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Senha/Cadastrar | 200 | N/A | N/A | Não |
| Onboarding | POST | /api/v1/Onboarding/Termos/Aceite | 200 | N/A | N/A | Não |
| PixAgendamento | POST | /api/v1/Pix/Agendamento/Cancelar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | GET | /api/v1/Pix/Automatico/Agendamentos | 200 | 400 malformado | 401 sem hash | Não |
| PixAutomatico | GET | /api/v1/Pix/Automatico/Autorizacoes | 200 | 400 malformado | 401 sem hash | Não |
| PixAutomatico | GET | /api/v1/Pix/Automatico/Autorizacoes/Historico | 200 | 400 malformado | 401 sem hash | Não |
| PixAutomatico | GET | /api/v1/Pix/Automatico/Recorrencias | 200 | 400 malformado | 401 sem hash | Não |
| PixAutomatico | POST | /api/v1/Pix/Automatico/Autorizacao/Aprovar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | POST | /api/v1/Pix/Automatico/Autorizacao/Rejeitar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | POST | /api/v1/Pix/Automatico/Recorrencia | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | POST | /api/v1/Pix/Automatico/Recorrencia/Aprovar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | POST | /api/v1/Pix/Automatico/Recorrencia/Cancelar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixAutomatico | PUT | /api/v1/Pix/Automatico/Recorrencia/Atualizar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixBeneficiario | POST | /api/v1/Pix/Beneficiario/Cadastrar | 202 | 400 com badBody controlado | 401 sem hash | Não |
| PixBeneficiario | POST | /api/v1/Pix/Beneficiario/Promover | 202 | 400 com badBody controlado | 401 sem hash | Não |
| PixBeneficiario | POST | /api/v1/Pix/Beneficiario/Verificar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixChave | DELETE | /api/v1/Pix/Chave/Excluir | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixChave | GET | /api/v1/Pix/Chave/Obter | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixChave | GET | /api/v1/Pix/Chave/ObterLista | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixChave | GET | /api/v1/Pix/Chave/Possui | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixChave | POST | /api/v1/Pix/Chave/Criar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixChave | POST | /api/v1/Pix/Chave/SolicitarCodigo | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixConstestacao | GET | /api/v1/Pix/Contestacao/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixConstestacao | POST | /api/v1/Pix/Contestacao/Cancelar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixConstestacao | POST | /api/v1/Pix/Contestacao/Criar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixFavorito | DELETE | /api/v1/Pix/Favorito/Deletar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixFavorito | DELETE | /api/v1/Pix/Favorito/DeletarChave | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixFavorito | GET | /api/v1/Pix/Favorito/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixFavorito | POST | /api/v1/Pix/Favorito/AdicionarChave | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixFavorito | POST | /api/v1/Pix/Favorito/Criar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixLimite | GET | /api/v1/Pix/Limites/ObterPorProduto | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixLimite | GET | /api/v1/Pix/Limites/ObterProdutos | 204 | N/A | 401 sem hash | Não |
| PixLimite | PUT | /api/v1/Pix/Limites/Atualizar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixQrCode | POST | /api/v1/Pix/QrCode/Gerar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixQrCode | POST | /api/v1/Pix/QrCode/Processar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixRecorrencia | GET | /api/v1/Pix/Recorrencia/ListarEfetivasCanceladas | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixRecorrencia | GET | /api/v1/Pix/Recorrencia/ObterAgendamentos | 200 | 400 malformado | 401 sem hash | Não |
| PixRecorrencia | POST | /api/v1/Pix/Recorrencia/Cancelar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | GET | /api/v1/Pix/Reivindicacao/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Cadastrar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Cancelar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Concluir | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Confirmar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Consultar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/ManterChave | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PixReivindicacao | POST | /api/v1/Pix/Reivindicacao/Receber | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/Infracao/ObterMotivos | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ListarHistoricoAgendamento | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ObterComprovante | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ObterHistorico | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ObterInstituicoes | 200 | N/A | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ObterTipoContas | 200 | N/A | 401 sem hash | Não |
| PixTransferencia | GET | /api/v1/Pix/Transferencias/ObterTransacoesRecentes | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PixTransferencia | POST | /api/v1/Pix/Transferencias/FazerDevolucao | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PixTransferencia | POST | /api/v1/Pix/Transferencias/FazerTransferencia | 201 | 400 com badBody controlado | 401 sem hash | Não |
| PjAprovacao | GET | /api/v1/PJ/Aprovacao/Historico | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PjAprovacao | GET | /api/v1/PJ/Aprovacao/Pendentes | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PjAprovacao | GET | /api/v1/PJ/Aprovacao/Pendentes/Quantidade | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PjAprovacao | POST | /api/v1/PJ/Aprovacao/Aprovar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PjAprovacao | POST | /api/v1/PJ/Aprovacao/Reprovar | 200 | 400 com badBody controlado | 401 sem hash | Não |
| PjGerenciarUsuario | DELETE | /api/v1/PJ/GerenciarUsuario/Remover | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PjGerenciarUsuario | GET | /api/v1/PJ/GerenciarUsuario/Listar | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PjGerenciarUsuario | GET | /api/v1/PJ/GerenciarUsuario/Perfis | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| PjGerenciarUsuario | PATCH | /api/v1/PJ/GerenciarUsuario/Acesso | 204 | 400 com badBody controlado | 401 sem hash | Não |
| PjGerenciarUsuario | POST | /api/v1/PJ/GerenciarUsuario/Criar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Seguros | GET | /api/v1/Seguros/Obter | 200 | N/A | 401 sem hash | Não |
| Senha | POST | /api/v1/Senha/Codigo/Solicitar | 200 | 400 com badBody controlado | 404 sob massa controlada | Não |
| Senha | POST | /api/v1/Senha/Redefinir | 200 | 400 com badBody controlado | 404 sob massa controlada | Não |
| Ted | GET | /api/v1/Ted/Comprovante | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Ted | GET | /api/v1/Ted/Extratos | 200 | 400 malformado | 401 sem hash | Não |
| Ted | GET | /api/v1/Ted/ObterHistorico | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| Ted | GET | /api/v1/Ted/ObterInstituicoes | 200 | N/A | 401 sem hash | Não |
| Ted | GET | /api/v1/Ted/ObterTipoContas | 200 | N/A | 401 sem hash | Não |
| Ted | GET | /api/v1/Ted/ObterTransacoesRecentes | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| TedAgendamento | GET | /api/v1/Ted/Agendamento | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| TedAgendamento | POST | /api/v1/Ted/Agendamento | 200 | 400 com badBody controlado | 401 sem hash | Não |
| TedFavorito | DELETE | /api/v1/Ted/Favorecido/Excluir | 200 | 400 com badBody controlado | 401 sem hash | Não |
| TedFavorito | GET | /api/v1/Ted/Favorecido/Obter | 200 | N/A | 401 sem hash | Não |
| TedFavorito | POST | /api/v1/Ted/Favorecido/Criar | 201 | 400 com badBody controlado | 401 sem hash | Não |
| TedLimite | GET | /api/v1/Ted/Limites/ObterPorProduto | 200 | 400 apenas com caso validado | 401 sem hash | Não |
| TedLimite | GET | /api/v1/Ted/Limites/ObterProdutos | 204 | N/A | 401 sem hash | Não |
| TedLimite | PUT | /api/v1/Ted/Limites/Atualizar | 204 | 400 com badBody controlado | 401 sem hash | Não |
| TedTransferencia | POST | /api/v1/Ted/Transferencias | 200 | 400 com badBody controlado | 401 sem hash | Não |
| Unico | POST | /api/v1/Unico/Documento/Envio | 201 | 400 com badBody controlado | 401 sem hash | Não |
| Unico | POST | /api/v1/Unico/Onboarding/Envio | 201 | 400 com badBody controlado | 401 sem hash | Não |
| Unico | POST | /api/v1/Unico/Transacional | 204 | 400 com badBody controlado | 401 sem hash | Não |
| Versao | GET | /api/v1/Versao/Obter | 200 | N/A | N/A | Não |
