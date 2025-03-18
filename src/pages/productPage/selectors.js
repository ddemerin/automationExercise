export const selectors = {
    allProducts: () => {
        const select = '[class="title text-center"]'
        return $(selector);
    },
    blueTop: () => {
        const selector = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > p'
        return $(selector);
    }
}