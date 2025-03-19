import { selectors } from "./selectors";

export class Footer {
    get subscribeField () {
        return selectors.subscribeField();
    }

    get subscribeButton () {
        return selectors.subscribeButton();
    }
}