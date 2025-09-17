import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currency = page.locator('select#currency')
    this.customer = page.locator('select#userSelect')
    this.processButton = page.locator('button').filter({hasText:'Process'})
  }

  async openManagerAccount() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }

  async waitForOpenManagerAccount () {
    await this.page.waitForURL('/angularJs-protractor/BankingProject/#/manager/openAccount')
  }

  async selectCurrency (money) {
    await this.currency.selectOption({ label: money});
  }

  async assertCurrency (text) {
    await expect(this.currency).toHaveValue(text);
  }

  async selectCustomer (person) {
    await this.customer.selectOption(person)
  }

  async clickProcessButton () {
    await this.processButton.click()
  }
 
}
