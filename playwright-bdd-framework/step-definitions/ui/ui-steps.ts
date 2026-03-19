import { Given, Then, When } from '@cucumber/cucumber';
import type { CustomWorld } from '../../support/world.js';
import { getData } from '../../support/data.js';

//Given Launch the Creatio application
Given('Launch the Creatio application', async function (this: CustomWorld) {
    await this.loginPage.launchApplication();
});

//Then Cookies pop-up should be displayed
Then('Cookies pop-up should be displayed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPageIsDisplayed();
});

//And The content of the cookies pop-up should be displayed as "abc"
Then('The content of the cookies pop-up should be displayed as {string}', async function (this: CustomWorld, expectedContent: string) {
    await this.cookiesPage.verifyCookiesPageContent(expectedContent.trim());
});

// Handles docString version:
// And The content of the cookies pop-up should be displayed as
// """
// ...
// """
Then('The content of the cookies pop-up should be displayed as', async function (this: CustomWorld, docString: string) {
    await this.cookiesPage.verifyCookiesPageContent(docString.trim());
});

//And Verify cookies pop-up logos are displayed
Then('Verify cookies pop-up logos are displayed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpLogos();
});

//And Verify cookies pop-up selection buttons are displayed
Then('Verify cookies pop-up selection buttons are displayed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpSelectionButtons();
});

//And Verify cookies pop-up switch buttons are displayed
Then('Verify cookies pop-up switch buttons are displayed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpSwitchButtons();
});

//And Verify cookies pop-up show-details link is displayed
Then('Verify cookies pop-up show-details link is displayed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpShowDetailsLink();
});

//When User click on the show-details link
When('User click on the show-details link', async function (this: CustomWorld) {
    await this.cookiesPage.clickCookiesPopUpShowDetailsLink();
});

//Then Verify cookies pop-up should be displayed in expanded view
Then('Verify cookies pop-up should be displayed in expanded view', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpShowDetailsExpandedView();
});

//When User click on the "allow all" button
When('User click on the {string} button', async function (this: CustomWorld, buttonName: string) {
    await this.cookiesPage.clickCookiesPopUpSelectionButtons(buttonName);
});

//Then Verify cookies pop-up should be closed 
Then('Verify cookies pop-up should be closed', async function (this: CustomWorld) {
    await this.cookiesPage.verifyCookiesPopUpIsClosed();
});

//Given Login page should be displayed
Given('Login page should be displayed', async function (this: CustomWorld) {
    await this.loginPage.verifyLoginPageIsDisplayed();
});

//When User enter <username> and <password>
When('User enter {string} and {string}', async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.enterBusinessEmailAndPassword(username, password);
});

//And Click on the login button
When('Click on the login button', async function (this: CustomWorld) {
    await this.loginPage.clickLoginButton();
});

//Then Login should be <result>
Then('Login should be {string}', async function (this: CustomWorld, expectedResult: string) {
    if (expectedResult.toLowerCase() === 'success') {
        await this.homePage.verifyHomePageIsDisplayed();
    } else if (expectedResult.toLowerCase() === 'failure') {
        await this.loginPage.verifyInvalidLoginErrorMessage();
    }
});

//When user enter valid <email> in the username field
When('user enter valid {string} in the username field', async function (this: CustomWorld, email: string) {
    await this.loginPage.enterBusinessEmail(email);
});

//And  click on the forgot password link
When('click on the forgot password link', async function (this: CustomWorld) {
    await this.loginPage.clickForgotPasswordLink();
});

//Then Verify forgot password confirmation message should be displayed
Then('Verify forgot password confirmation message should be displayed', async function (this: CustomWorld) {
    await this.loginPage.verifyForgotPasswordConfirmationMessage();
});

//Then Verify social media login options are displayed
Then('Verify social media login options are displayed', async function (this: CustomWorld) {
    await this.loginPage.verifySocialMediaIcons();
});