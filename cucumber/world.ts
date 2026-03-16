import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import LoginPageSteps from '../page-objects/page-steps/LoginPageSteps.js';
import HomePageSteps from '../page-objects/page-steps/HomePageSteps.js';
import CookiesPageSteps from '../page-objects/page-steps/CookiesPageSteps.js';

class PlaywrightWorld extends World {
  page!: Page;
  loginPage!: LoginPageSteps;
  homePage!: HomePageSteps;
  cookiesPage!: CookiesPageSteps;

  constructor(options: IWorldOptions) {
    super(options);
  }

  initUiObjects(): void {
    this.loginPage = new LoginPageSteps(this.page);
    this.homePage = new HomePageSteps(this.page);
    this.cookiesPage = new CookiesPageSteps(this.page);
  }
}

export type CustomWorld = PlaywrightWorld;
setWorldConstructor(PlaywrightWorld);



