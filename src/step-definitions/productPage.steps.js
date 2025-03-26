// import { Given, When, Then } from '@wdio/cucumber-framework';

// import { PageIndex } from '../pages/pageIndex.js';

// import testData from '../data/testData.js';

// const productPage = new PageIndex().ProductPage;

// Given('the user navigates to the Product Page', async function () {
//     await browser.url(testData.productPage);
// })

// Then('the Product page loads', async function () {
//     await productPage.allProducts.waitForDisplayed({ timeout: 3000 });
// })

// Given('the Product page has a product header', async function () {
//     await productPage.getValue(productPage.allProducts);
// })

// Then('the product header matches the expected value', async function () {
//     await expect(productPage.allProducts).toHaveTitle(testData.expectedProductHeader);
// })