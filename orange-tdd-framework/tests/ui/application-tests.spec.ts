import LoginPageSteps from "../../page-objects/page-steps/LoginPageSteps.js";
import HomePageSteps from "../../page-objects/page-steps/HomePageSteps.js";
import { test } from '@playwright/test';
import { getData } from './data.js';

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;

test.describe("OrangeHRM Application Tests", () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
    });

    test('Verify Login Page is Displayed', async ({ }) => {
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
    });

    test('Verify Login with valid credentials and Dashboard is displayed', async ({ }) => {
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.login('Admin', 'admin123');
        await homePage.verifyHomePageIsDisplayed();
        await homePage.verifyDashboardHeaderText();
    });

    test('Verify all menu items in home page', async ({ }, testInfo) => {
        const data = getData(testInfo.title);
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.login('Admin', 'admin123');
        await homePage.verifyHomePageIsDisplayed();
        await homePage.verifyAllMenuItemsAreDisplayed(data.expectedMenuItems);
    });

    test('Verify Logout from the application', async ({ }) => {
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.login('Admin', 'admin123');
        await homePage.verifyHomePageIsDisplayed();
        await homePage.clickLogout();
        await loginPage.verifyLoginPageIsDisplayed();
    });

});
