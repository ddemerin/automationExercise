import { selectors as productSelectors } from '../productCards/selectors.js';

export const selectors = {
    ...productSelectors,
    salesImage: () => {
        const selector = '[id="sale_image"]'
        return $(selector);
    },
    searchBar: () => {
        const selector = '[id="search_product"]'
        return $(selector);
    },
    searchButton: () => {
        const selector = '[id="submit_search"]'
        return $(selector);
    }  
}