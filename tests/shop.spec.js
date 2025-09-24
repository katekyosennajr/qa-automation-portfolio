// tests/shop.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ShopPage } = require('../pages/shopPage');

test.describe('Fitur Belanja', () => {
  let loginPage;
  let shopPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    shopPage = new ShopPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('tambah produk ke cart', async ({ page }) => {
    await shopPage.addProductToCart();
    await shopPage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
});
