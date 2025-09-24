const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ShopPage } = require('../pages/shopPage');

test.describe('Filter Produk', () => {
  let loginPage, shopPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    shopPage = new ShopPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('filter harga dari rendah ke tinggi', async ({ page }) => {
    await shopPage.filterPriceLowToHigh();
    const names = await shopPage.getProductNames();
    console.log(names); // cek urutan produk
    expect(names.length).toBeGreaterThan(0);
  });
});
