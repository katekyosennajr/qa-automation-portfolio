// pages/shopPage.js
class ShopPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = '#add-to-cart-sauce-labs-backpack'; // tombol tambah produk
    this.cartIcon = '.shopping_cart_link'; // icon cart di pojok kanan atas
  }

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { ShopPage };
