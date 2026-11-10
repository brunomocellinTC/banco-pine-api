import { defineConfig } from 'allure';

export default defineConfig({
  name: 'Automacao API',
  output: './allure-report',
  plugins: {
    awesome: {
      options: {
        reportName: 'Automacao API',
        reportLanguage: 'pt',
        singleFile: process.env.ALLURE_SINGLE_FILE === '1',
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8lOIr8rOXcnt8UkfVq91cE8vjvjaMVN8nUn_KKG_n3xcpDHWcoxmk_Q&s=10",
      },
    },
  },
});