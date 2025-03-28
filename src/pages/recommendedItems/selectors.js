export const selectors = {
    recommendedItemsSection: () => {
        const selector = '[class="recommended_items"] '
        return $(selector);
    },
    recommendedItemsHeaderText: () => {
        const selector = '[class="recommended_items"] > h2'
        return $(selector);
    },
    recommendedItemsCarousel: () => {
        const selector = '[class="recommened-item-carousel"]'
        return $(selector);
    }
}