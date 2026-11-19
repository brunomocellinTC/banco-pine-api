/** Gerado a partir de swagger.json. Não editar manualmente. */
export interface OpenApiSchemaMap {
  "Microsoft.AspNetCore.Mvc.ProblemDetails": {
    "type"?: string | null;
    "title"?: string | null;
    "status"?: number | null;
    "detail"?: string | null;
    "instance"?: string | null;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Compartilhados.TipoContaDto, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.TipoContaDto"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Chat.ChatHistoricoAgrupadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatHistoricoAgrupadoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Comprovante.ObterListaComprovantesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Comprovante.ObterListaComprovantesResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.EstadoCivilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.EstadoCivilResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.GeneroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.GeneroResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ListarContasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ListarContasResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ListarPaisesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ListarPaisesResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ProfissaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ProfissaoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoParcelasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoParcelasResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimosEProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimosEProdutosResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Extrato.ExtratoDiaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Extrato.ExtratoDiaResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Faq.FaqResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Faq.FaqResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Funcionalidade.FuncionalidadeResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Funcionalidade.FuncionalidadeResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Home.HomeObterOfertasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Home.HomeObterOfertasResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.InformeRendimento.InformeRendimentoPorAnoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.InformeRendimento.InformeRendimentoPorAnoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.InformeRendimento.PeriodoInformeResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.InformeRendimento.PeriodoInformeResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterProdutosInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterProdutosInvestResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoInvestResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Notificacao.NotificacaoAgrupadaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Notificacao.NotificacaoAgrupadaResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJAprovacao.SolicitacaoAprovacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.SolicitacaoAprovacaoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJAprovacao.TransacaoExecutadaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.TransacaoExecutadaResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioListarResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioPerfilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioPerfilResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixListaChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixChave.PixListaChaveResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixFavorito.PixListarFavoritosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixFavorito.PixListarFavoritosResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterHistoricoPixResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterHistoricoPixResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterTransacoesRecentesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterTransacoesRecentesResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixInstituicoesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixInstituicoesResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixListarHistoricoAgendamentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixListarHistoricoAgendamentoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixMotivoInfracaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixMotivoInfracaoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaEfetivaCanceladaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaEfetivaCanceladaResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.Recorrencia.PixRecorrenciaAgendamentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Recorrencia.PixRecorrenciaAgendamentoResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.RecuperacaoValor.PixRecuperacaoValorResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.RecuperacaoValor.PixRecuperacaoValorResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoListarResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterTedExtratoFiltroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.ObterTedExtratoFiltroResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterTransacoesRecentesTedResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.ObterTransacoesRecentesTedResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedListarFavorecidosFiltroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedListarFavorecidosFiltroResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedTipoContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedTipoContaResult"]> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[System.Collections.Generic.IEnumerable`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult"]>> | null;
    "totalRegistros"?: number;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Autenticacao.AlterarContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Autenticacao.AlterarContaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Autenticacao.LoginResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Autenticacao.LoginResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Chat.ChatMensagemResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatMensagemResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ConsultaContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ConsultaContaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaLimiteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaLimiteResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaObterDadosPessoaisResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaObterDadosPessoaisResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaObterResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ListarContasSessaoPjPfResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ListarContasSessaoPjPfResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ObterDadosClienteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ObterDadosClienteResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ObterSaldoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ObterSaldoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Declaracao.ConsultarDeclaracaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Declaracao.ConsultarDeclaracaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Dispositivo.DispositivoListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Dispositivo.DispositivoListarResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterTokenResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterTokenResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.AtualizarEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Endereco.AtualizarEnderecoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarCepResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Endereco.ConsultarCepResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Endereco.ConsultarEnderecoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.IncluirEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Endereco.IncluirEnderecoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Home.HomeInvestimentoHistoricoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Home.HomeInvestimentoHistoricoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Home.HomeInvestimentoSaldoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Home.HomeInvestimentoSaldoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterDetalheProdutoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterDetalheProdutoInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestCalcularResgateResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestCalcularResgateResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodoResgateResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodoResgateResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.ObterCarteiraInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.ObterCarteiraInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.DetalhePortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.DetalhePortifolioInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteAplicacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteAplicacaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteResgateResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteResgateResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoObterPerfilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoObterPerfilResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioSalvarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioSalvarResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoConsolidadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoConsolidadoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoSimulacaoInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoInvestResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Onboarding.OnboardingObterEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Onboarding.OnboardingObterEnderecoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Onboarding.OnboardingObterTermosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Onboarding.OnboardingObterTermosResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Onboarding.OnboardingValidarDocumentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Onboarding.OnboardingValidarDocumentoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.PJAprovacao.QuantidadeAprovacoesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.QuantidadeAprovacoesResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.Beneficiario.PixBeneficiarioVerificarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Beneficiario.PixBeneficiarioVerificarResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarAutorizacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarAutorizacaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarRecorrenciaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarRecorrenciaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAtualizarRecorrenciaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAtualizarRecorrenciaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixChaveInfoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixChave.PixChaveInfoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixCriarChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixChave.PixCriarChaveResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixPossuiChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixChave.PixPossuiChaveResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixFavorito.PixCriarFavoritoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixFavorito.PixCriarFavoritoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixFavorito.PixFavoritoAdicionarChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixFavorito.PixFavoritoAdicionarChaveResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixQrCode.PixProcessarQrCodeResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixQrCode.PixProcessarQrCodeResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixRecebimento.PixGerarQrCodeRecebimentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixRecebimento.PixGerarQrCodeRecebimentoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterComprovanteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterComprovanteResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerDevolucaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerDevolucaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerTransferenciaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerTransferenciaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoChaveResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicaoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Seguros.SegurosObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Seguros.SegurosObterResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.TecladoVirtual.ObterTecladoVirtualResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.TecladoVirtual.ObterTecladoVirtualResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterComprovanteTedResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.ObterComprovanteTedResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Ted.TedAgendamento.ListarTedAgendadaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedAgendamento.ListarTedAgendadaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Ted.TedTransferencia.FazerTransferenciaTedResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedTransferencia.FazerTransferenciaTedResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Unico.UnicoCriarProcessoOnboardingResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Unico.UnicoCriarProcessoOnboardingResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Unico.UnicoProcessoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Unico.UnicoProcessoResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Versao.VersaoObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Versao.VersaoObterResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Result.ObterSolicitacaoEncerramentoContaResult, Pine.IBPF.Services, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: OpenApiSchemaMap["Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Result.ObterSolicitacaoEncerramentoContaResult"];
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[System.Boolean, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: boolean;
  };
  "Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[System.Int32, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "item"?: number;
  };
  "Pine.IBPF.Domain.Compartilhados.Conta.EstadoCivilEnum": "SOLTEIRO" | "CASADO" | "DIVORCIADO" | "VIUVO" | "ESTAVEL" | "SEPARADO" | "OUTROS";
  "Pine.IBPF.Domain.Compartilhados.Conta.SexoEnum": "NAO_INFORMADO" | "FEMININO" | "MASCULINO";
  "Pine.IBPF.Domain.Compartilhados.DadosBancariosDto": {
    "codigo"?: string | null;
    "nome"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "tipoConta"?: string | null;
  };
  "Pine.IBPF.Domain.Compartilhados.Dispositivo.DispositivoStatusEnum": "ATIVO" | "INATIVO" | "BLOQUEADO" | "CANCELADO" | "EXCLUIDO";
  "Pine.IBPF.Domain.Compartilhados.Enum.CodigoVerificacaoEnum": "EMAIL" | "SMS";
  "Pine.IBPF.Domain.Compartilhados.Enum.ContaStatusAppEnum": "ATIVA" | "BLOQUEADO_DEBITO_CREDITO" | "BLOQUEADO_CREDITO" | "BLOQUEADA_JUDICIALMENTE" | "BLOQUEADO_DEBITO" | "BLOQUEIO_PREVENCAO_FRAUDE" | "BLOQUEIO_POR_INATIVIDADE" | "ENCERRADA" | "PREJUIZO" | "PARALISADA" | "DESCONHECIDO";
  "Pine.IBPF.Domain.Compartilhados.Enum.OnboardingTipoDocumentoEnum": "RG" | "CNH" | "RG_VERSO" | "RESIDENCIA";
  "Pine.IBPF.Domain.Compartilhados.Enum.PeriodoEnum": "DIURNO" | "NOTURNO" | "INTEGRAL";
  "Pine.IBPF.Domain.Compartilhados.Enum.UnicoTipoDocumentoEnum": "RG" | "CNH";
  "Pine.IBPF.Domain.Compartilhados.Enum.VisaoInvestimentoEnum": "TOTAL" | "MENSAL" | "TRIMESTRAL" | "SEMESTRAL" | "ANUAL" | "ANO_ATUAL";
  "Pine.IBPF.Domain.Compartilhados.Investimento.QuestionarioPerguntas": {
    "idQuestao"?: number;
    "idOpcao"?: number;
  };
  "Pine.IBPF.Domain.Compartilhados.Investimento.TipoPerguntaEnum": "BARRA_SELECAO" | "RADIO_HORIZONTAL" | "RADIO_VERTICAL";
  "Pine.IBPF.Domain.Compartilhados.Pix.OrigemPixEnum": "ORDEM_PAGAMENTO" | "QR_CODE_DINAMICO" | "QR_CODE_ESTATICO" | "AGENDAMENTO_QR_CODE_DINAMICO" | "AGENDAMENTO_QR_CODE_ESTATICO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixAutomaticoStatucCobrancaEnum": "EFETIVADO" | "PENDENTE";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixAutomaticoStatusAutorizacaoEnum": "ATIVA" | "PENDENTE" | "REJEITADA" | "EXPIRADA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixAutomaticoStatusBuscarAutorizacaoEnum": "ATIVA" | "PENDENTE";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixBeneficiarioStatusEnum": "NAO_BENEFICIARIO" | "EM_ANALISE" | "BENEFICIARIO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixBuscarAutorizacaoPeriodoEnum": "MENSAL" | "BIMESTRAL" | "TRIMESTRAL";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixChaveFavoritoDto": {
    "chave"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "dadosConta"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
  };
  "Pine.IBPF.Domain.Compartilhados.Pix.PixFormaPagamentoEnum": "CREDITO" | "SALDO_CONTA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixNaturezaEnum": "CREDITO" | "DEBITO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum": "SEMANAL" | "QUINZENAL" | "MENSAL";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixReivindicacaoStatusEnum": "ABERTA" | "CONFIRMADA" | "REJEITADA" | "CONCLUIDA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusAgendamentoEnum": "EM_ANALISE" | "EM_ANDAMENTO" | "FINALIZADO" | "CANCELADO" | "CANCELADO_POR_RECORRENCIA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusChaveCriacaoEnum": "OK" | "PORTABILIDADE" | "REIVINDICACAO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusChaveEnum": "OK" | "REIVINDICACAO_SOLICITADA" | "REIVINDICACAO_EM_PROCESSAMENTO" | "REIVINDICACAO_EM_CONCLUSAO" | "REIVINDICACAO_CONFIRMADA" | "PORTABILIDADE_SOLICITADA" | "PORTABILIDADE_EM_PROCESSAMENTO" | "PORTABILIDADE_EM_CONCLUSAO" | "PORTABILIDADE_CONFIRMADA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusRecorrenciaCanceladoEfetivoEnum": "EFETIVADO" | "CANCELADO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusRecorrenciaEnum": "EM_ANALISE" | "AGENDADO" | "FINALIZADO" | "CANCELADO_PELO_CLIENTE" | "CANCELADO_PELO_SISTEMA";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixStatusTransacaoEnum": "APROVADO" | "CANCELADO" | "RECUSADO" | "ENVIADO" | "RECEBIDO" | "ANALISE" | "AGENDADO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTipoAgendamentoFiltroEnum": "RECORRENCIA" | "AGENDAMENTO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum": "EMAIL" | "EVP" | "TELEFONE" | "CPF" | "CNPJ";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTipoComprovanteEnum": "ORDEM_PAGAMENTO" | "DEVOLUCAO" | "AGENDAMENTO" | "AUTOMATICO" | "SAQUE" | "TROCO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTipoEnum": "NORMAL" | "TROCO" | "SAQUE" | "RECORRENTE";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTipoTransacaoEnum": "ORDEM_PAGAMENTO" | "RECORRENCIA" | "AGENDAMENTO";
  "Pine.IBPF.Domain.Compartilhados.Pix.PixTransferenciaStatusResult": "PAGAMENTO_REALIZADO" | "PAGAMENTO_AGENDADO" | "PAGAMENTO_PENDENTE" | "PAGAMENTO_RECUSADO" | "PAGAMENTO_RECORRENCIA";
  "Pine.IBPF.Domain.Compartilhados.Ted.TedStatusTransferenciaEnum": "SOLICITADO" | "AGENDADO";
  "Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum": "CONTA_CORRENTE" | "POUPANCA" | "INVESTIMENTO";
  "Pine.IBPF.Domain.Compartilhados.TipoContaDto": {
    "id"?: string;
    "tipo"?: string | null;
  };
  "Pine.IBPF.Domain.Enums.Autorizacao.PeriodoAprovacaoEnum": "SEMANAL" | "QUINZENAL" | "MENSAL" | "BIMESTRAL" | "TRIMESTRAL";
  "Pine.IBPF.Domain.Enums.Autorizacao.StatusTransacaoAprovacaoEnum": "PENDENTE" | "APROVADO" | "REPROVADO" | "EXECUTADO" | "CANCELADO" | "ERRO" | "CADASTRADO";
  "Pine.IBPF.Domain.Enums.Autorizacao.TipoTransacaoAprovacaoEnum": "TED" | "TEV" | "PIX" | "DESCONHECIDO";
  "Pine.IBPF.Domain.Enums.Comprovante.PeriodoComprovanteEnum": "MENSAL" | "BIMESTRAL" | "TRIMESTRAL";
  "Pine.IBPF.Domain.Enums.Comprovante.TipoComprovanteEnum": "TED_AGENDADO" | "APLICACAO" | "PAGAMENTO_JUROS" | "RESGATE" | "TED";
  "Pine.IBPF.Domain.Enums.Declaracao.VinculoPineEnum": "NENHUM" | "FUNCIONARIO" | "TERCEIRO" | "OUTROS";
  "Pine.IBPF.Domain.Enums.Extrato.NaturezaExtratoEnum": "CREDITO" | "DEBITO";
  "Pine.IBPF.Domain.Enums.Extrato.PeriodoExtratoEnum": "MENSAL" | "BIMESTRAL" | "TRIMESTRAL";
  "Pine.IBPF.Domain.Enums.Onboarding.OnboardingSexoEnum": "MASCULINO" | "FEMININO";
  "Pine.IBPF.Domain.Enums.Onboarding.StatusOnboardingEnum": "OK" | "DOCUMENTO_RESTRICAO" | "FLUXO_TELEFONE" | "FLUXO_EMAIL" | "FLUXO_ENDERECO" | "FLUXO_PATRIMONIO" | "FLUXO_RENDA_MENSAL" | "FLUXO_SENHA" | "FLUXO_RESIDENTE_FISCAL" | "FLUXO_LIVENESS" | "FLUXO_DOCUMENTO" | "FLUXO_COMPROVANTE_ENDERECO" | "FLUXO_TERMOS" | "FLUXO_EM_ANALISE" | "FLUXO_CADASTRO_APROVADO" | "FLUXO_CADASTRO_RECUSADO" | "FLUXO_PROFISSAO" | "FLUXO_ESTADO_CIVIL" | "FLUXO_DATA_NASCIMENTO" | "FLUXO_GENERO";
  "Pine.IBPF.Domain.Input.Autenticacao.AlterarContaInput": {
    "idConta"?: number;
  };
  "Pine.IBPF.Domain.Input.Autenticacao.LoginInput": {
    "cpf"?: string | null;
    "senha"?: string | null;
    "hashAutenticacao"?: string | null;
    "hashBiometria"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Autenticacao.RedefinirSenhaInput": {
    "documento"?: string | null;
    "novaSenha"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.CodigoVerificacaoEnum"];
    "codigo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Autenticacao.SolicitacaoCodigoInput": {
    "documento"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.CodigoVerificacaoEnum"];
  };
  "Pine.IBPF.Domain.Input.Chat.ChatInput": {
    "mensagem"?: string | null;
    "tipoMensagem"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Chat.TipoChatMensagem"];
  };
  "Pine.IBPF.Domain.Input.Chat.TipoChatMensagem": "TEXTO" | "ALTERNATIVAS";
  "Pine.IBPF.Domain.Input.Conta.AlterarStatusInput": {
    "status"?: number;
  };
  "Pine.IBPF.Domain.Input.Conta.ContaAtualizarDadosPessoaisInput": {
    "documento"?: string | null;
    "nomeCompleto"?: string | null;
    "nomeSocial"?: string | null;
    "email"?: string | null;
    "celular"?: string | null;
    "sexo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Conta.SexoEnum"];
    "estadoCivil"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Conta.EstadoCivilEnum"];
    "profissao"?: string | null;
    "nomeEmpresa"?: string | null;
    "status"?: string | null;
    "dataNascimento"?: string;
    "nomeConjuge"?: string | null;
    "documentoConjuge"?: string | null;
    "cnpjEmpresa"?: string | null;
    "rendaMensal"?: number;
    "vinculoPine"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Declaracao.VinculoPineEnum"];
    "possuiNacionalidades"?: boolean;
    "possuiDomicilios"?: boolean | null;
    "nacionalidades"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.Declaracao.CidadaniaItemInput"]> | null;
    "domicilios"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.Declaracao.CidadaniaItemInput"]> | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Conta.ContaVinculadaInput": {
    "documento"?: string | null;
    "agencia"?: string | null;
    "agenciaId"?: string | null;
    "conta"?: string | null;
    "nome"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Conta.LimiteAtualizarInput": {
    "idProduto"?: string | null;
    "periodo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.PeriodoEnum"];
    "limitePeriodo"?: number;
    "limiteTransacao"?: number;
    "limitePessoaFisica"?: number;
    "limitePessoaJuridica"?: number;
    "tipoAtualizacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Conta.TipoAtualizacaoLimiteEnum"];
  };
  "Pine.IBPF.Domain.Input.Conta.TipoAtualizacaoLimiteEnum": "AUMENTAR" | "REDUZIR";
  "Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput": {
    "otp"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Declaracao.AtualizarDeclaracaoInput": {
    "rendaMensal"?: number;
    "vinculoPine"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Declaracao.VinculoPineEnum"];
    "possuiNacionalidades"?: boolean;
    "possuiDomicilios"?: boolean | null;
    "nacionalidades"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.Declaracao.CidadaniaItemInput"]> | null;
    "domicilios"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.Declaracao.CidadaniaItemInput"]> | null;
  };
  "Pine.IBPF.Domain.Input.Declaracao.CidadaniaItemInput": {
    "nacionalidadeId"?: number;
    "siglaPais"?: string | null;
    "isento"?: boolean;
    "securidadeSocial"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Dispositivo.DispositivoCadastrarFirebaseTokenInput": {
    "nome"?: string | null;
    "identificador"?: string | null;
    "token"?: string | null;
    "plataforma"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Dispositivo.DispositivoCadastrarTokenOtpInput": {
    "dispositivo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Dispositivo.DispositivoExcluirInput": {
    "dispositivo"?: number;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Endereco.AtualizarEnderecoInput": {
    "enderecoId"?: number;
    "logradouro"?: string | null;
    "numero"?: string | null;
    "complemento"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
    "cep"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Endereco.IncluirEnderecoInput": {
    "logradouro"?: string | null;
    "numero"?: string | null;
    "complemento"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
    "cep"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Investimento.InvestimentoCalcularResgateInput": {
    "idOperacao"?: number;
    "valor"?: number;
    "resgateTotal"?: boolean;
  };
  "Pine.IBPF.Domain.Input.Investimento.InvestimentoProdutoComprarInput": {
    "id"?: number;
    "valor"?: number;
    "termoAceite"?: boolean;
    "prosseguirAplicacao"?: boolean;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
    "idIdempotente"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Investimento.InvestimentoQuestionarioSalvarInput": {
    "idQuestionario"?: number;
    "perguntas"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Investimento.QuestionarioPerguntas"]> | null;
  };
  "Pine.IBPF.Domain.Input.Investimento.InvestimentoResgateInput": {
    "idOperacao"?: number;
    "valor"?: number;
    "resgateTotal"?: boolean;
    "prosseguirResgate"?: boolean;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
    "idIdempotente"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Notificacao.NotificacaoMarcarLidaInput": {
    "id"?: number;
  };
  "Pine.IBPF.Domain.Input.Notificacao.TipoNotificacaoEnum": "RECENTE" | "LIDA";
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingAceiteTermosInput": {
    "documento"?: string | null;
    "aceiteTermos"?: boolean;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDataNascimentoInput": {
    "documento"?: string | null;
    "dataNascimento"?: string;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDocumentoInput": {
    "documento"?: string | null;
    "documentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDocumentoItemInput"]> | null;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarDocumentoItemInput": {
    "fotoBase64"?: string | null;
    "tipoDocumento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.OnboardingTipoDocumentoEnum"];
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarEnderecoInput": {
    "documento"?: string | null;
    "cep"?: string | null;
    "rua"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
    "numero"?: string | null;
    "complemento"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarEstadoCivilInput": {
    "documento"?: string | null;
    "estadoCivil"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Conta.EstadoCivilEnum"];
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarGeneroInput": {
    "documento"?: string | null;
    "genero"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Onboarding.OnboardingSexoEnum"];
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarLivenessInput": {
    "documento"?: string | null;
    "base64Criptografada"?: string | null;
    "base64Descriptografada"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarPatrimonioInput": {
    "documento"?: string | null;
    "patrimonioLiquido"?: number;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarProfissaoInput": {
    "documento"?: string | null;
    "profissao"?: string | null;
    "codigoProfissao"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarRendaInput": {
    "documento"?: string | null;
    "rendaMensal"?: number;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarResidenciaFiscalInput": {
    "documento"?: string | null;
    "residenteBrasil"?: boolean;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingCadastrarSenhaInput": {
    "documento"?: string | null;
    "senha"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingEnviarCodigoInput": {
    "documento"?: string | null;
    "valor"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.CodigoVerificacaoEnum"];
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingValidarCodigoInput": {
    "documento"?: string | null;
    "valor"?: string | null;
    "codigo"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.CodigoVerificacaoEnum"];
  };
  "Pine.IBPF.Domain.Input.Onboarding.OnboardingValidarDocumentoInput": {
    "documento"?: string | null;
  };
  "Pine.IBPF.Domain.Input.PJAprovacao.AprovarTransacaoInput": {
    "id"?: string | null;
    "tipo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.PJAprovacao.AprovarTransacaoLoteInput": {
    "items"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.PJAprovacao.AprovarTransacaoInput"]> | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.PJAprovacao.ReprovarTransacaoInput": {
    "id"?: string | null;
    "tipo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.PJAprovacao.ReprovarTransacaoLoteInput": {
    "items"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.PJAprovacao.ReprovarTransacaoInput"]> | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioAcessoInput": {
    "documento"?: string | null;
    "habilitado"?: boolean;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
    "tipoTransacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.ProvaDeVida.TipoTransacaoEnum"];
  };
  "Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioCriarInput": {
    "nome"?: string | null;
    "cpf"?: string | null;
    "email"?: string | null;
    "telefone"?: string | null;
    "perfis"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioCriarPerfilInput"]> | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioCriarPerfilInput": {
    "nome"?: string | null;
    "permissao"?: string | null;
  };
  "Pine.IBPF.Domain.Input.PJGerenciarUsuario.GerenciarUsuarioRemoverInput": {
    "documento"?: string | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioCadastrarInput": {
    "cpfCnpjFavorito"?: string | null;
    "nomeFavorito"?: string | null;
    "contaFavorito"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioContaInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioContaInput": {
    "idFavorito"?: number;
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
  };
  "Pine.IBPF.Domain.Input.Pix.Beneficiario.PixBeneficiarioVerificarInput": {
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarAutorizacaoInput": {
    "idAutorizacao"?: string | null;
    "idRecorrencia"?: string | null;
    "valorMaximoPagador"?: number;
    "objetoPagamento"?: string | null;
    "dataInicial"?: string;
    "dataExpiracaoAutorizacao"?: string;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaRecebedorInput"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaDevedorInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaDevedorInput": {
    "nome"?: string | null;
    "documento"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaInput": {
    "id"?: string | null;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "valor"?: number;
    "valorMinimoRecebedor"?: number;
    "valorMaximoPagador"?: number;
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaRecebedorInput"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaDevedorInput"];
    "jornada"?: string | null;
    "contrato"?: string | null;
    "descricao"?: string | null;
    "objetoPagamento"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaRecebedorInput": {
    "nome"?: string | null;
    "cnpj"?: string | null;
    "codIspb"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAtualizarRecorrenciaInput": {
    "idRecorrencia"?: string | null;
    "valorMaximoPagador"?: number;
    "usoLimiteCredito"?: boolean;
    "notificacoesAgendamento"?: boolean;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixCancelarRecorrenciaInput": {
    "idRecorrencia"?: string | null;
    "motivoCancelamento"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixRejeitarAutorizacaoInput": {
    "idAutorizacao"?: string | null;
    "idRecorrencia"?: string | null;
    "motivoRejeicao"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixTransferenciaRecorrenciaInput": {
    "nomeFavorecido"?: string | null;
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "documentoFavorecido"?: string | null;
    "valor"?: number;
    "formaPagamento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixFormaPagamentoEnum"];
    "data"?: string;
    "salvarContato"?: boolean;
    "endToEndId"?: string | null;
    "mensagem"?: string | null;
    "modalidadeAgente"?: string | null;
    "referencia"?: string | null;
    "prestadorDoServicoDeSaque"?: string | null;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.PixAutomatico.PixAprovarRecorrenciaInput"];
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixCancelarAgendamentoInput": {
    "endToEnd"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixChave.PixCriarChaveInput": {
    "valor"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "codigo"?: string | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixChave.PixEnviarCodigoConfirmacaoInput": {
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "chave"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixChave.PixProcessarQrCodeInput": {
    "valorQrCode"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.PixFavorito.PixCriarFavoritoInput": {
    "documento"?: string | null;
    "nome"?: string | null;
    "chaveFavorito"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixChaveFavoritoDto"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixFavorito.PixFavoritoAdicionarChaveInput": {
    "nome"?: string | null;
    "documento"?: string | null;
    "chave"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixFavorito.PixPromoverBeneficiarioInput": {
    "idFavoritoConta"?: number;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixRecebimento.PixGerarQrCodeRecebimentoInput": {
    "valor"?: number | null;
    "mensagem"?: string | null;
    "chavePixFavorecido"?: string | null;
    "tipoChaveFavorecido"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
  };
  "Pine.IBPF.Domain.Input.Pix.PixTransferencia.PixFazerDevolucaoInput": {
    "endToEndId"?: string | null;
    "mensagem"?: string | null;
    "valor"?: number;
  };
  "Pine.IBPF.Domain.Input.Pix.PixTransferencia.PixFazerTransferenciaInput": {
    "nomeFavorecido"?: string | null;
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "documentoFavorecido"?: string | null;
    "valor"?: number;
    "valorSaque"?: number;
    "valorTroco"?: number;
    "formaPagamento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixFormaPagamentoEnum"];
    "data"?: string;
    "salvarContato"?: boolean;
    "endToEndId"?: string | null;
    "mensagem"?: string | null;
    "pixTipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoEnum"];
    "modalidadeAgente"?: string | null;
    "referencia"?: string | null;
    "prestadorDoServicoDeSaque"?: string | null;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.Pix.Recorrencia.PixRecorrenciaInput"];
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
    "origem"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.OrigemPixEnum"];
  };
  "Pine.IBPF.Domain.Input.Pix.Recorrencia.PixRecorrenciaCancelarInput": {
    "id"?: number;
  };
  "Pine.IBPF.Domain.Input.Pix.Recorrencia.PixRecorrenciaInput": {
    "frequencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "dataInicio"?: string;
    "dataFinal"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.RecuperacaoValor.PixCancelarRecuperacaoValorInput": {
    "idRecuperacao"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.RecuperacaoValor.PixCriarRecuperacaoValorInput": {
    "endToEnd"?: string | null;
    "tipoSituacao"?: string | null;
    "detalhesParaAnalise"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixCancelarReivindicacaoChaveInput": {
    "id"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConcluirReivindicacaoChaveInput": {
    "id"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "codigo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConfirmarReivindicacaoChaveInput": {
    "id"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixConsultarReivindicacaoChaveInput": {
    "id"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixManterChaveReivindicacaoInput": {
    "id"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "codigo"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixReceberReivindicacaoChaveInput": {
    "claimId"?: string | null;
  };
  "Pine.IBPF.Domain.Input.Pix.Reivindicacao.PixReivindicacaoChaveInput": {
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusChaveCriacaoEnum"];
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
  };
  "Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoEnvioDocumentoInput": {
    "arquivos"?: Array<string> | null;
    "tipoDocumento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.UnicoTipoDocumentoEnum"];
  };
  "Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoOnboardingInput": {
    "imagemBase64"?: string | null;
  };
  "Pine.IBPF.Domain.Input.ProvaDeVida.CriarProcessoTransacionalInput": {
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.ProvaDeVida.TipoTransacaoEnum"];
    "imagemBase64"?: string | null;
  };
  "Pine.IBPF.Domain.Input.ProvaDeVida.TipoTransacaoEnum": "CADASTRAR_DISPOSITIVO" | "EXCLUIR_DISPOSITIVO" | "DADOS_PESSOAIS" | "PIX_TRANSFERENCIA" | "PIX_BENEFICIARIO" | "PIX_AUTOMATICO_RECORRENCIA" | "TED_TRANSFERENCIA" | "TEV_TRANSFERENCIA" | "ENCERRAR_CONTA" | "CANCELAR_ENCERRAMENTO_CONTA" | "REATIVAR_CONTA" | "PJ_ALCADA_APROVACAO" | "PJ_ALCADA_REPROVACAO" | "PJ_GERENCIAR_USUARIO_BLOQUEAR" | "PJ_GERENCIAR_USUARIO_DESBLOQUEAR" | "PJ_GERENCIAR_USUARIO_EXCLUIR" | "PJ_GERENCIAR_USUARIO_CRIAR";
  "Pine.IBPF.Domain.Input.Ted.Ted.TedExcluirFavorecidoInput": {
    "documento"?: string | null;
    "nomeFavorecido"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "tipoConta"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto"];
  };
  "Pine.IBPF.Domain.Input.Ted.TedTransferencia.FazerTransferenciaTedInput": {
    "nomeFavorecido"?: string | null;
    "documentoFavorecido"?: string | null;
    "valor"?: number;
    "dataVencimento"?: string;
    "horaVencimento"?: string | null;
    "agenciaCredito"?: string | null;
    "contaCredito"?: string | null;
    "tipoConta"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto"];
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Domain.Result.Autenticacao.AlterarContaResult": {
    "loginHash"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Autenticacao.LoginResult": {
    "sucesso"?: boolean;
    "hashBiometria"?: string | null;
    "loginHash"?: string | null;
    "idSessao"?: string | null;
    "estaBloqueado"?: boolean;
    "numTentativas"?: number;
    "multiplasContas"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Chat.ChatHistoricoAgrupadoResult": {
    "data"?: string;
    "mensagens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatObterHistoricoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Chat.ChatIntencaoResult": {
    "titulo"?: string | null;
    "rota"?: string | null;
    "intencao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Chat.ChatMensagemResult": {
    "mensagem"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatTipoRespostaEnum"];
    "intencoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatIntencaoResult"]> | null;
    "opcoes"?: Array<string> | null;
  };
  "Pine.IBPF.Domain.Result.Chat.ChatObterHistoricoResult": {
    "id"?: string;
    "remetente"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatRemetenteEnum"];
    "mensagem"?: string | null;
    "criadoEm"?: string;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatTipoRespostaEnum"];
    "intencoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Chat.ChatIntencaoResult"]> | null;
    "opcoes"?: Array<string> | null;
  };
  "Pine.IBPF.Domain.Result.Chat.ChatRemetenteEnum": "USUARIO" | "ASSISTENTE";
  "Pine.IBPF.Domain.Result.Chat.ChatTipoRespostaEnum": "TEXTO" | "ACAO" | "ALTERNATIVAS";
  "Pine.IBPF.Domain.Result.Comprovante.ComprovanteDiaResult": {
    "data"?: string | null;
    "transacoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Comprovante.ComprovanteTransacaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Comprovante.ComprovanteTransacaoResult": {
    "idTransacao"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Comprovante.TipoComprovanteEnum"];
    "titulo"?: string | null;
    "descricao"?: string | null;
    "valor"?: number;
    "natureza"?: string | null;
    "data"?: string;
  };
  "Pine.IBPF.Domain.Result.Comprovante.ObterListaComprovantesResult": {
    "items"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Comprovante.ComprovanteDiaResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ConsultaContaResult": {
    "codSituacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.ContaStatusAppEnum"];
  };
  "Pine.IBPF.Domain.Result.Conta.ContaLimiteResult": {
    "periodo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.PeriodoEnum"];
    "limitePeriodo"?: number;
    "limiteTransacao"?: number;
    "limitePessoaFisica"?: number;
    "limitePessoaJuridica"?: number;
  };
  "Pine.IBPF.Domain.Result.Conta.ContaObterDadosPessoaisResult": {
    "documento"?: string | null;
    "nomeCompleto"?: string | null;
    "email"?: string | null;
    "celular"?: string | null;
    "sexo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Conta.SexoEnum"];
    "estadoCivil"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Conta.EstadoCivilEnum"];
    "profissao"?: string | null;
    "nomeEmpresa"?: string | null;
    "status"?: string | null;
    "documentoConjuge"?: string | null;
    "cnpjEmpresa"?: string | null;
    "dataNascimento"?: string;
    "nomeConjuge"?: string | null;
    "nomeSocial"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ContaObterResult": {
    "contaPf"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.DadosContaResult"];
    "contaPj"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.DadosContaResult"];
    "nomeUsuario"?: string | null;
    "possuiMultiplasContas"?: boolean;
    "quantidadeNotificacoes"?: number;
    "possuiLiveness"?: boolean;
    "ehPj"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Conta.ContaPjResult": {
    "contaId"?: number;
    "numeroConta"?: string | null;
    "numeroAgencia"?: string | null;
    "nomeUsuario"?: string | null;
    "possuiChavePix"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Conta.ContaPjSessaoResult": {
    "tipo"?: string | null;
    "agencia"?: string | null;
    "agenciaId"?: string | null;
    "conta"?: string | null;
    "estaLogado"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Conta.ContaResult": {
    "contaId"?: number;
    "numeroConta"?: string | null;
    "numeroAgencia"?: string | null;
    "nomeUsuario"?: string | null;
    "possuiChavePix"?: boolean;
    "possuiMultiplasContas"?: boolean;
    "quantidadeNotificacoes"?: number;
    "possuiLiveness"?: boolean;
    "ehPj"?: boolean;
    "contaPj"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaPjResult"];
  };
  "Pine.IBPF.Domain.Result.Conta.ContaVinculadaSessaoResult": {
    "documento"?: string | null;
    "agencia"?: string | null;
    "agenciaId"?: string | null;
    "conta"?: string | null;
    "nome"?: string | null;
    "estaLogado"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Conta.DadosContaResult": {
    "contaId"?: number;
    "numeroConta"?: string | null;
    "numeroAgencia"?: string | null;
    "nomeConta"?: string | null;
    "possuiChavePix"?: boolean;
    "documento"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Enum.ContaStatusAppEnum"];
    "dataAbertura"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.EmpresaVinculadaSessaoResult": {
    "documento"?: string | null;
    "nome"?: string | null;
    "contas"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaPjSessaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Conta.EstadoCivilResult": {
    "id"?: number;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.GeneroResult": {
    "id"?: number;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ListarContasResult": {
    "contaId"?: number;
    "clienteId"?: number;
    "agenciaId"?: string | null;
    "agenciaDigito"?: string | null;
    "agenciaFormatada"?: string | null;
    "contaNumero"?: string | null;
    "contaDigito"?: string | null;
    "contaFormatada"?: string | null;
    "tipoConta"?: string | null;
    "dataAbertura"?: string;
    "status"?: string | null;
    "estaLogado"?: boolean;
    "dataEncerramento"?: string | null;
    "motivoEncerramento"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ListarContasSessaoPjPfResult": {
    "pf"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.ContaVinculadaSessaoResult"]> | null;
    "pj"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.EmpresaVinculadaSessaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ListarPaisesResult": {
    "idPais"?: number;
    "sigla"?: string | null;
    "nome"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ObterDadosClienteResult": {
    "clienteId"?: number;
    "cpf"?: string | null;
    "nome"?: string | null;
    "email"?: string | null;
    "celular"?: string | null;
    "statusCliente"?: string | null;
    "codCliente"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.ObterSaldoResult": {
    "dataConsulta"?: string;
    "saldoContaCorrente"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Conta.Saldo"];
  };
  "Pine.IBPF.Domain.Result.Conta.ProfissaoResult": {
    "codigo"?: string | null;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Conta.Saldo": {
    "moeda"?: string | null;
    "saldoDisponivel"?: number;
  };
  "Pine.IBPF.Domain.Result.Declaracao.CidadaniaItemResult": {
    "nacionalidadeId"?: number;
    "siglaPais"?: string | null;
    "nomePais"?: string | null;
    "isento"?: boolean;
    "securidadeSocial"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Declaracao.ConsultarDeclaracaoResult": {
    "clienteId"?: number;
    "rendaMensal"?: number;
    "vinculoPine"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Declaracao.VinculoPineEnum"];
    "possuiNacionalidades"?: boolean;
    "nacionalidades"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Declaracao.CidadaniaItemResult"]> | null;
    "possuiDomicilios"?: boolean | null;
    "domicilios"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Declaracao.CidadaniaItemResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Dispositivo.DispositivoListarResult": {
    "ativos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterResult"]> | null;
    "inativos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterResult": {
    "dispositivoId"?: number;
    "nome"?: string | null;
    "identificador"?: string | null;
    "plataforma"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Dispositivo.DispositivoStatusEnum"];
  };
  "Pine.IBPF.Domain.Result.Dispositivo.DispositivoObterTokenResult": {
    "otp"?: string | null;
    "xml"?: string | null;
    "udk"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Emprestimo.EmprestimoDetalheResult": {
    "numeroContrato"?: string | null;
    "nome"?: string | null;
    "valorDaParcela"?: number;
    "dataUltimaParcela"?: string;
    "dataContrato"?: string;
    "valorOriginal"?: number;
    "valorAtual"?: number;
    "valorAPagar"?: number;
    "parcelasTotal"?: number;
    "parcelasPagas"?: number;
    "dataCarga"?: string;
  };
  "Pine.IBPF.Domain.Result.Emprestimo.EmprestimoParcelasResult": {
    "parcelaAtual"?: number;
    "parcelaTotal"?: number;
    "valorParcela"?: number;
    "vencimento"?: string;
    "pagoEm"?: string | null;
    "statusPagamento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoStatusPagamentoEnumResult"];
  };
  "Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult": {
    "id"?: string | null;
    "nome"?: string | null;
    "descricao"?: string | null;
    "posicao"?: number;
    "secoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.SecaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Emprestimo.EmprestimoStatusPagamentoEnumResult": "PAGO" | "PENDENTE";
  "Pine.IBPF.Domain.Result.Emprestimo.EmprestimosEProdutosResult": {
    "emprestimos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoDetalheResult"]> | null;
    "produtos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Emprestimo.SecaoResult": {
    "id"?: string | null;
    "nome"?: string | null;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Endereco.AtualizarEnderecoResult": {
    "sucesso"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Endereco.ConsultarCepResult": {
    "logradouro"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
    "cep"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Endereco.ConsultarEnderecoResult": {
    "enderecoId"?: number;
    "clienteId"?: number;
    "logradouro"?: string | null;
    "numero"?: string | null;
    "complemento"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
    "cep"?: string | null;
    "dataRegistro"?: string;
  };
  "Pine.IBPF.Domain.Result.Endereco.IncluirEnderecoResult": {
    "enderecoId"?: number;
  };
  "Pine.IBPF.Domain.Result.Extrato.ExtratoDiaResult": {
    "data"?: string | null;
    "transacoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Extrato.ExtratoTransacaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Extrato.ExtratoTransacaoResult": {
    "dataTransacao"?: string;
    "saldoAtual"?: number;
    "natureza"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Extrato.NaturezaExtratoEnum"];
    "nomeRecebedor"?: string | null;
    "valorTransacao"?: number;
    "saldoDisponivel"?: number;
    "descricaoHistorico"?: string | null;
    "complementoHistorico"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Faq.FaqResult": {
    "id"?: number;
    "pergunta"?: string | null;
    "resposta"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Funcionalidade.FuncionalidadeResult": {
    "nome"?: string | null;
    "ativo"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Home.HomeInvestimentoHistoricoResult": {
    "possuiInvestimento"?: boolean;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "rendimento"?: number;
    "investimentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoValorAgregadoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Home.HomeInvestimentoSaldoResult": {
    "totalAplicado"?: number;
    "valorEmProcessamento"?: number;
  };
  "Pine.IBPF.Domain.Result.Home.HomeObterOfertasResult": {
    "titulo"?: string | null;
    "descricao"?: string | null;
    "ativo"?: boolean;
    "destino"?: string | null;
    "ordem"?: number;
  };
  "Pine.IBPF.Domain.Result.InformeRendimento.InformeRendimentoPorAnoResult": {
    "id"?: number;
    "ano"?: number;
  };
  "Pine.IBPF.Domain.Result.InformeRendimento.PeriodoInformeResult": {
    "ano"?: number | null;
    "mes"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterDetalheProdutoInvestResult": {
    "id"?: number;
    "nomeEmissor"?: string | null;
    "produto"?: string | null;
    "valorMinimo"?: number | null;
    "prazo"?: string | null;
    "dataVencimento"?: string | null;
    "rentabilidade"?: string | null;
    "horarioLimite"?: string | null;
    "tributacao"?: string | null;
    "descricaoLiquidez"?: string | null;
    "garantidoFGC"?: boolean;
    "siglaProduto"?: string | null;
    "dataInicio"?: string;
    "descricaoPerfil"?: string | null;
    "prazoId"?: number;
    "podeAplicar"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterProdutosInvestResult": {
    "grupo"?: string | null;
    "produtos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ProdutoInvestResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ProdutoInvestResult": {
    "id"?: number | null;
    "produto"?: string | null;
    "nomeEmissor"?: string | null;
    "rentabilidade"?: string | null;
    "dataVencimento"?: string | null;
    "destaque"?: boolean | null;
    "valorMinimo"?: number | null;
    "prazo"?: string | null;
    "descricaoLiquidez"?: string | null;
    "dataInicio"?: string | null;
    "nomeProduto"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestResult": {
    "disponivelResgate"?: number;
    "produtos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.CarteiraInvestResult": {
    "produto"?: string | null;
    "percentual"?: number | null;
    "valor"?: number | null;
    "sigla"?: string | null;
    "idProduto"?: number | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestCalcularResgateResult": {
    "valorBruto"?: number | null;
    "valorLiquido"?: number | null;
    "valorIr"?: number | null;
    "valorIof"?: number | null;
    "aliquotaIr"?: number | null;
    "aliquotaIof"?: number | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodoResgateResult": {
    "possuiRentabilidade"?: boolean;
    "periodos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodosResgateResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodosResgateResult": {
    "dataInicio"?: string | null;
    "dataFim"?: string | null;
    "descricao"?: string | null;
    "taxa"?: number | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.ObterCarteiraInvestResult": {
    "valorTotal"?: number | null;
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.CarteiraInvestResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.DetalhePortifolioInvestResult": {
    "id"?: number | null;
    "emissor"?: string | null;
    "valorLiquido"?: number | null;
    "valorAplicado"?: number | null;
    "valorBloqueado"?: number | null;
    "rentabilidade"?: string | null;
    "rendimentoAcumulado"?: number | null;
    "percentualAcumulado"?: number | null;
    "dataInicio"?: string | null;
    "dataVencimento"?: string | null;
    "liquidez"?: string | null;
    "dataCarencia"?: string | null;
    "tributacao"?: string | null;
    "garantidoFgc"?: boolean | null;
    "horarioResgate"?: string | null;
    "produto"?: string | null;
    "valor"?: number | null;
    "valorRendimento"?: number | null;
    "podeResgatar"?: boolean;
    "valorMinimo"?: number | null;
    "eixosY"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterDetalhePortifolioEixoInvestResult"]> | null;
    "eixosX"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.ObterDetalhePortifolioEixoXInvestResult"]> | null;
    "movimentacoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoMovimentacaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoEnumResult": "NAO_ENCONTRADO" | "EM_PROCESSAMENTO" | "CONCLUIDO" | "FALHA";
  "Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoResult": {
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoEnumResult"];
    "codigoTransacao"?: number | null;
    "valor"?: number | null;
    "data"?: string | null;
    "mensagem"?: string | null;
    "codigoProduto"?: number | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteAplicacaoResult": {
    "cliente"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionCliente"];
    "operacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionOperacao"];
    "titulo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionTitulo"];
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteResgateResult": {
    "cliente"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionCliente"];
    "operacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionOperacao"];
    "titulo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionTitulo"];
    "detalhe"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionResgate"];
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionCliente": {
    "nome"?: string | null;
    "cpfCnpj"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionOperacao": {
    "tipoOperacao"?: string | null;
    "dataOperacao"?: string;
    "numeroNota"?: string | null;
    "localCustodia"?: string | null;
    "emissor"?: string | null;
    "numeroAtivoCetip"?: string | null;
    "cnpjEmissor"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionResgate": {
    "quantidadeResgatada"?: number;
    "puAtual"?: number;
    "valorBrutoResgate"?: number;
    "irRetido"?: number;
    "iofRetido"?: number;
    "valorLiquidoResgate"?: number;
    "formaLiquidacao"?: string | null;
    "observacoes"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteSectionTitulo": {
    "investimento"?: string | null;
    "vencimento"?: string;
    "rentabilidade"?: string | null;
    "dataInicio"?: string;
    "liquidez"?: string | null;
    "tipoTaxa"?: string | null;
    "quantidadeInicial"?: number;
    "puInicial"?: number;
    "valorInicial"?: number;
    "formaLiquidacao"?: string | null;
    "observacoes"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoMovimentacaoResult": {
    "dataMovimento"?: string;
    "valorRendimentoAcumulado"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoObterPerfilResult": {
    "possuiPerfil"?: boolean;
    "idPerfilInvestidor"?: number | null;
    "perfilInvestidor"?: string | null;
    "descricao"?: string | null;
    "suitabilityExpirado"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterOpcaoResult": {
    "id"?: number;
    "idPergunta"?: number;
    "idQuestionarioPerguntaOpcao"?: number;
    "peso"?: number;
    "ordenacao"?: number;
    "temDica"?: boolean;
    "descritivo"?: string | null;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterPerguntaResult": {
    "id"?: number;
    "opcoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterOpcaoResult"]> | null;
    "descritivo"?: string | null;
    "temDica"?: boolean;
    "idTipoPerguntaLayout"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Investimento.TipoPerguntaEnum"];
    "idQuestionarioGrupo"?: number | null;
    "ordenacao"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterResult": {
    "id"?: number;
    "descricao"?: string | null;
    "validadeDias"?: number;
    "tag"?: string | null;
    "dataInicioVigencia"?: string | null;
    "perguntas"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterPerguntaResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioSalvarResult": {
    "nomePerfilInvestidor"?: string | null;
    "descricaoPerfilInvestidor"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.InvestimentoValorAgregadoResult": {
    "dataReferencia"?: string;
    "cdb"?: number;
    "cdbMensal"?: number;
    "lca"?: number;
    "lci"?: number;
    "lf"?: number;
    "outros"?: number;
    "valorAgregado"?: number;
    "rendimentoDia"?: number;
    "rendimentoAcumulado"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.ObterDetalhePortifolioEixoInvestResult": {
    "label"?: string | null;
    "valor"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.ObterDetalhePortifolioEixoXInvestResult": {
    "label"?: string | null;
    "valor"?: string;
  };
  "Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoConsolidadoResult": {
    "possuiInvestimento"?: boolean;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "totalAplicado"?: number;
    "totalBruto"?: number;
    "rendimento"?: number;
    "cdb"?: number;
    "cdbMensal"?: number;
    "lca"?: number;
    "lci"?: number;
    "lfs"?: number;
    "outros"?: number;
    "investimentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoValorAgregadoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoResult": {
    "possuiInvestimento"?: boolean;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "totalAplicado"?: number;
    "rendimento"?: number;
    "cdb"?: number;
    "cdbMensal"?: number;
    "lca"?: number;
    "lci"?: number;
    "lfs"?: number;
    "outros"?: number;
    "investimentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.InvestimentoValorAgregadoResult"]> | null;
    "valorEmProcessamento"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult": {
    "id"?: number | null;
    "produto"?: string | null;
    "valor"?: number | null;
    "valorRendimento"?: number | null;
    "percentualAcumulado"?: number | null;
    "liquidez"?: string | null;
    "dataVencimento"?: string | null;
    "podeResgatar"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoPoupancaSimulacaoInvestResult": {
    "valorSimulado"?: number;
    "valorFuturo"?: number;
    "rentabilidade"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoSimulacaoInvestResult": {
    "id"?: number | null;
    "produto"?: string | null;
    "percentual"?: number;
    "valorEstimado"?: number;
    "emissor"?: string | null;
    "rentabilidade"?: string | null;
    "prazo"?: string | null;
    "dataVencimento"?: string | null;
    "liquidez"?: string | null;
    "tributacao"?: string | null;
    "garantidoFgc"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoInvestResult": {
    "produtos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoItemInvestResult"]> | null;
    "poupanca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoPoupancaSimulacaoInvestResult"];
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoItemInvestResult": {
    "id"?: number | null;
    "produto"?: string | null;
    "rentabilidade"?: string | null;
    "prazo"?: string | null;
    "percentual"?: number;
    "valorEstimado"?: number;
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoInvestResult": {
    "id"?: number;
    "produto"?: string | null;
    "prazos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoPrazosResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoPrazosResult": {
    "id"?: number;
    "nome"?: string | null;
    "diasCorrridosMinimo"?: number;
    "diasCorridosMaximo"?: number;
  };
  "Pine.IBPF.Domain.Result.Notificacao.NotificacaoAgrupadaResult": {
    "data"?: string | null;
    "notificacoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Notificacao.NotificacaoItemResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Notificacao.NotificacaoItemResult": {
    "id"?: number;
    "titulo"?: string | null;
    "mensagem"?: string | null;
    "data"?: string;
  };
  "Pine.IBPF.Domain.Result.Onboarding.OnboardingObterEnderecoResult": {
    "cep"?: string | null;
    "rua"?: string | null;
    "bairro"?: string | null;
    "cidade"?: string | null;
    "estado"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Onboarding.OnboardingObterTermosResult": {
    "parametroId"?: number;
    "identificador"?: string | null;
    "valor"?: string | null;
    "descricao"?: string | null;
    "tipoCampo"?: string | null;
    "publica"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Onboarding.OnboardingValidarDocumentoResult": {
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Onboarding.StatusOnboardingEnum"];
  };
  "Pine.IBPF.Domain.Result.PJAprovacao.AprovacaoDetalheBancarioResult": {
    "chavePix"?: string | null;
    "agenciaOrigem"?: string | null;
    "contaOrigem"?: string | null;
    "agenciaDestino"?: string | null;
    "contaDestino"?: string | null;
  };
  "Pine.IBPF.Domain.Result.PJAprovacao.AprovadorResult": {
    "nome"?: string | null;
    "dataHora"?: string;
  };
  "Pine.IBPF.Domain.Result.PJAprovacao.QuantidadeAprovacoesResult": {
    "quantidade"?: number;
  };
  "Pine.IBPF.Domain.Result.PJAprovacao.SolicitacaoAprovacaoResult": {
    "id"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Autorizacao.TipoTransacaoAprovacaoEnum"];
    "nome"?: string | null;
    "valor"?: number;
    "data"?: string;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Autorizacao.StatusTransacaoAprovacaoEnum"];
    "statusDescricao"?: string | null;
    "solicitante"?: string | null;
    "dataVencimento"?: string | null;
    "dataPagamento"?: string | null;
    "aprovadores"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.AprovadorResult"]> | null;
    "reprovadores"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.AprovadorResult"]> | null;
    "dataDecisao"?: string | null;
    "dadosBancarios"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJAprovacao.AprovacaoDetalheBancarioResult"];
  };
  "Pine.IBPF.Domain.Result.PJAprovacao.TransacaoExecutadaResult": {
    "identificador"?: string | null;
    "data"?: string | null;
    "aviso"?: string | null;
  };
  "Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioListarResult": {
    "nome"?: string | null;
    "documento"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioStatusResult"];
    "email"?: string | null;
    "telefone"?: string | null;
  };
  "Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioPerfilResult": {
    "nome"?: string | null;
    "permissoes"?: Array<string> | null;
  };
  "Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioStatusResult": "ATIVO" | "BLOQUEADO" | "EMPTY";
  "Pine.IBPF.Domain.Result.Pix.Beneficiario.PixBeneficiarioVerificarResult": {
    "ehMesmaTitularidade"?: boolean;
    "ehBeneficiario"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarAutorizacaoResult": {
    "idAutorizacao"?: string | null;
    "objetoPagamento"?: string | null;
    "codigoCliente"?: string | null;
    "primeiroPagamento"?: string;
    "proximoPagamento"?: string;
    "prazoAutorizacao"?: string;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "valorMaximoDefinido"?: number;
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
    "pagador"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarRecorrenciaResult": {
    "idRecorrencia"?: string | null;
    "objetoPagamento"?: string | null;
    "codigoCliente"?: string | null;
    "primeiroPagamento"?: string;
    "proximoPagamento"?: string;
    "prazoAutorizacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "valorMaximoDefinido"?: number;
    "contrato"?: string | null;
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
    "pagador"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAtualizarRecorrenciaResult": {
    "id"?: string | null;
    "valorMaximoPagador"?: number;
    "usoLimiteCredito"?: boolean;
    "notificacoesAgendamento"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaItemResult": {
    "idRecorrencia"?: string | null;
    "valor"?: number;
    "dataAgendamento"?: string;
    "nomeRecebedor"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixAutomaticoStatucCobrancaEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaResult": {
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "proximoPagamento"?: string | null;
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaRecebedorResult"];
    "pagador"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaPagadorResult"];
    "agendamentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaItemResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutorizacaoInfoResult": {
    "objetoPagamento"?: string | null;
    "codigoCliente"?: string | null;
    "primeiroPagamento"?: string;
    "prazoAutorizacao"?: string | null;
    "valorMaximo"?: number | null;
    "valorRecorrencia"?: number | null;
    "usoLimiteCredito"?: boolean | null;
    "notificacoesAgendamento"?: boolean | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoAgrupadoDataResult": {
    "data"?: string;
    "autorizacoes"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoResult": {
    "id"?: string | null;
    "idRecorrencia"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixAutomaticoStatusAutorizacaoEnum"];
    "dataSolicitacao"?: string | null;
    "dataAutorizacao"?: string | null;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaRecebedorResult"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDevedorResult"];
    "informacoes"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutorizacaoInfoResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasAgrupadoResult": {
    "data"?: string;
    "recorrencias"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasResult": {
    "id"?: string | null;
    "data"?: string;
    "valor"?: number;
    "recebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaRecebedorResult"];
    "devedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDevedorResult"];
    "informacoes"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaInfoResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDadosBasicosResult": {
    "nome"?: string | null;
    "documento"?: string | null;
    "instituicao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaDevedorResult": {
    "nome"?: string | null;
    "cpfCnpj"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaInfoResult": {
    "objetoPagamento"?: string | null;
    "codigoCliente"?: string | null;
    "primeiroPagamento"?: string;
    "valorMaximo"?: number | null;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaPagadorResult": {
    "nome"?: string | null;
    "documento"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixRecorrenciaRecebedorResult": {
    "nome"?: string | null;
    "cnpj"?: string | null;
    "codIspb"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixTransferenciaRecorrenciaResult": {
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTransferenciaStatusResult"];
    "nomeFavorecido"?: string | null;
    "valor"?: number;
    "data"?: string;
    "documentoFavorecido"?: string | null;
    "chaveFavorecido"?: string | null;
    "bancoFavorecido"?: string | null;
    "formaPagamento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixFormaPagamentoEnum"];
    "mensagem"?: string | null;
    "codigoOperacao"?: string | null;
    "nome"?: string | null;
    "documento"?: string | null;
    "recorrenciaAprovada"?: boolean;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAprovarRecorrenciaResult"];
    "tipoPagamento"?: string | null;
    "banco"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixChave.PixChaveInfoResult": {
    "chave"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "documento"?: string | null;
    "nome"?: string | null;
    "endToEndId"?: string | null;
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "ehMesmaTitularidade"?: boolean;
    "ehBeneficiario"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Pix.PixChave.PixCriarChaveResult": {
    "chave"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusChaveCriacaoEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixChave.PixListaChaveResult": {
    "id"?: string | null;
    "instituicao"?: string | null;
    "dataSolicitacao"?: string | null;
    "dataResolucao"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "chave"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusChaveEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixChave.PixPossuiChaveResult": {
    "possuiChave"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Pix.PixFavorito.PixCriarFavoritoResult": {
    "documento"?: string | null;
    "nome"?: string | null;
    "ativo"?: boolean;
    "dataCadastro"?: string;
  };
  "Pine.IBPF.Domain.Result.Pix.PixFavorito.PixFavoritoAdicionarChaveResult": {
    "documento"?: string | null;
    "nome"?: string | null;
    "ativo"?: boolean;
    "dataCadastro"?: string;
  };
  "Pine.IBPF.Domain.Result.Pix.PixFavorito.PixFavoritoListaContaResult": {
    "idFavoritoConta"?: number;
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "beneficiario"?: boolean;
    "statusBeneficiario"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixBeneficiarioStatusEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixFavorito.PixListarFavoritosResult": {
    "idFavorito"?: number;
    "documento"?: string | null;
    "nome"?: string | null;
    "dataCadastro"?: string;
    "ativo"?: boolean;
    "chaves"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixFavorito.PixFavoritoListaContaResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixQrCode.PixDadosRecorrenciaResult": {
    "idRecorrencia"?: string | null;
    "jornada"?: string | null;
    "retentativa"?: string | null;
    "valorRecorrencia"?: number;
    "valorMinimo"?: number;
    "ispbRecebedor"?: string | null;
    "nomeRecebedor"?: string | null;
    "cnpjRecebedor"?: string | null;
    "documentoPagador"?: string | null;
    "nomePagador"?: string | null;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "contrato"?: string | null;
    "objetoPagamento"?: string | null;
    "prazoAutorizacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "proximoPagamento"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixQrCode.PixProcessarQrCodeResult": {
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "valor"?: number;
    "identificador"?: string | null;
    "mensagem"?: string | null;
    "nomeFavorecido"?: string | null;
    "chavePixFavorecido"?: string | null;
    "tipoChaveFavorecido"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "tipoQrCode"?: string | null;
    "tipoPix"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoEnum"];
    "referencia"?: string | null;
    "modalidadeAgente"?: string | null;
    "dadosRecorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixQrCode.PixDadosRecorrenciaResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixRecebimento.PixGerarQrCodeRecebimentoResult": {
    "qrCodeImagem"?: string | null;
    "pixCopiaCola"?: string | null;
    "valor"?: number | null;
    "mensagem"?: string | null;
    "nomeFavorecido"?: string | null;
    "chavePixFavorecido"?: string | null;
    "tipoChaveFavorecido"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterComprovanteResult": {
    "nomeContraParte"?: string | null;
    "documentoContraParte"?: string | null;
    "chave"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "bancoContraParte"?: string | null;
    "valor"?: number;
    "data"?: string;
    "tipoPagamento"?: string | null;
    "formaPagamento"?: string | null;
    "mensagem"?: string | null;
    "codigoOperacao"?: string | null;
    "natureza"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixNaturezaEnum"];
    "nomeParte"?: string | null;
    "documentoParte"?: string | null;
    "bancoParte"?: string | null;
    "podeContestar"?: boolean;
    "podeDevolver"?: boolean;
    "codDevolucao"?: string | null;
    "infoDevolucao"?: string | null;
    "valorDevolucao"?: number | null;
    "valorTransacaoOriginal"?: number | null;
    "dataTransacaoOriginal"?: string | null;
    "dataAgendamento"?: string | null;
    "dataCancelamento"?: string | null;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaListarResult"];
    "agenciaParte"?: string | null;
    "contaParte"?: string | null;
    "agenciaContraParte"?: string | null;
    "contaContraParte"?: string | null;
    "codigoOperacaoOriginal"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterHistoricoPixResult": {
    "nomeFavorecido"?: string | null;
    "valor"?: number;
    "data"?: string;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusTransacaoEnum"];
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoTransacaoEnum"];
    "natureza"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixNaturezaEnum"];
    "endToEnd"?: string | null;
    "tipoComprovante"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoComprovanteEnum"];
    "devolucao"?: boolean;
    "idRecorrencia"?: number | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterTransacoesRecentesResult": {
    "nomeFavorecido"?: string | null;
    "documentoFavorecido"?: string | null;
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "chave"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "praMim"?: boolean;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixAgendamentoResult": {
    "id"?: number;
    "endToEnd"?: string | null;
    "idRecorrencia"?: number | null;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "tipoPessoa"?: string | null;
    "chavePixFavorecido"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "nomeFavorecido"?: string | null;
    "dadosBancarios"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.DadosBancariosDto"];
    "valor"?: number;
    "dataRegistro"?: string;
    "dataAgendamento"?: string;
    "dataCancelamento"?: string | null;
    "idTransacao"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusAgendamentoEnum"];
    "campoLivre"?: string | null;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerDevolucaoResult": {
    "transferenciaId"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixFazerTransferenciaResult": {
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTransferenciaStatusResult"];
    "tipoComprovante"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoComprovanteEnum"];
    "nomeFavorecido"?: string | null;
    "valor"?: number;
    "data"?: string;
    "documentoFavorecido"?: string | null;
    "chaveFavorecido"?: string | null;
    "bancoFavorecido"?: string | null;
    "formaPagamento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixFormaPagamentoEnum"];
    "mensagem"?: string | null;
    "codigoOperacao"?: string | null;
    "nome"?: string | null;
    "documento"?: string | null;
    "tipoPagamento"?: string | null;
    "banco"?: string | null;
    "recorrencia"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaListarResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixInstituicoesResult": {
    "id"?: string | null;
    "codigo"?: string | null;
    "nome"?: string | null;
    "tipo"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixListarHistoricoAgendamentoResult": {
    "id"?: number | null;
    "nomeFavorecido"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoTransacaoEnum"];
    "valor"?: number;
    "data"?: string;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusTransacaoEnum"];
    "endToEnd"?: string | null;
    "nomeBancoFavorecido"?: string | null;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "dataInicial"?: string | null;
    "dataFinal"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixMotivoInfracaoResult": {
    "id"?: number;
    "descricao"?: string | null;
    "tipoInfracao"?: string | null;
    "tipoSituacao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaEfetivaCanceladaResult": {
    "id"?: number;
    "nomeFavorecido"?: string | null;
    "valor"?: number;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "dataInicio"?: string;
    "dataFim"?: string;
    "nomeBanco"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusRecorrenciaCanceladoEfetivoEnum"];
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaListarResult": {
    "id"?: number;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "valor"?: number;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "dataRegistro"?: string;
    "dataUltimaAlteracao"?: string | null;
    "dataCancelamento"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusRecorrenciaEnum"];
    "motivo"?: string | null;
    "nomeBanco"?: string | null;
    "nomeFavorecido"?: string | null;
    "agendamentos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixAgendamentoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaResult": {
    "id"?: number;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "valor"?: number;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "dataRegistro"?: string;
    "dataUltimaAlteracao"?: string | null;
    "dataCancelamento"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixStatusRecorrenciaEnum"];
    "motivo"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Recorrencia.PixRecorrenciaAgendamentoResult": {
    "agendamentoId"?: number;
    "endToEnd"?: string | null;
    "recorrenciaId"?: number;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "chavePixFavorecido"?: string | null;
    "tipoChave"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixTipoChaveEnum"];
    "nomeFavorecido"?: string | null;
    "documentoFavorecido"?: string | null;
    "codIspbFavorecido"?: string | null;
    "nomeBancoFavorecido"?: string | null;
    "agenciaFavorecido"?: string | null;
    "contaFavorecido"?: string | null;
    "valor"?: number;
    "dataRegistro"?: string;
    "dataAgendamento"?: string;
    "dataCancelamento"?: string | null;
    "dataInicial"?: string;
    "dataFinal"?: string;
    "transacaoId"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Recorrencia.PixStatusRecorrenciaAgendamentoEnum"];
    "periodicidade"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixRecorrenciaPagamentoEnum"];
    "campoLivre"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Recorrencia.PixStatusRecorrenciaAgendamentoEnum": "EM_ANALISE" | "EM_ANDAMENTO" | "FINALIZADO" | "CANCELADO";
  "Pine.IBPF.Domain.Result.Pix.RecuperacaoValor.PixRecuperacaoValorResult": {
    "valor"?: number;
    "data"?: string;
    "status"?: string | null;
    "protocolo"?: string | null;
    "rebedorOriginal"?: string | null;
    "idTransacao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixContaReclamanteResult": {
    "participante"?: string | null;
    "filial"?: string | null;
    "numeroConta"?: string | null;
    "tipoConta"?: string | null;
    "nomeParticipante"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoChaveResult": {
    "id"?: string | null;
    "statusSolicitacao"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Pix.PixReivindicacaoStatusEnum"];
    "prazoConfirmacao"?: string;
    "nomeBanco"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoListarResult": {
    "id"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoTypeResult"];
    "chave"?: string | null;
    "nomeSolicitante"?: string | null;
    "fimPeriodoConclusao"?: string;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoStatusResult"];
  };
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoStatusResult": "CANCELADO" | "REIVINDICADOR_CANCELADO" | "CONCLUIDO" | "AGUARDANDO_RESOLUCAO" | "REIVINDICADOR_AGUARDANDO_RESOLUCAO" | "AGUARDANDO_CONCLUSAO" | "REIVINDICADOR_AGUARDANDO_CONCLUSAO" | "CONFIRMADO" | "DONO_CONFIRMADO" | "ABERTO";
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoTypeResult": "PORTABILITY" | "OWNERSHIP";
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicadorResult": {
    "tipo"?: string | null;
    "taxId"?: string | null;
    "nome"?: string | null;
    "nomeComercial"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicaoResult": {
    "tipo"?: string | null;
    "chave"?: string | null;
    "tipoChave"?: string | null;
    "contaReclamante"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixContaReclamanteResult"];
    "reclamante"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicadorResult"];
    "participanteDoador"?: string | null;
    "id"?: string | null;
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoStatusResult"];
    "fimPeriodoConclusao"?: string;
    "fimPeriodoResolucao"?: string;
    "confirmarMotivo"?: string | null;
    "cancelarMotivo"?: string | null;
    "canceladoPor"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoAgrupadoDataResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoAgrupadoDataResult"]> | null;
    "totalRegistros"?: number;
    "paginalAtual"?: number;
    "registrosPorPagina"?: number;
  };
  "Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoResult"]> | null;
    "totalRegistros"?: number;
    "paginalAtual"?: number;
    "registrosPorPagina"?: number;
  };
  "Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasAgrupadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasAgrupadoResult"]> | null;
    "totalRegistros"?: number;
    "paginalAtual"?: number;
    "registrosPorPagina"?: number;
  };
  "Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixTransferenciaRecorrenciaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    "Request-Id"?: string | null;
    "reqId"?: string | null;
    "mensagem"?: string | null;
    "statusCode"?: OpenApiSchemaMap["System.Net.HttpStatusCode"];
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixTransferenciaRecorrenciaResult"]> | null;
    "totalRegistros"?: number;
    "paginalAtual"?: number;
    "registrosPorPagina"?: number;
  };
  "Pine.IBPF.Domain.Result.Seguros.SeguroGrupoResult": {
    "titulo"?: string | null;
    "produtos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Seguros.SeguroProdutoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Seguros.SeguroProdutoResult": {
    "titulo"?: string | null;
    "subtitulo"?: string | null;
    "descricao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Seguros.SegurosObterResult": {
    "grupos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Seguros.SeguroGrupoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.TecladoVirtual.ObterTecladoVirtualResult": {
    "tecladoItens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.TecladoVirtual.TecladoVirtualItensResult"]> | null;
    "hashAutenticacao"?: string | null;
  };
  "Pine.IBPF.Domain.Result.TecladoVirtual.TecladoVirtualItensResult": {
    "posicao"?: string | null;
    "identificador"?: string | null;
    "opcoes"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.ObterComprovanteTedResult": {
    "autenticacao"?: string | null;
    "nomeFavorecido"?: string | null;
    "valorTransferencia"?: number;
    "dataOperacao"?: string | null;
    "documentoFavorecido"?: string | null;
    "agenciaFavorecido"?: string | null;
    "contaFavorecido"?: string | null;
    "bancoFavorecido"?: string | null;
    "ispbif"?: string | null;
    "nomeCliente"?: string | null;
    "contaCliente"?: string | null;
    "agenciaCliente"?: string | null;
    "documentoCliente"?: string | null;
    "tipoPagamento"?: string | null;
    "finalidade"?: string | null;
    "tipo"?: OpenApiSchemaMap["Pine.IBPF.Domain.Enums.Comprovante.TipoComprovanteEnum"];
    "dataAgendamento"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.ObterTedExtratoFiltroResult": {
    "nomeFavorecido"?: string | null;
    "nomeBanco"?: string | null;
    "valorTransacao"?: number;
    "dataTransacao"?: string;
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.ObterTransacoesRecentesTedResult": {
    "agenciaRecebedor"?: string | null;
    "contaRecebedor"?: string | null;
    "documentoRecebedor"?: string | null;
    "nomeRecebedor"?: string | null;
    "paraMim"?: boolean;
    "tedTipoContaRecebedor"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum"];
    "bancoResult"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto"];
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto": {
    "id"?: string | null;
    "codigo"?: string | null;
    "nome"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.TedCriarFavorecidoInput": {
    "documento"?: string | null;
    "nome"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "idBanco"?: string | null;
    "tipoConta"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum"];
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.TedListarFavorecidosFiltroResult": {
    "documento"?: string | null;
    "nome"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "ispb"?: string | null;
    "tipoConta"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedTipoContaEnum"];
    "banco"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto"];
  };
  "Pine.IBPF.Domain.Result.Ted.Ted.TedTipoContaResult": {
    "id"?: string | null;
    "tipo"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.TedAgendamento.ListarTedAgendadaResult": {
    "grupos"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaGrupoResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaFavorecidoResult": {
    "nome"?: string | null;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
    "nomeBanco"?: string | null;
    "ispb"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaGrupoResult": {
    "data"?: string;
    "itens"?: Array<OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaItemResult"]> | null;
  };
  "Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaItemResult": {
    "codigoTransacao"?: string | null;
    "dataAgendada"?: string | null;
    "dataSolicitacao"?: string | null;
    "valor"?: number;
    "tipoPagamento"?: string | null;
    "formaPagamento"?: string | null;
    "pagador"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaPagadorResult"];
    "favorecido"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaFavorecidoResult"];
  };
  "Pine.IBPF.Domain.Result.Ted.TedAgendamento.TedAgendadaPagadorResult": {
    "nome"?: string | null;
    "documento"?: string | null;
    "agencia"?: string | null;
    "conta"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Ted.TedTransferencia.FazerTransferenciaTedResult": {
    "status"?: OpenApiSchemaMap["Pine.IBPF.Domain.Compartilhados.Ted.TedStatusTransferenciaEnum"];
  };
  "Pine.IBPF.Domain.Result.Unico.StatusDocumentoUnicoEnum": "CADASTRADO" | "PENDENTE";
  "Pine.IBPF.Domain.Result.Unico.UnicoCriarProcessoOnboardingResult": {
    "statusDocumento"?: OpenApiSchemaMap["Pine.IBPF.Domain.Result.Unico.StatusDocumentoUnicoEnum"];
  };
  "Pine.IBPF.Domain.Result.Unico.UnicoProcessoResult": {
    "id"?: string | null;
  };
  "Pine.IBPF.Domain.Result.Versao.VersaoObterResult": {
    "parametroId"?: number;
    "identificador"?: string | null;
    "valor"?: string | null;
    "descricao"?: string | null;
    "tipoCampo"?: string | null;
    "publica"?: boolean;
  };
  "Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Input.CancelarEncerramentoContaInput": {
    "solicitacaoEncerramentoContaId"?: number;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Input.SolicitarEncerramentoInput": {
    "contaId"?: number;
    "motivoEncerramento"?: string | null;
    "dadosSeguranca"?: OpenApiSchemaMap["Pine.IBPF.Domain.Input.DadosSeguranca.DadosSegurancaInput"];
  };
  "Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Result.ObterSolicitacaoEncerramentoContaResult": {
    "solicitacaoEncerramentoContaId"?: number;
    "motivo"?: string | null;
    "status"?: string | null;
    "dataSolicitacao"?: string | null;
    "usuario"?: string | null;
  };
  "System.Net.HttpStatusCode": "Continue" | "SwitchingProtocols" | "Processing" | "EarlyHints" | "OK" | "Created" | "Accepted" | "NonAuthoritativeInformation" | "NoContent" | "ResetContent" | "PartialContent" | "MultiStatus" | "AlreadyReported" | "IMUsed" | "MultipleChoices" | "MovedPermanently" | "Found" | "SeeOther" | "NotModified" | "UseProxy" | "Unused" | "TemporaryRedirect" | "PermanentRedirect" | "BadRequest" | "Unauthorized" | "PaymentRequired" | "Forbidden" | "NotFound" | "MethodNotAllowed" | "NotAcceptable" | "ProxyAuthenticationRequired" | "RequestTimeout" | "Conflict" | "Gone" | "LengthRequired" | "PreconditionFailed" | "RequestEntityTooLarge" | "RequestUriTooLong" | "UnsupportedMediaType" | "RequestedRangeNotSatisfiable" | "ExpectationFailed" | "MisdirectedRequest" | "UnprocessableEntity" | "Locked" | "FailedDependency" | "UpgradeRequired" | "PreconditionRequired" | "TooManyRequests" | "RequestHeaderFieldsTooLarge" | "UnavailableForLegalReasons" | "InternalServerError" | "NotImplemented" | "BadGateway" | "ServiceUnavailable" | "GatewayTimeout" | "HttpVersionNotSupported" | "VariantAlsoNegotiates" | "InsufficientStorage" | "LoopDetected" | "NotExtended" | "NetworkAuthenticationRequired";
}

/** Tipo de sucesso de cada GET conforme o schema da resposta 2xx. */
export interface SwaggerGetResponses {
  "/api/v1/Autenticacao/ObterTecladoVirtual": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.TecladoVirtual.ObterTecladoVirtualResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Chat/ObterMensagens": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Chat.ChatHistoricoAgrupadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Comprovante/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Comprovante.ObterListaComprovantesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ConsultaConta": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ConsultaContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterDados": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterDadosPessoais": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaObterDadosPessoaisResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterSaldo": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ObterSaldoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ConsultarCep/{cep}": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarCepResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterEndereco": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterDeclaracao": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Declaracao.ConsultarDeclaracaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ObterProfissoes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ProfissaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ListarPaises": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ListarPaisesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ListarContas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ListarContasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/Cliente": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ObterDadosClienteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ListarContasSessaoPjPfResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/ListarComSessao": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ListarContasSessaoPjPfResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/Encerramento/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Services.ServicosExternos.SolicitacaoEncerramento.Domain.Result.ObterSolicitacaoEncerramentoContaResult, Pine.IBPF.Services, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/InformeRendimento/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.InformeRendimento.PeriodoInformeResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Conta/InformeRendimento/Obter": string | Buffer;
  "/api/v1/Conta/Perfil/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaObterDadosPessoaisResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Dispositivo/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Dispositivo.DispositivoListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Emprestimo/ObterProdutos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[System.Collections.Generic.IEnumerable`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
  "/api/v1/Emprestimo/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimosEProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Emprestimo/ObterDocumento": string | Buffer;
  "/api/v1/Emprestimo/ObterParcelas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoParcelasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Endereco/Cep/{cep}": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarCepResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Endereco/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Endereco.ConsultarEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Extrato/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Extrato.ExtratoDiaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Faq/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Faq.FaqResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Banner/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Home.HomeObterOfertasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/ObterOfertas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Home.HomeObterOfertasResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Funcionalidade/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Funcionalidade.FuncionalidadeResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/ObterInvestimentos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Investimento/Saldo": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Home.HomeInvestimentoSaldoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Investimento/Historico": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Home.HomeInvestimentoHistoricoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/ObterPortifolio": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Investimento/Carteira": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/Emprestimo/Produtos/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Emprestimo.EmprestimoProdutosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Home/PJ/GerenciarUsuario/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/InformeRendimento/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.InformeRendimento.InformeRendimentoPorAnoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/InformeRendimento/Obter": string | Buffer;
  "/api/v1/Investimento/ObterInvestimentos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Resumo": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.ObterInvestimentoConsolidadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/ObterPortifolio": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.ObterPortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Carteira": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/DetalhePortifolio": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.DetalhePortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Carteira/Operacao/Detalhe": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.DetalhePortifolioInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/ObterRelatorio": string | Buffer;
  "/api/v1/Investimento/Carteira/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.ObterCarteiraInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Carteira/ObterPeriodoResgate": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.CarteiraInvestimento.InvestObterPeriodoResgateResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Carteira/Resgate/Status": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Comprovante/Aplicacao": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteAplicacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Comprovante/Resgate": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoComprovanteResgateResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Produto/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterProdutosInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Produto/ObterDetalhe": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.AplicacaoFinanceira.ObterDetalheProdutoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Produto/Comprar/Status": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestStatusOperacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Questionario/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Simulacao/ObterFiltro": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Simulacao/ObterProduto": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutoSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Simulacao/ObterProdutos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.Simulacao.ObterProdutosSimulacaoInvestResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Suitability/Perfil/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoObterPerfilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Suitability/Questionario/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoQuestionarioObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Investimento/Suitability/ObterPerfil": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Investimento.InvestimentoObterPerfilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Notificacao/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Notificacao.NotificacaoAgrupadaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Onboarding/Endereco/Consultar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Onboarding.OnboardingObterEnderecoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Onboarding/Profissoes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.ProfissaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Onboarding/EstadoCivil": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.EstadoCivilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Onboarding/Genero": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Conta.GeneroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Onboarding/Termos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Onboarding.OnboardingObterTermosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Automatico/Autorizacoes": OpenApiSchemaMap["Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Automatico/Autorizacoes/Historico": OpenApiSchemaMap["Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarAutorizacaoAgrupadoDataResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Automatico/Recorrencias": OpenApiSchemaMap["Pine.IBPF.Domain.Result.Resultado.ResultadoPadraoListaPaginado`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixBuscarRecorrenciasAgrupadoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Automatico/Agendamentos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixAutomatico.PixAutomaticoAgendamentoCobrancaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Chave/Possui": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixPossuiChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Chave/ObterLista": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixListaChaveResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Chave/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixChave.PixChaveInfoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Contestacao/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.RecuperacaoValor.PixRecuperacaoValorResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Favorito/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixFavorito.PixListarFavoritosResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Limites/ObterPorProduto": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Conta.ContaLimiteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Limites/ObterProdutos": unknown;
  "/api/v1/Pix/Recorrencia/ObterAgendamentos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.Recorrencia.PixRecorrenciaAgendamentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Recorrencia/ListarEfetivasCanceladas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixRecorrenciaEfetivaCanceladaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Reivindicacao/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.Reivindicacao.PixReivindicacaoListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ObterHistorico": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterHistoricoPixResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ObterTransacoesRecentes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterTransacoesRecentesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ObterComprovante": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.ObterComprovanteResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ListarHistoricoAgendamento": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixListarHistoricoAgendamentoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ObterInstituicoes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixInstituicoesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/ObterTipoContas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Compartilhados.TipoContaDto, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Pix/Transferencias/Infracao/ObterMotivos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Pix.PixTransferencia.PixMotivoInfracaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/PJ/Aprovacao/Pendentes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJAprovacao.SolicitacaoAprovacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/PJ/Aprovacao/Pendentes/Quantidade": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.PJAprovacao.QuantidadeAprovacoesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/PJ/Aprovacao/Historico": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJAprovacao.SolicitacaoAprovacaoResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/PJ/GerenciarUsuario/Listar": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioListarResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/PJ/GerenciarUsuario/Perfis": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.PJGerenciarUsuario.GerenciarUsuarioPerfilResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Seguros/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Seguros.SegurosObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/Comprovante": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterComprovanteTedResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/ObterTipoContas": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedTipoContaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/ObterInstituicoes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedBancoDto, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/Extratos": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterTedExtratoFiltroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/ObterTransacoesRecentes": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.ObterTransacoesRecentesTedResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/ObterHistorico": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Comprovante.ObterListaComprovantesResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/Agendamento": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Ted.TedAgendamento.ListarTedAgendadaResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/Favorecido/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadraoLista`1[[Pine.IBPF.Domain.Result.Ted.Ted.TedListarFavorecidosFiltroResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
  "/api/v1/Ted/Limites/ObterPorProduto": unknown;
  "/api/v1/Ted/Limites/ObterProdutos": unknown;
  "/api/v1/Versao/Obter": OpenApiSchemaMap["Pine.Framework.API.Domain.Result.ResultadoPadrao`1[[Pine.IBPF.Domain.Result.Versao.VersaoObterResult, Pine.IBPF.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
}
