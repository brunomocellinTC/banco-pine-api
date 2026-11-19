import { test } from '@playwright/test';
import { executeScenario, getDomainCases } from './support/get-fixtures';

for (const group of getDomainCases('Home')) {
  test.describe(group.group, () => {
    for (const endpoint of group.endpoints) {
      test.describe(endpoint.route, () => {
        for (const c of endpoint.scenarios) {
          test(c.title, c.details, async ({request, playwright}, testInfo) => {
            await executeScenario(c.scenario, {request, playwright}, testInfo);
          });
        }
        for (const pending of endpoint.pending) {
          test(pending.title, pending.details, () => { test.fixme(true, pending.reason); });
        }
      });
    }
  });
}
