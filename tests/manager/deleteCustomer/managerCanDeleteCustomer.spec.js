import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { BankManagerMainPage } from '../../../src/pages/manager/BankManagerMainPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';


  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const postCode = faker.location.zipCode()


test.beforeEach(async ({ page }) => {
  /* 
  Pre-conditons:
  1. Open Add Customer page.
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */
const addCustomerPage = new AddCustomerPage(page)

  await addCustomerPage.openAddCustomerPage()
  await addCustomerPage.waitForAddCustomerPage()
  await addCustomerPage.fillFirstNameField(firstName)
  await addCustomerPage.fillLastNameField(lastName)
  await addCustomerPage.fillPostCodeField(postCode)
  await addCustomerPage.clickAddCustomerButton()

});

test('Assert manager can delete customer', async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page)
  const bankManager = new BankManagerMainPage(page)
  const customerListPage = new CustomersListPage(page)

  /* 
  Test:
  1. Open Customers page.
  2. Click [Delete] for the row with customer name.
  3. Assert customer row is not present in the table. 
  4. Reload the page.
  5. Assert customer row is not present in the table. 
  */

  await bankManager.openManagerMainPage()
  await bankManager.clickCustomerListLink()
  await customerListPage.clickDeleteCustomerButton()
  await addCustomerPage.elementByTextHidden(lastName)
  await page.reload()
  await addCustomerPage.elementByTextHidden(lastName)

});
