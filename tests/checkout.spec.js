// tests/checkout.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ShopPage } = require('../pages/shopPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test.describe('Checkout Flow', () => {
  let loginPage, shopPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    shopPage = new ShopPage(page);
    checkoutPage = new CheckoutPage(page);

    // login dulu
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('berhasil checkout setelah tambah produk', async ({ page }) => {
    await shopPage.addProductToCart();
    await shopPage.goToCart();

    await checkoutPage.checkout('Budi', 'Santoso', '12345');

    const successMsg = await checkoutPage.getSuccessMessage();
    await expect(successMsg).toContain('Thank you for your order!');
  });
});
