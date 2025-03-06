import { HomePage } from "./homePage/HomePage.js";
import { LoginPage } from "./loginPage/LoginPage.js";
import { Footer } from "./footer/Footer.js";

export class PageIndex {
    constructor() {
        this.homePage = new HomePage();
        this.LoginPage = new LoginPage();
        this.Footer = new Footer();
    }
}