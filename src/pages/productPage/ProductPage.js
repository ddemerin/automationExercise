import { selectors } from "./selectors.js";

export class ProductPage {
    get blueTop () {
        return selectors.blueTop();
    }

    get allProducts () {
        return selectors.allProducts();
    }
}