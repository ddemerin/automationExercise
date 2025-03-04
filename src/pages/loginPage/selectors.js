export const selectors = {
    emailField: () => {
        const selector = '[data-qa="login-email"]'
        return $(selector);
    },
    passwordField: () => {
        const selector = '[data-qa="login-password"]'
        return $(selector);
    },
    loginButton: () => {
        const selector = '[data-qa="login-button"]'
        return $(selector);
    }
}