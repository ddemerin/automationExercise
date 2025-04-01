export const selectors = {
    brandSection: () => {
        const selector = '[class="brands_products"]'
        return $(selector);
    },
    brandSectionHeaderText: () => {
        const selector = '[class="brands_products"] h2'
        return $(selector);
    },
    brandName: (name) => {
        const selector = `.nav-stacked li:contains(${name})`
        return $(selector);
    },
    brandCount: (name, count) => {
        const selector = `.nav-stacked li:contains(${name}) + .pull-right:contains(${count})`
        return $(selector);
    }
}