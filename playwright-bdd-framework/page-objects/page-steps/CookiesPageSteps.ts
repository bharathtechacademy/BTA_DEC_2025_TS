import { Page } from '@playwright/test';
import cookiesPage from '../page-elements/CookiesPageElements.json' with {type :'json'};
import { WebCommons } from '../../commons/web/WebCommons.js';

export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to navigate to the cookies page
    async verifyCookiesPageIsDisplayed() {
        await this.web.verifyElementIsVisible(cookiesPage.cookiesHeader);
    }

    // Method to verify the content of the cookies page
    async verifyCookiesPageContent(expectedContent: string) {
        await this.web.verifyElementText(cookiesPage.cookiesContent, expectedContent);
    }

    // Method to verify the logos on the cookies pop-up
    async verifyCookiesPopUpLogos() {
        await this.web.verifyElementIsVisible(cookiesPage.creatioLogo);
        await this.web.verifyElementIsVisible(cookiesPage.cookiebotLogo);
    }

    //Method to verify all the selection buttons in the cookies pop-up 
    async verifyCookiesPopUpSelectionButtons() {
        await this.web.verifyElementIsVisible(cookiesPage.allowAllBtn);
        await this.web.verifyElementIsVisible(cookiesPage.allowSelectionBtn);
        await this.web.verifyElementIsVisible(cookiesPage.denyBtn);
    }

    //Method to verify switch buttons are displayed in the cookies pop-up 
    async verifyCookiesPopUpSwitchButtons() {
        await this.web.verifyElementIsVisible(cookiesPage.necessarySwitchtn);
        await this.web.verifyElementIsVisible(cookiesPage.preferencesSwitchBtn);
        await this.web.verifyElementIsVisible(cookiesPage.statisticsSwitchBtn);
        await this.web.verifyElementIsVisible(cookiesPage.marketingSwitchBtn);
    }

    //Method to verify the "Show Details" link is displayed in the Cookies popup 
    async verifyCookiesPopUpShowDetailsLink() {
        await this.web.verifyElementIsVisible(cookiesPage.showDetailsLink);
    }

    //Method to click on the "Show Details" link in the Cookies popup 
    async clickCookiesPopUpShowDetailsLink() {
        await this.web.click(cookiesPage.showDetailsLink);
    }

    //Method to verify expanded view after clicking on the show details link. 
    async verifyCookiesPopUpShowDetailsExpandedView() {
        await this.web.verifyElementIsVisible(cookiesPage.cookiePopUpExpandedDetails);
    }

    //Method to click on the selection buttons. 
    async clickCookiesPopUpSelectionButtons(button: string) {
        switch (button.toLowerCase()) {
            case 'allow all':
                await this.web.click(cookiesPage.allowAllBtn);
                break;
            case 'allow selection':
                await this.web.click(cookiesPage.allowSelectionBtn);
                break;
            case 'deny':
                await this.web.click(cookiesPage.denyBtn);
                break;
            default:
                throw new Error(`Button with name ${button} not found in the cookies pop-up.`);
        }
    }

    //Method to verify cookie's pop-up is closed/disappeared successfully. 
    async verifyCookiesPopUpIsClosed() {
        await this.web.verifyElementIsNotVisible(cookiesPage.cookiesContent);
    }

}

export default CookiesPageSteps;