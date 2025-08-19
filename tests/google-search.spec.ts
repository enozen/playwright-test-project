// tests/google-search.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Google Search Functionality', () => {
  test('sollte Benutzern ermöglichen, zu suchen und Ergebnisse zu sehen', async ({ page }) => {
    // 1. Navigation zur Suchmaschine
    await page.goto('https://www.google.com/');

    // 2. Eingabe des Suchbegriffs in das Suchfeld
    await page.getByRole('combobox', { name: 'Suchen' }).fill('Playwright Framework');
    
    // 3. Auslösen der Suche durch Drücken der "Enter"-Taste
    await page.keyboard.press('Enter');

    // 4. Verifizierung, dass die Ergebnisseite geladen wurde
    await expect(page.locator('#search')).toBeVisible();
  });
});