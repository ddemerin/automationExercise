import { selectors as productSelectors } from '../productCards/selectors.js';
import { selectors as recommendedItemsSelectors } from '../recommendedItems/selectors.js';

export const selectors = {
    title: () => {
        const selector = '[class="logo pull-left"]'
        return $(selector);
    },
    ...productSelectors,
    ...recommendedItemsSelectors
}