export const selectors = {
    emailLoginField: () => {
        const selector = '[data-qa="login-email"]'
        return $(selector);
    },
    passwordLoginField: () => {
        const selector = '[data-qa="login-password"]'
        return $(selector);
    },
    loginButton: () => {
        const selector = '[data-qa="login-button"]'
        return $(selector);
    },
    nameSignupField: () => {
        const selector = '[data-qa="signup-name"]'
        return $(selector);
    },
    emailSignupField: () => {
        const selector = '[data-qa="signup-email"]'
        return $(selector);
    },
    
}