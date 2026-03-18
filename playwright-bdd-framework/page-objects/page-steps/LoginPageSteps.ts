import  { Page } from '@playwright/test';
import loginPage from '../page-elements/LoginPageElements.json' with {type :'json'};
import { WebCommons } from '../../commons/web/WebCommons.js';
import config from '../../config/config.json' with { type: 'json' };

export class LoginPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch application
    async launchApplication() {
        await this.web.launchApplication(config.app.url);
    }

    //Method to verify login page is displayed. 
    async verifyLoginPageIsDisplayed() {
        await this.web.verifyElementIsVisible(loginPage.loginPageHeader);
    }

    //Method to enter business email and password
    async enterBusinessEmailAndPassword(email: string, password: string) {
        await this.web.enterText(loginPage.businessEmailTxtb, email);
        await this.web.enterText(loginPage.passwordTxtb, password);
    }

      //Method to enter business email 
    async enterBusinessEmail(email: string) {
        await this.web.enterText(loginPage.businessEmailTxtb, email);
    }

    //Method to click on the login button
    async clickLoginButton() {
        await this.web.click(loginPage.loginBtn);
    }

    //Method to verify forgot password link
    async verifyForgotPasswordLink() {
        await this.web.verifyElementIsVisible(loginPage.forgotPasswordLink);
    }

    //Method to click on forgot password link
    async clickForgotPasswordLink() {
        await this.web.click(loginPage.forgotPasswordLink);
    }

    //Method to verify confirmation message for forgot password    
    async verifyForgotPasswordConfirmationMessage() {
        await this.web.verifyElementIsVisible(loginPage.forgotPasswordConfirmationMsg);
    }

    //Method to verify social media icons. 
    async verifySocialMediaIcons() {
        await this.web.verifyElementIsVisible(loginPage.linkedInIcon);
        await this.web.verifyElementIsVisible(loginPage.googleIcon);
    }

    //Method to verify signup link is visible
    async verifySignupLinkIsVisible() {
        await this.web.verifyElementIsVisible(loginPage.signUpLink);
    }

    //Method to click on signup link
    async clickSignupLink() {
        await this.web.click(loginPage.signUpLink);
    }

    //Method to verify signup message is displayed
    async verifySignupMessageIsDisplayed() {
        await this.web.verifyElementIsVisible(loginPage.signUpHeader);
    }

    //Method to verify error message for invalid login
    async verifyInvalidLoginErrorMessage() {
        await this.web.verifyElementIsVisible(loginPage.loginErrorMsg);
    }


}

export default LoginPageSteps;