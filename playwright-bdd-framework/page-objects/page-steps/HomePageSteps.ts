import { Page } from '@playwright/test';
import homePage from '../page-elements/HomePageElements.json' with {type :'json'};
import { WebCommons } from '../../commons/web/WebCommons.js';

export class HomePageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify home page is displayed. 
    async verifyHomePageIsDisplayed() {
        await this.web.verifyElementIsVisible(homePage.homePageHeaderLink);
    }


}

export default HomePageSteps;