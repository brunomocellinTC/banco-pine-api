import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '.env'), quiet: true});
const baseURL = process.env.API_BASE_URL?.trim();
const loginHash = process.env.LOGIN_HASH?.trim();

export default defineConfig({
  testDir: './Tests',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: 1,
  reporter: [['list'], ['./Scripts/coverage-reporter.ts'], ['allure-playwright', {resultsDir: 'allure-results', detail: true, suiteTitle: true,
    environmentInfo: {framework: 'Playwright', contrato: 'swagger.json'}}]],
  use: {
    baseURL,
    extraHTTPHeaders: loginHash ? {'x-login-hash': loginHash} : {},
  },
});
