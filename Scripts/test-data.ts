import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { TestData } from '../Models/product.model';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env'),
});

const VALID_ENVS = ['producao', 'homologacao'] as const;

export type AppEnv = (typeof VALID_ENVS)[number];

export function getEnv(): AppEnv {
  const env = (process.env.ENV || 'producao').toLowerCase();

  if (!VALID_ENVS.includes(env as AppEnv)) {
    throw new Error(
      `Ambiente inválido: "${process.env.ENV}". Valores aceitos: ${VALID_ENVS.join(', ')}.`
    );
  }

  return env as AppEnv;
}

export function getTestData(): TestData {
  const env = getEnv();
  const filePath = path.resolve(__dirname, '..', 'Data', `${env}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Massa de dados não encontrada para o ambiente "${env}": ${filePath}`
    );
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as TestData;
}
