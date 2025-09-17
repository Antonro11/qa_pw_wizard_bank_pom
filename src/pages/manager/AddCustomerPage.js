import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByPlaceholder('First Name')
    this.lastNameField = page.getByPlaceholder('Last Name')
    this.postCodeField = page.getByPlaceholder('Post Code')
    this.addCustomerButton = page.locator('button').filter({hasText:'Add Customer'}).last()
    this.customersListLink = page.locator('button').filter({hasText:'Customers'})

  }

  async openAddCustomerPage() {
    await this.page.goto(
      'angularJs-protractor/BankingProject/#/manager/addCust',
    );
  }

  async waitForAddCustomerPage () {
    await this.page.waitForURL('angularJs-protractor/BankingProject/#/manager/addCust')
  }

  async fillFirstNameField (data) {
    await this.firstNameField.fill(data)
  }

  async fillLastNameField (data) {
    await this.lastNameField.fill(data)
  }

  async fillPostCodeField (data) {
    await this.postCodeField.fill(data)
  }

  async clickAddCustomerButton () {
    await this.addCustomerButton.click()
  }

  async clickCustomersListLink () {
    await this.customersListLink.click()
  }


  async elementTextDataEqual (element, text) {
    await expect(element).toHaveText(text)
  }

  async elementTextDataNotEqual (element, text) {
    await expect(element).not.toHaveText(text)
  }

  async assertCustomerNumberEmpty () {
    await expect(this.getCustomerNumber).toHaveText('')
  }

  async elementByTextHidden(text) {
    await expect(this.page.getByText(text)).toBeHidden()
  }

  async assertOneRowSearch () {
    await expect(this.page.locator('tbody tr').nth(1)).toBeHidden()
  }


}
