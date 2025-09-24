const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { MenuPage } = require('../pages/menuPage');

test('Logout berhasil', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');

  await menuPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
