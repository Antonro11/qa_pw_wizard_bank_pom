import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.deleteCustomerButton = page.locator('tr').last().locator('button').filter({hasText:'Delete'})
    this.searchField = page.getByPlaceholder('Search Customer')
    this.getCustomerFirstName = page.locator('tr').last().locator('td').first()
    this.getCustomerLastName = page.locator('tr').last().locator('td').nth(1)
    this.getCustomerPostCode = page.locator('tr').last().locator('td').nth(2)
    this.getCustomerNumber = page.locator('tr').last().locator('td').nth(3)
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

   async waitCustomerListPage () {
    this.page.waitForURL('/angularJs-protractor/BankingProject/#/manager/list');
  }

   async clickDeleteCustomerButton () {
    await this.deleteCustomerButton.click()
  }

  async fillSearchField (data) {
   await  this.searchField.fill(data)
  }

  async assertCustomerNumberNotEmpty () {
    const value = await this.getCustomerNumber.textContent()
  expect(value.length).toBeGreaterThan(0)
  }

}


