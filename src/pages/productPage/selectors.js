export const selectors = {
    allProductsHeader: () => {
        const selector = '[class="title text-center"]'
        return $(selector);
    },
    // blueTop: () => {
    //     const selector = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > p'
    //     return $(selector);
    // }
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