import { selectors } from "./selectors.js";

export class ProductPage {
    get salesImage () {
        return selectors.salesImage();
    }
    get searchBar () {
        return selectors.searchBar();
    }
    get searchButton () {
        return selectors.searchButton();
    }
    get allProductsHeader () {
        return selectors.productSectionHeaderText();
    }
    get productName () {
        return selectors.productName();
    }
    get productHoverName () {
        return selectors.hoverProductName();
    }
    get productPrice () {
        return selectors.productPrice();
    }
    get productHoverPrice () {
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