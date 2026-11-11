import { APIRequestContext } from '@playwright/test';
import { ApiResponse } from '../Models/api-response.model';
import {
    PixEnvelopeCopia,
    PixListaCopia,
    PixLimitesCopia,
    PixQrCodeGerarRequestCopia,
    PixQrCodeGeradoCopia,
    PixQrCodeProcessarRequestCopia,
    PixQrCodeProcessadoCopia,
} from '../Models/pix-copia.model';
import { BaseApiClientCopia } from './base-api-client-copia';

export class PixApiClientCopia extends BaseApiClientCopia {
    constructor(request: APIRequestContext, headers: Record<string, string> = {}) {
        super(request, headers);
    }

    cancelarAgendamento(endToEnd: string): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Agendamento/Cancelar', { endToEnd });
    }

    obterAgendamentosAutomaticos(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Automatico/Agendamentos', params);
    }

    atualizarRecorrenciaAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.put('/api/v1/Pix/Automatico/Recorrencia/Atualizar', data);
    }

    cancelarRecorrenciaAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Automatico/Recorrencia/Cancelar', data);
    }

    aprovarRecorrenciaAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Automatico/Recorrencia/Aprovar', data);
    }

    criarRecorrenciaAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Automatico/Recorrencia', data);
    }

    listarRecorrenciasAutomaticas(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Automatico/Recorrencias', params);
    }

    rejeitarAutorizacaoAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Automatico/Autorizacao/Rejeitar', data);
    }

    aprovarAutorizacaoAutomatica(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Automatico/Autorizacao/Aprovar', data);
    }

    obterHistoricoAutorizacoesAutomaticas(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Automatico/Autorizacoes/Historico', params);
    }

    listarAutorizacoesAutomaticas(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Automatico/Autorizacoes', params);
    }

    cadastrarBeneficiario(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Beneficiario/Cadastrar', data);
    }

    promoverBeneficiario(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Beneficiario/Promover', data);
    }

    verificarBeneficiario(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Beneficiario/Verificar', data);
    }

    excluirChave(chave: string): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.delete('/api/v1/Pix/Chave/Excluir', { chave });
    }

    possuiChave(): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.get('/api/v1/Pix/Chave/Possui');
    }

    listarChaves(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Chave/ObterLista');
    }

    obterChave(chave: string): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.get('/api/v1/Pix/Chave/Obter', { chave });
    }

    criarChave(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Chave/Criar', data);
    }

    solicitarCodigoChave(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Chave/SolicitarCodigo', data);
    }

    criarContestacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Contestacao/Criar', data);
    }

    listarContestacoes(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Contestacao/Listar', params);
    }

    cancelarContestacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Contestacao/Cancelar', data);
    }

    excluirFavorito(id: string): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.delete('/api/v1/Pix/Favorito/Deletar', { id });
    }

    excluirChaveFavorito(idContaFavorito: string): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.delete('/api/v1/Pix/Favorito/DeletarChave', { idContaFavorito });
    }

    listarFavoritos(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Favorito/Listar');
    }

    criarFavorito(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Favorito/Criar', data);
    }

    adicionarChaveFavorito(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Favorito/AdicionarChave', data);
    }

    obterLimitesPorProduto(idProduto: string): Promise<ApiResponse<PixLimitesCopia | null>> {
        return this.get('/api/v1/Pix/Limites/ObterPorProduto', { idProduto });
    }

    atualizarLimites(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.put('/api/v1/Pix/Limites/Atualizar', data);
    }

    obterProdutosLimites(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Limites/ObterProdutos');
    }

    gerarQrCode(data: PixQrCodeGerarRequestCopia): Promise<ApiResponse<PixQrCodeGeradoCopia | null>> {
        return this.post('/api/v1/Pix/QrCode/Gerar', data);
    }

    processarQrCode(data: PixQrCodeProcessarRequestCopia): Promise<ApiResponse<PixQrCodeProcessadoCopia | null>> {
        return this.post('/api/v1/Pix/QrCode/Processar', data);
    }

    obterAgendamentosRecorrencia(id: string): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Recorrencia/ObterAgendamentos', { id });
    }

    listarRecorrenciasEfetivasCanceladas(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Recorrencia/ListarEfetivasCanceladas', params);
    }

    cancelarRecorrencia(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Recorrencia/Cancelar', data);
    }

    obterComprovanteReivindicacao(params: Record<string, string>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterComprovante', params);
    }

    cadastrarReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Cadastrar', data);
    }

    cancelarReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Cancelar', data);
    }

    manterChaveReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/ManterChave', data);
    }

    concluirReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Concluir', data);
    }

    confirmarReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Confirmar', data);
    }

    consultarReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Consultar', data);
    }

    receberReivindicacao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Reivindicacao/Receber', data);
    }

    listarReivindicacoes(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Reivindicacao/Listar');
    }

    obterHistoricoTransferencias(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterHistorico', params);
    }

    obterComprovanteTransferencia(params: Record<string, string>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterComprovante', params);
    }

    listarAgendamentosTransferencias(params: Record<string, string>): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ListarHistoricoAgendamento', params);
    }

    obterInstituicoesTransferencias(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterInstituicoes');
    }

    obterTiposContaTransferencias(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterTipoContas');
    }

    fazerTransferencia(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Transferencias/FazerTransferencia', data);
    }

    fazerDevolucao(data: Record<string, unknown>): Promise<ApiResponse<PixEnvelopeCopia | null>> {
        return this.post('/api/v1/Pix/Transferencias/FazerDevolucao', data);
    }

    obterMotivosInfracao(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/Infracao/ObterMotivos');
    }

    obterTransacoesRecentes(): Promise<ApiResponse<PixListaCopia | null>> {
        return this.get('/api/v1/Pix/Transferencias/ObterTransacoesRecentes');
    }
}
