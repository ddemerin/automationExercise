export const selectors = {
    categorySection: () => {
        const selector = '.category-products'
        return $(selector);
    },
    categorySectionHeaderText: () => {
        const selector = '.left-sidebar > h2'
        return $(selector);
    },
    categoryName: (name) => {
        const selector = `.panel-heading .panel-title a:contains(${name})`
        return $(selector);
    },
    expandButton: (name) => {
        const selector = `.panel-heading .panel-title:contains(${name}) + .badge`
        return $(selector);
    }
}