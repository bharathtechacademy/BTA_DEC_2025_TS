import { Page } from '@playwright/test';
import loginPage from '../page-elements/LoginPageElements.json' with { type: 'json' };
import { WebCommons } from '../../commons/web/WebCommons.js';
import config from '../../config/config.json' with { type: 'json' };

export class LoginPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    async launchApplication() {
        await this.web.launchApplication(config.app.url, config.app.title);
    }

    async verifyLoginPageIsDisplayed() {
        await this.web.verifyElementIsVisible(loginPage.loginPageTitle);
    }

    async enterUsernameAndPassword(username: string, password: string) {
        await this.web.enterText(loginPage.usernameTxtb, username);
        await this.web.enterText(loginPage.passwordTxtb, password);
    }

    async clickLoginButton() {
        await this.web.click(loginPage.loginBtn);
    }

    async verifyInvalidLoginErrorMessage() {
        await this.web.verifyElementIsVisible(loginPage.loginErrorMsg);
    }

    async login(username: string, password: string) {
        await this.enterUsernameAndPassword(username, password);
        await this.clickLoginButton();
    }
}

export default LoginPageSteps;
