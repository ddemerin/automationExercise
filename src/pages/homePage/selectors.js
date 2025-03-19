export const selectors = {
    title: () => {
        const selector = '[class="logo pull-left"]'
        return $(selector);
    },
    featuredItemsSection: () => {
        const selector = '[class="features_items"]'
        return $(selector);
    },
    featuredItemsHeaderText: () => {
        const selector = '[class="features_items"] > h2'
        return $(selector);
    },
    recommendedItemsSection: () => {
        const selector = '[class="recommended_items"]'
        return $(selector);
    },
    recommendedItemsHeaderText: () => {
        const selector = '[class="recommended_items"] > h2'
        return $(selector);
    }
}