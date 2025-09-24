import { test, expect } from '@playwright/test';

test('Cek halaman utama Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  
  await expect(page).toHaveTitle(/Playwright/);
});