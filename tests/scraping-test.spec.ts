// tests/scraping-test.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Toscrape.com functionality', () => {

  test('should display quotes and allow navigation', async ({ page }) => {
    // 1. Navigojmë te faqja me citate
    await page.goto('http://quotes.toscrape.com/');

    // 2. Verifikojmë që titulli i faqes është i saktë
    await expect(page).toHaveTitle('Quotes to Scrape');

    // 3. Verifikojmë që të paktën një citat është i dukshëm në faqe
    // Ne kërkojmë një element me klasën CSS '.quote'
    await expect(page.locator('.quote').first()).toBeVisible();

    // 4. Klikojmë butonin "Next" për të lundruar te faqja tjetër
    await page.getByRole('link', { name: 'Next →' }).click();

    // 5. Verifikojmë që kemi lundruar me sukses duke kontrolluar URL-në
    // Presim që URL-ja të përfundojë me '/page/2/'
    await expect(page).toHaveURL('http://quotes.toscrape.com/page/2/');
  });

});