export const selectors = {
    subscribeField: () => {
        const selector = '[id="susbscribe_email"]';
        return $(selector);
    },
    subscribeButton: () => {
        const selector = '[id="subscribe"]';
        return $(selector);
    }
}