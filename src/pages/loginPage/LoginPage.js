import { selectors } from './selectors.js';

export class LoginPage {
    get emailLoginField () {
        return selectors.emailLoginField();
    }

    get passwordLoginField () {
        return selectors.passwordLoginField();
    }

    get loginButton () {
        return selectors.loginButton();
    }

    get nameSignupField () {
        return selectors.nameSignupField();
    }

    get emailSignupField () {
        return selectors.emailSignupField();
    }
}