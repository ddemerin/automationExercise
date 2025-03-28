export const selectors = {
    allProductsHeader: () => {
        const selector = '[class="title text-center"]'
        return $(selector);
    },
    salesImage: () => {
        const selector = '[id="sale_image"]'
        return $(selector);
    },
    searchBar: () => {
        const selector = '[id="search_product"]'
        return $(selector);
    },
    searchButton: () => {
        const selector = '[id="submit_search"]'
        return $(selector);
    }
}