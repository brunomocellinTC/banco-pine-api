import { test } from '@playwright/test';
import type { HarCase } from './har-cases';
export async function attachHarMetadata(c: HarCase, actualStatus: number): Promise<void> {
  await test.info().attach('HAR versus execução (sem dados sensíveis)', {
    contentType:'application/json',
    body:JSON.stringify({method:c.method,route:c.route,group:c.group,
      source:'HAR 18/11/2026',observedStatus:c.status,actualStatus,
      documentedStatus:c.documented,queryNames:Object.keys(c.query),
      pathNames:Object.keys(c.pathParams),observations:c.observations},null,2),
  });
}
