export const selectors = {
    productSection: () => {
        const selector = '[class="features_items"]';
        return $(selector);
    },
    productSectionHeaderText: () => {
        const selector = '[class="features_items"] > h2';
        return $(selector);
    },
    productGrid: () => {
        const selector = '.features_items .col-sm-4';
        return $(selector);
    },
    productCard: (name) => {
        const selector = `.productinfo.text-center p:contains(${name})`;
        return $(selector).closest('.product-image-wrapper');
    },
    productName: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.productinfo.text-center p');
    },
    hoverProductName: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.overlay-content p');
    },
    productPrice: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.productinfo.text-center h2');
    },
    productImage: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.productinfo.text-center img');
    },
    hoverProductPrice: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.overlay-content h2');
    },
    addToCartButton: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.productinfo.text-center .add-to-cart');
    },
    hoverAddToCart: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.overlay-content .add-to-cart');
    },
    viewCartButton: (name) => {
        const selector = this.productCard(name);
        return $(selector).find('.choose');
    }
}