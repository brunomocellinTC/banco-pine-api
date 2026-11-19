import { defineConfig } from 'allure';

export default defineConfig({
  name: 'Automacao API',
  output: './allure-report',
  plugins: {
    awesome: {
      options: {
        reportName: 'Automacao API',
        reportLanguage: 'pt',
        groupBy: ['parentSuite', 'suite', 'subSuite'],
        appendTitlePath: false,
        singleFile: process.env.ALLURE_SINGLE_FILE === '1',
      },
    },
  },
});
