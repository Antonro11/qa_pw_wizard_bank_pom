import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CustomerLoginPage } from '../../../src/pages/customer/CustomerLoginPage';
import { CustomerAccountPage } from '../../../src/pages/customer/CustomerAccountPage';
import { TransactionsPage } from '../../../src/pages/customer/TransactionsPage';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';

let addCustomerPage

/*       Bug on the website, not possible to check balance, because balance of existing users shows different values  


test('Assert the deposit can be opened', async ({ page }) => {

  const customerLoginPage = new CustomerLoginPage(page);
  const accountPage = new CustomerAccountPage(page);
  const transactionsPage = new TransactionsPage(page);

    addCustomerPage = new AddCustomerPage(page)



  await customerLoginPage.open();
  await customerLoginPage.selectCustomer('Harry Potter');
  await customerLoginPage.clickLoginButton();
  await accountPage.clickDepositButton();
  await page.waitForTimeout(2000)

  const deposit = faker.number.int({ min: 50, max: 100 })
  const withdraw = faker.number.int({ min: 10, max: 40 })
  const balanceBeforeWithdraw = await accountPage.returnCurrentBalance()
  const balanceAfterWithdraw = JSON.stringify(parseInt(deposit) + 60 - parseInt(withdraw))

  await accountPage.fillAmountInputField(deposit);
  await accountPage.clickDepositFormButton();
  await accountPage.assertDepositSuccessfulMessageIsVisible();
  await accountPage.clickWithdrawlButton()
  await accountPage.fillWithdrawField(withdraw)
  await accountPage.clickWithdrawlFormButton()
  await accountPage.balanceVisible()
  console.log(deposit, withdraw, balanceBeforeWithdraw, balanceAfterWithdraw)
  await addCustomerPage.elementTextDataEqual(accountPage.balance, balanceAfterWithdraw)

});   */