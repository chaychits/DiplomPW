// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Загружаем .env только при локальном запуске
// В Jenkins/GitHub Actions переменные будут приходить через Secrets
if (!process.env.CI) {
    dotenv.config({ path: '.env' });
}

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // Где лежат тесты
  testDir: './tests',

  // Запускать тесты параллельно
  fullyParallel: true,

  // Запрет test.only в CI
  forbidOnly: !!process.env.CI,

  // Повторять упавшие тесты только в CI
  retries: process.env.CI ? 2 : 0,

  // В CI один поток, локально максимум доступных
  workers: process.env.CI ? 1 : undefined,

  // Отчеты
  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright']
  ],

  // Общие настройки
  use: {

    // базовый URL можно брать из .env
    baseURL: process.env.UI_URL,

    // Сохранять трассировку при падении
    trace: 'on-first-retry',

    // Скриншот только при ошибке
    screenshot: 'only-on-failure',
  },


  // Браузеры
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],


  // Если понадобится запускать локальный сервер
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});