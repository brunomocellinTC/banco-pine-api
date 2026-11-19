/** Operações com efeito potencial. Somente executar com fixtures aprovadas. */
export const MUTATION_ROUTES = [
  {
    "route": "/api/v1/Autenticacao/Login",
    "method": "POST",
    "grupo": "Autenticacao",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Autenticacao.LoginInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Chat/Mensagem",
    "method": "POST",
    "grupo": "Chat",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Chat.ChatInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/AtualizarDadosPessoais",
    "method": "PUT",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.ContaAtualizarDadosPessoaisInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/AlterarStatus",
    "method": "POST",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.AlterarStatusInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/AtualizarEndereco",
    "method": "PUT",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Endereco.AtualizarEnderecoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/AtualizarDeclaracao",
    "method": "PUT",
    "grupo": "Conta",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Declaracao.AtualizarDeclaracaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/IncluirEndereco",
    "method": "POST",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Endereco.IncluirEnderecoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/Selecionar",
    "method": "POST",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.ContaVinculadaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/AlterarConta",
    "method": "PUT",
    "grupo": "Conta",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Autenticacao.AlterarContaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/Encerramento/Solicitar",
    "method": "POST",
    "grupo": "ContaEncerramento",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Input.SolicitarEncerramentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/Encerramento/Cancelar",
    "method": "POST",
    "grupo": "ContaEncerramento",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Input.CancelarEncerramentoContaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Conta/Perfil/Atualizar",
    "method": "PUT",
    "grupo": "ContaPerfil",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.ContaAtualizarDadosPessoaisInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Dispositivo/Token/Otp/Cadastrar",
    "method": "POST",
    "grupo": "Dispositivo",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Dispositivo.DispositivoCadastrarTokenOtpInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Dispositivo/Token/Firebase/Cadastrar",
    "method": "POST",
    "grupo": "Dispositivo",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Dispositivo.DispositivoCadastrarFirebaseTokenInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Dispositivo/Excluir",
    "method": "DELETE",
    "grupo": "Dispositivo",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Dispositivo.DispositivoExcluirInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Endereco/Atualizar",
    "method": "PUT",
    "grupo": "Endereco",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Endereco.AtualizarEnderecoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Investimento/Carteira/Resgate/Calcular",
    "method": "POST",
    "grupo": "InvestimentoCarteira",
    "status": [
      200,
      400,
      401,
      422
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Investimento.InvestimentoCalcularResgateInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Investimento/Carteira/Resgate",
    "method": "POST",
    "grupo": "InvestimentoCarteira",
    "status": [
      204,
      400,
      401,
      422
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Investimento.InvestimentoResgateInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Investimento/Produto/Comprar",
    "method": "POST",
    "grupo": "InvestimentoProduto",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Investimento.InvestimentoProdutoComprarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Investimento/Questionario/Salvar",
    "method": "POST",
    "grupo": "InvestimentoQuestionario",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": true,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Investimento.InvestimentoQuestionarioSalvarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Investimento/Suitability/Questionario/Salvar",
    "method": "POST",
    "grupo": "InvestimentoSuitability",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Investimento.InvestimentoQuestionarioSalvarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Notificacao/Lida",
    "method": "PUT",
    "grupo": "Notificacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Notificacao.NotificacaoMarcarLidaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Notificacao/Lidas",
    "method": "PUT",
    "grupo": "Notificacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "type": "array",
      "items": {
        "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Notificacao.NotificacaoMarcarLidaInput"
      }
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Documento/Validacao",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingValidarDocumentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Codigo/Solicitar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingEnviarCodigoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Codigo/Validar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingValidarCodigoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Endereco/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarEnderecoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Patrimonio/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarPatrimonioInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Renda/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarRendaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Profissao",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarProfissaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/EstadoCivil",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarEstadoCivilInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/DataNascimento",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDataNascimentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Genero",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarGeneroInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Senha/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarSenhaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/ResidenciaFiscal/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarResidenciaFiscalInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Liveness/Cadastrar",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarLivenessInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Documentos",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDocumentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Onboarding/Termos/Aceite",
    "method": "POST",
    "grupo": "Onboarding",
    "status": [
      200
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Onboarding.OnboardingAceiteTermosInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Agendamento/Cancelar",
    "method": "POST",
    "grupo": "PixAgendamento",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixCancelarAgendamentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Autorizacao/Aprovar",
    "method": "POST",
    "grupo": "PixAutomatico",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarAutorizacaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Autorizacao/Rejeitar",
    "method": "POST",
    "grupo": "PixAutomatico",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixRejeitarAutorizacaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Recorrencia",
    "method": "POST",
    "grupo": "PixAutomatico",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixTransferenciaRecorrenciaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Recorrencia/Aprovar",
    "method": "POST",
    "grupo": "PixAutomatico",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Recorrencia/Cancelar",
    "method": "POST",
    "grupo": "PixAutomatico",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixCancelarRecorrenciaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Automatico/Recorrencia/Atualizar",
    "method": "PUT",
    "grupo": "PixAutomatico",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAtualizarRecorrenciaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Beneficiario/Cadastrar",
    "method": "POST",
    "grupo": "PixBeneficiario",
    "status": [
      202,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioCadastrarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Beneficiario/Promover",
    "method": "POST",
    "grupo": "PixBeneficiario",
    "status": [
      202,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixFavorito.PixPromoverBeneficiarioInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Beneficiario/Verificar",
    "method": "POST",
    "grupo": "PixBeneficiario",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioVerificarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Chave/Excluir",
    "method": "DELETE",
    "grupo": "PixChave",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": null,
    "query": [
      "chave"
    ],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Chave/Criar",
    "method": "POST",
    "grupo": "PixChave",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixChave.PixCriarChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Chave/SolicitarCodigo",
    "method": "POST",
    "grupo": "PixChave",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixChave.PixEnviarCodigoConfirmacaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Contestacao/Criar",
    "method": "POST",
    "grupo": "PixConstestacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.RecuperacaoValor.PixCriarRecuperacaoValorInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Contestacao/Cancelar",
    "method": "POST",
    "grupo": "PixConstestacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.RecuperacaoValor.PixCancelarRecuperacaoValorInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Favorito/Deletar",
    "method": "DELETE",
    "grupo": "PixFavorito",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": null,
    "query": [
      "id"
    ],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Favorito/DeletarChave",
    "method": "DELETE",
    "grupo": "PixFavorito",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": null,
    "query": [
      "idContaFavorito"
    ],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Favorito/Criar",
    "method": "POST",
    "grupo": "PixFavorito",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixFavorito.PixCriarFavoritoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Favorito/AdicionarChave",
    "method": "POST",
    "grupo": "PixFavorito",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixFavorito.PixFavoritoAdicionarChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Limites/Atualizar",
    "method": "PUT",
    "grupo": "PixLimite",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.LimiteAtualizarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/QrCode/Gerar",
    "method": "POST",
    "grupo": "PixQrCode",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixRecebimento.PixGerarQrCodeRecebimentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/QrCode/Processar",
    "method": "POST",
    "grupo": "PixQrCode",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixChave.PixProcessarQrCodeInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Recorrencia/Cancelar",
    "method": "POST",
    "grupo": "PixRecorrencia",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Recorrencia.PixRecorrenciaCancelarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Cadastrar",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Cancelar",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixCancelarReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/ManterChave",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixManterChaveReivindicacaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Concluir",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConcluirReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Confirmar",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConfirmarReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Consultar",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConsultarReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Reivindicacao/Receber",
    "method": "POST",
    "grupo": "PixReivindicacao",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixReceberReivindicacaoChaveInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Transferencias/FazerTransferencia",
    "method": "POST",
    "grupo": "PixTransferencia",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixTransferencia.PixFazerTransferenciaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Pix/Transferencias/FazerDevolucao",
    "method": "POST",
    "grupo": "PixTransferencia",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Pix.PixTransferencia.PixFazerDevolucaoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/PJ/Aprovacao/Aprovar",
    "method": "POST",
    "grupo": "PjAprovacao",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.PJAprovacao.AprovarTransacaoLoteInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/PJ/Aprovacao/Reprovar",
    "method": "POST",
    "grupo": "PjAprovacao",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.PJAprovacao.ReprovarTransacaoLoteInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/PJ/GerenciarUsuario/Acesso",
    "method": "PATCH",
    "grupo": "PjGerenciarUsuario",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioAcessoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/PJ/GerenciarUsuario/Remover",
    "method": "DELETE",
    "grupo": "PjGerenciarUsuario",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioRemoverInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/PJ/GerenciarUsuario/Criar",
    "method": "POST",
    "grupo": "PjGerenciarUsuario",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioCriarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Senha/Codigo/Solicitar",
    "method": "POST",
    "grupo": "Senha",
    "status": [
      200,
      400,
      404
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Autenticacao.SolicitacaoCodigoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Senha/Redefinir",
    "method": "POST",
    "grupo": "Senha",
    "status": [
      200,
      400,
      404
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Autenticacao.RedefinirSenhaInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Ted/Agendamento",
    "method": "POST",
    "grupo": "TedAgendamento",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": null,
    "query": [
      "CodigoTransacao"
    ],
    "path": []
  },
  {
    "route": "/api/v1/Ted/Favorecido/Excluir",
    "method": "DELETE",
    "grupo": "TedFavorito",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Ted.Ted.TedExcluirFavorecidoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Ted/Favorecido/Criar",
    "method": "POST",
    "grupo": "TedFavorito",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Result.Ted.Ted.TedCriarFavorecidoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Ted/Limites/Atualizar",
    "method": "PUT",
    "grupo": "TedLimite",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Conta.LimiteAtualizarInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Ted/Transferencias",
    "method": "POST",
    "grupo": "TedTransferencia",
    "status": [
      200,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.Ted.TedTransferencia.FazerTransferenciaTedInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Unico/Onboarding/Envio",
    "method": "POST",
    "grupo": "Unico",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoOnboardingInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Unico/Documento/Envio",
    "method": "POST",
    "grupo": "Unico",
    "status": [
      201,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoEnvioDocumentoInput"
    },
    "query": [],
    "path": []
  },
  {
    "route": "/api/v1/Unico/Transacional",
    "method": "POST",
    "grupo": "Unico",
    "status": [
      204,
      400,
      401
    ],
    "deprecated": false,
    "bodySchema": {
      "$ref": "#/components/schemas/Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoTransacionalInput"
    },
    "query": [],
    "path": []
  }
] as const;
