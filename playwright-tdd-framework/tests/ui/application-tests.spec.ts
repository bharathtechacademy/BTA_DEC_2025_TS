import LoginPageSteps from "../../page-objects/page-steps/LoginPageSteps.js";
import HomePageSteps from "../../page-objects/page-steps/HomePageSteps.js";
import CookiesPageSteps from "../../page-objects/page-steps/CookiesPageSteps.js";
import { test, expect } from '@playwright/test';
import { log } from "node:console";
import { getData } from '../ui/data.js';

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;

test.describe("Application Tests", () => {

  test.beforeEach(async ({ page }) => {
    //adding view port size at the start of the test
    await page.setViewportSize({ width: 1920, height: 1080 });
    loginPage = new LoginPageSteps(page);
    homePage = new HomePageSteps(page);
    cookiesPage = new CookiesPageSteps(page);
  });

  test('Verify Cookies Page is Launched', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();     
  });

  //data
  test('Verify Cookies Page content', async ({ }, testInfo) => {
    const data = getData(testInfo.title);
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPageContent(data.expectedContent);
  });

  test('Verify Cookies Popup Logos', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpLogos();
  });

  test('Verify Cookies Popup Switch Buttons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpSwitchButtons();
  });

  test('Verify Cookies Popup Selection Buttons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpSelectionButtons();
  });

  test('Verify Show Details Link in the Cookies PopUp', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpShowDetailsLink();
    await cookiesPage.clickCookiesPopUpShowDetailsLink();
    await cookiesPage.verifyCookiesPopUpShowDetailsExpandedView();
  });

  test('Verify Cookies Popup is Closed', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
  });

  //data
  const data = getData("Verify Login");
  for (const loginData of data) {
    test('Verify Login with ' + loginData.scenario, async ({ }) => {
      await loginPage.launchApplication();
      await cookiesPage.verifyCookiesPageIsDisplayed();
      await cookiesPage.verifyCookiesPopUpSelectionButtons();
      await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
      await cookiesPage.verifyCookiesPopUpIsClosed();
      await loginPage.verifyLoginPageIsDisplayed();
      await loginPage.enterBusinessEmailAndPassword(loginData.username, loginData.password);
      await loginPage.clickLoginButton();
      if (data.scenario === "valid login") {
        await homePage.verifyHomePageIsDisplayed();
      } else {
        await loginPage.verifyInvalidLoginErrorMessage();
      }
    });
  }


  //data
  test('Verify forgot password', async ({ }, testInfo) => {
    const data = getData(testInfo.title);
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
    await loginPage.verifyLoginPageIsDisplayed();
    await loginPage.enterBusinessEmailAndPassword(data.username, data.password);
    await loginPage.clickForgotPasswordLink();
    await loginPage.verifyForgotPasswordConfirmationMessage();
  });

  test('Verify social media icons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
    await loginPage.verifyLoginPageIsDisplayed();
    await loginPage.verifySocialMediaIcons();
  });

});


