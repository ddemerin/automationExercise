import { selectors } from './selectors.js';

export class HomePage {
    get title () {
        return selectors.title();
    }
}