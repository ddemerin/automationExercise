import { selectors } from './selectors.js';

export class HomePage {
    get title () {
        return selectors.title();
    }
    get featuredItemsSection () {
        return selectors.featuredItemsSection();
    }
    get featuredItemsHeaderText () {
        return selectors.featuredItemsHeaderText();
    }
    get recommendedItemsSection () {
        return selectors.recommendedItemsSection();
    }
    get recommendedItemsHeaderText () {
        return selectors.recommendedItemsHeaderText();
    }
}