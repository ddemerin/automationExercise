import { selectors } from './selectors.js';

export class ProductCards {
    get productSection () {
        return selectors.productSection();
    }
    get productGrid () {
        return selectors.productGrid();
    }
    get productCard () {
        return selectors.productCard();
    }
    get productName () {
        return selectors.productName()
    }
    get hoverProductName () {
        return selectors.hoverProductName();
    }
    get productPrice () {
        return selectors.productPrice();
    }
    get hoverProductPrice () {
        return selectors.hoverProductPrice();
    }
    get addToCartButton () {
        return selectors.addToCartButton();
    }
    get hoverAddToCart () {
        return selectors.hoverAddToCart();
    }
    get viewCartButton () {
        return selectors.viewCartButton();
    }
}