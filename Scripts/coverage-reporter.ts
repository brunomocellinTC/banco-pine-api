import fs from 'fs';
import path from 'path';
import type { FullConfig, FullResult, Reporter, Suite, TestCase } from '@playwright/test/reporter';
import catalog from '../Data/endpoint-coverage.json';

/** Conta método+rota uma única vez; casos negativos e pendências não viram sucesso. */
export default class EndpointCoverageReporter implements Reporter {
  private suite?: Suite;
  onBegin(_config: FullConfig, suite: Suite): void { this.suite = suite; }
  onEnd(_result: FullResult): void {
    const tests = this.suite?.allTests() || [];
    const annotated = (test: TestCase, type: string, value?: string) => test.annotations.some(a =>
      a.type === type && (value === undefined || a.description === value));
    if (!tests.some(t => annotated(t, 'operation'))) return;
    const passed = (test: TestCase) => test.outcome() === 'expected' && test.results.some(r => r.status === 'passed');
    const rows = catalog.operations.map(operation => {
      const selected = tests.filter(t => annotated(t, 'operation', operation.operation));
      const executable = selected.filter(t => !annotated(t, 'pending'));
      const executed = executable.filter(t => t.results.some(r => r.status !== 'skipped'));
      const success = executable.some(t => annotated(t, 'scenario', 'success') && passed(t));
      const error = executable.some(t => annotated(t, 'scenario', 'error') && passed(t));
      const failures = executable.some(t => t.results.some(r =>
        ['failed', 'timedOut', 'interrupted'].includes(r.status)));
      const reasons = [...new Set(selected.flatMap(t => t.annotations.filter(a => ['pending', 'coverage-pending'].includes(a.type))
        .map(a => a.description || 'Pendente de massa')))];
      return {...operation, selectedScenarios: selected.length, executedScenarios: executed.length,
        approvedScenarios: executable.filter(passed).length,
        approvedSuccess: success, approvedError: error, failures, pendingReasons: reasons,
        state: failures ? 'falhou' : success && !reasons.length ? 'sucesso validado' :
          success ? 'contrato aprovado; validação funcional pendente' :
          error ? 'erro validado; sucesso pendente' : reasons.length ? 'pendente' :
            executed.length ? 'executado sem aprovação' : 'não selecionado'};
    });
    const summary = {
      totalOperations: rows.length,
      activeOperations: rows.filter(r => !r.deprecated).length,
      deprecatedOperations: rows.filter(r => r.deprecated).length,
      operationsExecuted: rows.filter(r => r.executedScenarios > 0).length,
      operationsWithApprovedScenario: rows.filter(r => r.approvedScenarios > 0).length,
      operationsWithApprovedSuccess: rows.filter(r => r.approvedSuccess).length,
      operationsWithApprovedError: rows.filter(r => r.approvedError).length,
      operationsWithApprovedSuccessAndNoPending: rows.filter(r => r.approvedSuccess && !r.pendingReasons.length && !r.failures).length,
      operationsWithPending: rows.filter(r => r.pendingReasons.length > 0).length,
      operationsWithFailures: rows.filter(r => r.failures).length,
      operationsNotSelected: rows.filter(r => !r.selectedScenarios).length,
    };
    const dir = path.resolve(process.cwd(), 'test-results');
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(path.join(dir, 'endpoint-coverage.json'), JSON.stringify({
      counting: catalog.counting, summary, operations: rows,
    }, null, 2) + '\n');
    const markdown = [
      '# Cobertura de operações Pine', '',
      `Total do Swagger: **${summary.totalOperations} operações** (${summary.activeOperations} ativas; ${summary.deprecatedOperations} depreciadas).`, '',
      `Executadas: **${summary.operationsExecuted}**; com cenário aprovado: **${summary.operationsWithApprovedScenario}**; sucesso aprovado sem pendência: **${summary.operationsWithApprovedSuccessAndNoPending}**.`, '',
      'Operação = método + rota. Cenários de erro, filtros e repetições não aumentam o total de operações. Pendências não são aprovadas. Sucesso aprovado refere-se às verificações implementadas; não certifica todas as regras de negócio.', '',
      'Sucesso, erro, falha e pendência são medidas que podem se sobrepor na mesma operação.', '',
      '| Grupo | Operação | Sucesso aprovado | Erro aprovado | Situação / pendência |',
      '|---|---|---|---|---|',
      ...rows.map(r => `| ${r.group} | ${r.operation} | ${r.approvedSuccess ? 'sim' : 'não'} | ${r.approvedError ? 'sim' : 'não'} | ${[r.state, ...r.pendingReasons].join('; ')} |`), '',
    ].join('\n');
    fs.writeFileSync(path.join(dir, 'endpoint-coverage.md'), markdown);
    console.log(`\nCobertura Pine: ${summary.totalOperations} operações no Swagger; ${summary.operationsExecuted} executadas; ` +
      `${summary.operationsWithApprovedSuccessAndNoPending} com sucesso aprovado sem pendência. ` +
      `Detalhes: test-results/endpoint-coverage.md\n`);
  }
}
