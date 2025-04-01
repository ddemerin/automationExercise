export const selectors = {
    loginToYourAccountLabel: () => {
        const selector = '[class="login-form"] h2';
        return $(selector);
    },
    emailLoginField: () => {
        const selector = '[data-qa="login-email"]';
        return $(selector);
    },
    passwordLoginField: () => {
        const selector = '[data-qa="login-password"]';
        return $(selector);
    },
    loginButton: () => {
        const selector = '[data-qa="login-button"]';
        return $(selector);
    },
    newUserSignupLabel: () => {
        const selector = '[class="signup-form"] h2';
        return $(selector);
    },
    nameSignupField: () => {
        const selector = '[data-qa="signup-name"]';
        return $(selector);
    },
    emailSignupField: () => {
        const selector = '[data-qa="signup-email"]';
        return $(selector);
    }
}