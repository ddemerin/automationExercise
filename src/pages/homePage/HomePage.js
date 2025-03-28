import { selectors } from './selectors.js';

export class HomePage {
    get title () {
        return selectors.title();
    }
    get featuredItemsSection () {
        return selectors.productSection();
    }
    get featuredItemsHeaderText () {
        return selectors.productSectionHeaderText();
    }
    get featuredItemsGrid () {
        return selectors.productGrid();
    }
    get featuredItemsCard () {
        return selectors.productCard();
    }
    get featuredItemsName () {
        return selectors.productName();
    }
    get featuredItemsHoverName () {
        return selectors.hoverProductName();
    }
    get featuredItemsPrice () {
        return selectors.productPrice();
    }
    get featuredItemsHoverPrice () {
        return selectors.hoverProductPrice();
    }
    get featuredItemsAddToCart () {
        return selectors.addToCartButton();
    }
    get featuredItemsHoverAddToCart () {
        return selectors.hoverAddToCart();
    }
    get featuredItemsViewCart () {
        return selectors.viewCartButton();
    }
    get recommendedItemsSection () {
        return selectors.recommendedItemsCarousel();
    }
    get recommendedItemsHeaderText () {
        return selectors.recommendedItemsHeaderText();
    }
}