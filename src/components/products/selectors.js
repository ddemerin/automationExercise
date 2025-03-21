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
    }
}