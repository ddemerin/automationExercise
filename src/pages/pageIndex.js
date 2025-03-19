import { HomePage } from "./homePage/HomePage.js";
import { LoginPage } from "./loginPage/LoginPage.js";
import { ProductPage } from "./productPage/ProductPage.js";
// import { Footer } from "./footer/Footer.js";

export class PageIndex {
    constructor() {
        this.HomePage = new HomePage();
        this.LoginPage = new LoginPage();
        this. ProductPage = new ProductPage();
        // this.Footer = new Footer();
    }
}