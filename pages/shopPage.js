// pages/shopPage.js
class ShopPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = '#add-to-cart-sauce-labs-backpack'; // tombol tambah produk
    this.cartIcon = '.shopping_cart_link'; // icon cart di pojok kanan atas
  }
  
// filter produk berdasarkan harga rendah ke tinggi
  async filterPriceLowToHigh() {
    await this.page.selectOption('.product_sort_container', 'lohi'); // value dari dropdown
  }

// ambil nama produk yang tampil
  async getProductNames() {
    return this.page.$$eval('.inventory_item_name', items => items.map(i => i.textContent));
  }

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { ShopPage };
