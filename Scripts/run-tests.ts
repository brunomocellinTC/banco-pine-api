const { spawnSync } = require('child_process');

const env = process.argv[2];
const extraArgs = process.argv.slice(3);

if (!env || !['producao', 'homologacao'].includes(env)) {
  console.error('Informe o ambiente: producao ou homologacao');
  process.exit(1);
}

const result = spawnSync(
  'npx',
  ['playwright', 'test', ...extraArgs],
  {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, ENV: env },
  }
);

process.exit(result.status ?? 1);
