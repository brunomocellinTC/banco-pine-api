import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { getEnv } from './Scripts/test-data';

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

const env = getEnv();

export default defineConfig({
  testDir: './Tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
        detail: true,
        suiteTitle: true,
        environmentInfo: {
          framework: 'Playwright',
          baseURL: 'https://reqres.in',
          env,
        },
      },
    ],
  ],

  use: {
    baseURL: 'https://reqres.in',

    extraHTTPHeaders: {
      'x-api-key': process.env.REQRES_API_KEY || '',
      'X-Reqres-Env': env,
    },
  },
});
