// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Login Feature', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
  });

  test('berhasil login dengan data login yang valid', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('gagal login dengan data login yang salah', async ({ page }) => {
    await loginPage.login('user_salah', 'password_salah');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  });
});
