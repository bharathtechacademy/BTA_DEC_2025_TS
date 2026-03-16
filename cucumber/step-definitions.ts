Given('Launch the application', async function (this: CustomWorld) {
  await this.loginPage.launchApplication();
});

When('user selects the option to {string}', async function (buttonName: string) {
  await this.cookiesPage.clickCookiesPopUpSelectionButtons(buttonName);
});