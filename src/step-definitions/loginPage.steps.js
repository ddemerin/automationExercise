import { Given, When, Then } from '@wdio/cucumber-framework';

import { PageIndex } from '../pages/pageIndex.js';

import credentials from '../data/credentials.js';
import urls from '../data/urls.js';

const loginPage = new PageIndex().LoginPage;

Given('the user navigates to the Login page', async function () {
    await browser.url(urls.loginPage);
});

Then('the Login page loads', async function () {
    await loginPage.loginToYourAccountLabel.waitForDisplayed({ timeout: 3000 });
    await loginPage.emailLoginField.waitForDisplayed({ timeout: 3000});
    await loginPage.passwordLoginField.waitForDisplayed({ timeout: 3000 });
    await loginPage.newUserSignupLabel.waitForDisplayed({ timeout: 3000 });
    await loginPage.nameSignupField.waitForDisplayed({ timeout: 3000 });
    await loginPage.emailSignupField.waitForDisplayed({ timeout: 3000 });
    await loginPage.loginButton.waitForDisplayed({ timeout: 3000 });
});

When('the user enters their email address on the Login page', async function () {
    await loginPage.emailLoginField.setValue(credentials.emailAddress);
})

When('the user enters their password on the Login page', async function () {
    await loginPage.passwordLoginField.setValue(credentials.password);
})

When('the user clicks on the Login button on the Login page', async function () {
    await loginPage.loginButton.click();
})

