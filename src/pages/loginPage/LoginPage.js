import { selectors } from './selectors.js';

export class LoginPage {
    get loginToYourAccountLabel () {
        return selectors.loginToYourAccountLabel();
    }

    get emailLoginField () {
        return selectors.emailLoginField();
    }

    get passwordLoginField () {
        return selectors.passwordLoginField();
    }

    get loginButton () {
        return selectors.loginButton();
    }

    get newUserSignupLabel () {
        return selectors.newUserSignupLabel();
    } 

    get nameSignupField () {
        return selectors.nameSignupField();
    }

    get emailSignupField () {
        return selectors.emailSignupField();
    }
}