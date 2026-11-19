import { test } from '@playwright/test';
import { requireApiEnvironment } from './support/openapi';
import { compareReplayBody, decodeReplayBody, loadHarReplayCases, replayExpectedBody, replayRequest } from './support/har-replay';

// Opt-in: mantém a suíte atual e seu total independentes desta auditoria exata de dados.
if (process.env.RUN_HAR_REPLAY === '1') {
  for (const c of loadHarReplayCases()) {
    test(`HAR 1:1 | ${c.id} | ${c.method} ${c.pathname} | observado ${c.entry.response.status}`,
      async ({playwright}, testInfo) => {
        test.skip(!['GET', 'HEAD', 'OPTIONS'].includes(c.method) && process.env.RUN_MUTATIONS !== '1',
          'Replay de escrita exige RUN_MUTATIONS=1; inclusive POST que antes retornou erro.');
        test.skip(c.entry.response.status >= 500 && process.env.RUN_HAR_500 !== '1',
          'HAR com 5xx exige RUN_HAR_500=1 e continua reprovando se houver 5xx.');
        const {baseUrl, loginHash} = requireApiEnvironment();
        const expectedStatus = c.override.expectedStatus ?? c.entry.response.status;
        if (expectedStatus !== c.entry.response.status &&
            !Object.prototype.hasOwnProperty.call(c.override, 'expectedBody')) {
          throw new Error('Alterar status esperado exige expectedBody explícito para o novo resultado.');
        }
        const expected = replayExpectedBody(c);
        const input = replayRequest(c);
        const authenticated = c.entry.request.headers.some(h => h.name.toLowerCase() === 'x-login-hash');
        const headers: Record<string, string> = authenticated ? {'x-login-hash': loginHash} : {};
        if (input.contentType) headers['content-type'] = input.contentType;
        const context = await playwright.request.newContext({baseURL: baseUrl, extraHTTPHeaders: headers});
        try {
          const response = await context.fetch(input.url, {
            method: c.method, data: input.data, maxRedirects: 0, failOnStatusCode: false,
          });
          const actual = decodeReplayBody(await response.body(), response.headers()['content-type'] || '');
          const differences = compareReplayBody(expected, actual, c.override.ignore);
          const actualStatus = response.status();
          await testInfo.attach('Comparação HAR 1:1 sem valores sensíveis', {
            contentType: 'application/json', body: JSON.stringify({
              id: c.id, observedStatus: c.entry.response.status, expectedStatus, actualStatus,
              overridden: Object.keys(c.override), ignoredPointers: c.override.ignore || [],
              automaticIgnoredPointers: ['/requestId', '/reqId', '/Request-Id'],
              differences: differences.slice(0, 30), differenceCount: differences.length,
            }, null, 2),
          });
          const issues: string[] = [];
          if (actualStatus >= 500) issues.push('5xx é defeito; nunca aprova por estar presente no HAR');
          if (actualStatus !== expectedStatus) issues.push(`HTTP esperado ${expectedStatus}, recebido ${actualStatus}`);
          issues.push(...differences);
          if (issues.length) throw new Error(`Replay divergente (${issues.length}): ${issues.slice(0, 20).join('; ')}`);
        } finally { await context.dispose(); }
      });
  }
}
