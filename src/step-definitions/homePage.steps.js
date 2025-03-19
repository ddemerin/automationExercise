import { Given, Then, When } from '@wdio/cucumber-framework';

import { PageIndex } from '../pages/pageIndex.js';

import urls from '../data/urls.js';

const homePage = new PageIndex().HomePage;

Given('the user navigates to the Homepage', async function () {
    await browser.url(urls.website);
})

Then('the Homepage loads', async function () {
    await homePage.title.waitForDisplayed({ timeout: 3000 });
})

Then ('the Featured Items section displays', async function () {
    await homePage.featuredItemsSection.waitForDisplayed({ timeout: 3000 });
})

Then ('the Recommended Items section displays', async function () {
    await homePage.recommendedItemsSection.waitForDisplayed({ timeout: 3000 })
})