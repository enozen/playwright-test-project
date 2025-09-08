// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { 
      open: 'never',
      outputFolder: 'playwright-report'
    }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...require('@playwright/test').devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...require('@playwright/test').devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...require('@playwright/test').devices['Desktop Safari'] },
    },
  ],
};
