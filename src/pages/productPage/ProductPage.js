import { selectors } from "./selectors.js";

export class ProductPage {
    get allProductsHeader () {
    return selectors.allProductsHeader();
    }
    get salesImage () {
        return selectors.salesImage();
    }
    get searchBar () {
        return selectors.searchBar();
    }
    get searchButton () {
        return selectors.searchButton();
    }
}