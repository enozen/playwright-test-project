import { test, expect } from '@playwright/test';

test.describe('Google Search Functionality', () => {
  test('should allow users to search and see results', async ({ page }) => {
    // Navigieren zur Suchmaschine
    await page.goto('https://www.google.com/');

    // Das Suchfeld finden (unabhängig von der Sprache) und den Suchbegriff eingeben
    await page.locator('[aria-label="Search"]').fill('Playwright Framework');
    
    // Die Suche durch Drücken der "Enter"-Taste auslösen
    await page.keyboard.press('Enter');

    // Verifizieren, dass die Ergebnisseite geladen wurde
    await expect(page.locator('#search')).toBeVisible();
  });
});
