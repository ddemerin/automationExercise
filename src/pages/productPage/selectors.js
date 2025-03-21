import { selectors as productSelectors } from '../../components/products/selectors.js';

export const selectors = {
    allProductsHeader: () => {
        const selector = '[class="title text-center"]'
        return $(selector);
    },
    // blueTop: () => {
    //     const selector = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > p'
    //     return $(selector);
    // }
    ...productSelectors,
    productName: (name) => {
        const selector = `.productinfo.text-center p*=${name}`
        return $(selector);
    },
    productPrice: (price) => {
        const selector = `.productinfo.text-center h2*=${price}`
        return $(selector);
    },
    
}