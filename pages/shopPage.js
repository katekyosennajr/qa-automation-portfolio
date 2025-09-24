// pages/shopPage.js
// Fokus: tambah produk ke keranjang & buka halaman cart

class ShopPage {
  constructor(page) {
    this.page = page;
    this.firstProductAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    // klik tombol "Add to cart" di produk pertama
    await this.page.click(this.firstProductAddBtn);
  }

  async goToCart() {
    // klik ikon keranjang di pojok kanan atas
    await this.page.click(this.cartIcon);
  }
}

module.exports = { ShopPage };
