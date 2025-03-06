import { Given, When, Then } from '@wdio/cucumber-framework';

import { PageIndex } from '../pages/pageIndex.js';

import testData from '../data/testData.js';

const loginPage = new PageIndex().LoginPage;

Given('AE login page launches', async function () {
    await browser.url(testData.loginPage);
});

Then('AE login page loads', async function () {
    await loginPage.emailLoginField.waitForDiplayed({ timeout: 3000})
});

