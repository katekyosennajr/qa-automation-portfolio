// pages/checkoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
    this.firstNameField = '#first-name';
    this.lastNameField = '#last-name';
    this.postalCodeField = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.successMsg = '.complete-header';
  }

  async checkout(firstName, lastName, postalCode) {
    await this.page.click(this.checkoutBtn);
    await this.page.fill(this.firstNameField, firstName);
    await this.page.fill(this.lastNameField, lastName);
    await this.page.fill(this.postalCodeField, postalCode);
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
  }

  async getSuccessMessage() {
    return this.page.textContent(this.successMsg);
  }
}

module.exports = { CheckoutPage };
