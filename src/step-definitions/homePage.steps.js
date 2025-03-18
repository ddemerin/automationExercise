import { Given, Then, When } from '@wdio/cucumber-framework';

import { PageIndex } from '../pages/pageIndex.js';

import testData from '../data/testData.js';

const homePage = new PageIndex().HomePage;

Given('the user navigates to the Homepage', async function () {
    await broswer.url(testData.website);
})

Then('the Homepage loads', async function () {
    await homePage.title.waitForDisplayed({ timeout: 3000 });
})