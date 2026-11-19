/** Gerado a partir do Swagger, com enum/format de query resolvidos. */
export const GET_ROUTES = {
  "/api/v1/Autenticacao/ObterTecladoVirtual": {
    "grupo": "Autenticacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "cpf": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Chat/ObterMensagens": {
    "grupo": "Chat",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Comprovante/Listar": {
    "grupo": "Comprovante",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Tipo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "TED_AGENDADO",
          "APLICACAO",
          "PAGAMENTO_JUROS",
          "RESGATE",
          "TED"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Conta/ConsultaConta": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/Obter": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ObterDados": {
    "grupo": "Conta",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ObterDadosPessoais": {
    "grupo": "Conta",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ObterSaldo": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ConsultarCep/{cep}": {
    "grupo": "Conta",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": [
      "cep"
    ]
  },
  "/api/v1/Conta/ObterEndereco": {
    "grupo": "Conta",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ObterDeclaracao": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ObterProfissoes": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ListarPaises": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ListarContas": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/Cliente": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/Listar": {
    "grupo": "Conta",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/ListarComSessao": {
    "grupo": "Conta",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/Encerramento/Obter": {
    "grupo": "ContaEncerramento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/InformeRendimento/Listar": {
    "grupo": "ContaInformeRendimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Conta/InformeRendimento/Obter": {
    "grupo": "ContaInformeRendimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "ano": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "mes": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Conta/Perfil/Obter": {
    "grupo": "ContaPerfil",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Dispositivo/Listar": {
    "grupo": "Dispositivo",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Emprestimo/ObterProdutos": {
    "grupo": "Emprestimo",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Emprestimo/Obter": {
    "grupo": "Emprestimo",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Emprestimo/ObterDocumento": {
    "grupo": "Emprestimo",
    "deprecated": false,
    "status": [
      200,
      400,
      404
    ],
    "query": {
      "numeroContrato": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Emprestimo/ObterParcelas": {
    "grupo": "Emprestimo",
    "deprecated": false,
    "status": [
      200,
      400
    ],
    "query": {
      "NumeroContrato": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      },
      "DataCarga": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Endereco/Cep/{cep}": {
    "grupo": "Endereco",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": [
      "cep"
    ]
  },
  "/api/v1/Endereco/Obter": {
    "grupo": "Endereco",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Extrato/Obter": {
    "grupo": "Extrato",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Faq/Obter": {
    "grupo": "Faq",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/Banner/Obter": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/ObterOfertas": {
    "grupo": "Home",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/Funcionalidade/Obter": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/ObterInvestimentos": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "TOTAL",
          "MENSAL",
          "TRIMESTRAL",
          "SEMESTRAL",
          "ANUAL",
          "ANO_ATUAL"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Home/Investimento/Saldo": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/Investimento/Historico": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "TOTAL",
          "MENSAL",
          "TRIMESTRAL",
          "SEMESTRAL",
          "ANUAL",
          "ANO_ATUAL"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Home/ObterPortifolio": {
    "grupo": "Home",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/Investimento/Carteira": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/Emprestimo/Produtos/Obter": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Home/PJ/GerenciarUsuario/Obter": {
    "grupo": "Home",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/InformeRendimento/Listar": {
    "grupo": "InformeRendimento",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/InformeRendimento/Obter": {
    "grupo": "InformeRendimento",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "ano": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "mes": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/ObterInvestimentos": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "TOTAL",
          "MENSAL",
          "TRIMESTRAL",
          "SEMESTRAL",
          "ANUAL",
          "ANO_ATUAL"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Resumo": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "TOTAL",
          "MENSAL",
          "TRIMESTRAL",
          "SEMESTRAL",
          "ANUAL",
          "ANO_ATUAL"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Investimento/ObterPortifolio": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Carteira": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/DetalhePortifolio": {
    "grupo": "Investimento",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "idPortifolio": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Carteira/Operacao/Detalhe": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "operacao": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/ObterRelatorio": {
    "grupo": "Investimento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "tipoRelatorio": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "dataReferencia": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Carteira/Obter": {
    "grupo": "InvestimentoCarteira",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Carteira/ObterPeriodoResgate": {
    "grupo": "InvestimentoCarteira",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "operacao": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Carteira/Resgate/Status": {
    "grupo": "InvestimentoCarteira",
    "deprecated": false,
    "status": [
      200,
      400,
      401,
      422
    ],
    "query": {
      "idIdempotente": {
        "type": "string",
        "format": "uuid",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Comprovante/Aplicacao": {
    "grupo": "InvestimentoComprovante",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "codigoTransacao": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Comprovante/Resgate": {
    "grupo": "InvestimentoComprovante",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "codigoTransacao": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Produto/Obter": {
    "grupo": "InvestimentoProduto",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Produto/ObterDetalhe": {
    "grupo": "InvestimentoProduto",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "idProduto": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Produto/Comprar/Status": {
    "grupo": "InvestimentoProduto",
    "deprecated": false,
    "status": [
      200,
      400,
      401,
      422
    ],
    "query": {
      "idIdempotente": {
        "type": "string",
        "format": "uuid",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Questionario/Obter": {
    "grupo": "InvestimentoQuestionario",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Simulacao/ObterFiltro": {
    "grupo": "InvestimentoSimulacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Simulacao/ObterProduto": {
    "grupo": "InvestimentoSimulacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Valor": {
        "type": "number",
        "format": "double",
        "required": false,
        "enum": null
      },
      "Prazo": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Produto": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Simulacao/ObterProdutos": {
    "grupo": "InvestimentoSimulacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Valor": {
        "type": "number",
        "format": "double",
        "required": false,
        "enum": null
      },
      "Prazo": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Tipo": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Investimento/Suitability/Perfil/Obter": {
    "grupo": "InvestimentoSuitability",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Suitability/Questionario/Obter": {
    "grupo": "InvestimentoSuitability",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Investimento/Suitability/ObterPerfil": {
    "grupo": "InvestimentoSuitability",
    "deprecated": true,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Notificacao/Obter": {
    "grupo": "Notificacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "tipo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "RECENTE",
          "LIDA"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Onboarding/Endereco/Consultar": {
    "grupo": "Onboarding",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {
      "Cep": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Onboarding/Profissoes": {
    "grupo": "Onboarding",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Onboarding/EstadoCivil": {
    "grupo": "Onboarding",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Onboarding/Genero": {
    "grupo": "Onboarding",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Onboarding/Termos": {
    "grupo": "Onboarding",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Automatico/Autorizacoes": {
    "grupo": "PixAutomatico",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "PaginaAtual": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "ItensPorPagina": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Status": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "ATIVA",
          "PENDENTE"
        ]
      },
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Automatico/Autorizacoes/Historico": {
    "grupo": "PixAutomatico",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "PaginaAtual": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "ItensPorPagina": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Automatico/Recorrencias": {
    "grupo": "PixAutomatico",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "PaginaAtual": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "ItensPorPagina": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Automatico/Agendamentos": {
    "grupo": "PixAutomatico",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "PaginaAtual": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "ItensPorPagina": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "IdRecorrencia": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Chave/Possui": {
    "grupo": "PixChave",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Chave/ObterLista": {
    "grupo": "PixChave",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Chave/Obter": {
    "grupo": "PixChave",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "chave": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Contestacao/Listar": {
    "grupo": "PixConstestacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Favorito/Listar": {
    "grupo": "PixFavorito",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Limites/ObterPorProduto": {
    "grupo": "PixLimite",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "idProduto": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Limites/ObterProdutos": {
    "grupo": "PixLimite",
    "deprecated": false,
    "status": [
      204,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Recorrencia/ObterAgendamentos": {
    "grupo": "PixRecorrencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "recorrencia": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Recorrencia/ListarEfetivasCanceladas": {
    "grupo": "PixRecorrencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Reivindicacao/Listar": {
    "grupo": "PixReivindicacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Transferencias/ObterHistorico": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Transferencias/ObterTransacoesRecentes": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Transferencias/ObterComprovante": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "EndToEnd": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      },
      "Tipo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "ORDEM_PAGAMENTO",
          "DEVOLUCAO",
          "AGENDAMENTO",
          "AUTOMATICO",
          "SAQUE",
          "TROCO"
        ]
      }
    },
    "path": []
  },
  "/api/v1/Pix/Transferencias/ListarHistoricoAgendamento": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "TipoTransacao": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "RECORRENCIA",
          "AGENDAMENTO"
        ]
      },
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Pix/Transferencias/ObterInstituicoes": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Transferencias/ObterTipoContas": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Pix/Transferencias/Infracao/ObterMotivos": {
    "grupo": "PixTransferencia",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/PJ/Aprovacao/Pendentes": {
    "grupo": "PjAprovacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "SEMANAL",
          "QUINZENAL",
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/PJ/Aprovacao/Pendentes/Quantidade": {
    "grupo": "PjAprovacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "SEMANAL",
          "QUINZENAL",
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/PJ/Aprovacao/Historico": {
    "grupo": "PjAprovacao",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "SEMANAL",
          "QUINZENAL",
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/PJ/GerenciarUsuario/Listar": {
    "grupo": "PjGerenciarUsuario",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/PJ/GerenciarUsuario/Perfis": {
    "grupo": "PjGerenciarUsuario",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Seguros/Obter": {
    "grupo": "Seguros",
    "deprecated": false,
    "status": [
      200,
      401,
      422
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Ted/Comprovante": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "CodigoOperacao": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Ted/ObterTipoContas": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Ted/ObterInstituicoes": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Ted/Extratos": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Filtro.PeriodoDias": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Filtro.De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Filtro.Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Pagina": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      },
      "Registros": {
        "type": "integer",
        "format": "int32",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Ted/ObterTransacoesRecentes": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Ted/ObterHistorico": {
    "grupo": "Ted",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Ted/Agendamento": {
    "grupo": "TedAgendamento",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "Periodo": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": [
          "MENSAL",
          "BIMESTRAL",
          "TRIMESTRAL"
        ]
      },
      "De": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      },
      "Ate": {
        "type": "string",
        "format": "date-time",
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Ted/Favorecido/Obter": {
    "grupo": "TedFavorito",
    "deprecated": false,
    "status": [
      200,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Ted/Limites/ObterPorProduto": {
    "grupo": "TedLimite",
    "deprecated": false,
    "status": [
      200,
      400,
      401
    ],
    "query": {
      "idProduto": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  },
  "/api/v1/Ted/Limites/ObterProdutos": {
    "grupo": "TedLimite",
    "deprecated": false,
    "status": [
      204,
      401
    ],
    "query": {},
    "path": []
  },
  "/api/v1/Versao/Obter": {
    "grupo": "Versao",
    "deprecated": false,
    "status": [
      200
    ],
    "query": {
      "parametro": {
        "type": "string",
        "format": null,
        "required": false,
        "enum": null
      }
    },
    "path": []
  }
} as const;
export type SwaggerGetRoute = keyof typeof GET_ROUTES;
