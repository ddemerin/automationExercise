import { selectors as productSelectors } from '../../components/products/selectors.js';

export const selectors = {
    productSection: () => {
        const selector = '[class="features_items"]'
        return $(selector);
    },
    productGrid: () => {
        const selector = '.features_items .col-sm-4'
        return $(selector);
    },
    productCard: () => {
        const selector = '.product-image-wrapper'
        return $(selector);
    },
    ...productSelectors,
    productName: (name) => {
        const selector = '.productinfo.text-center p'
        return $(selector);
    },
    hoverProductName: (name) => {
        const selector = '.overlay-content p'
        return $(selector);
    },
    productPrice: (price) => {
        const selector = '.productinfo.text-center h2'
        return $(selector);
    },
    hoverProductPrice: (price) => {
        const selector = '.overlay-content h2'
        return $(selector);
    },
    addToCartButton: () => {
        const selector = '.productinfo.text-center .add-to-cart'
        return $(selector);
    },
    hoverAddToCart: () => {
        const selector = '.overlay-content .add-to-cart'
        return $(selector);
    },
    viewCartButton: () => {
        const selector = '.choose'
        return $(selector);
    }
}