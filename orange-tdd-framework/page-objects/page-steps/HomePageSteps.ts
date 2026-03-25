import { Page, expect } from '@playwright/test';
import homePage from '../page-elements/HomePageElements.json' with { type: 'json' };
import { WebCommons } from '../../commons/web/WebCommons.js';

export class HomePageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    async verifyHomePageIsDisplayed() {
        await this.web.verifyElementIsVisible(homePage.dashboardHeader);
    }

    async verifyDashboardHeaderText() {
        await this.web.verifyElementText(homePage.dashboardHeader, 'Dashboard');
    }

    async getAllMenuItems(): Promise<string[]> {
        return await this.web.getAllTexts(homePage.sideMenuItems);
    }

    async verifyAllMenuItemsAreDisplayed(expectedMenuItems: string[]) {
        const actualMenuItems = await this.getAllMenuItems();
        expect(actualMenuItems).toEqual(expectedMenuItems);
    }

    async verifyMenuItemIsVisible(menuItemName: string) {
        const selector = `.oxd-main-menu-item span:has-text('${menuItemName}')`;
        await this.web.verifyElementIsVisible(selector);
    }

    async clickUserDropdown() {
        await this.web.click(homePage.userDropdownTab);
    }

    async clickLogout() {
        await this.clickUserDropdown();
        await this.web.click(homePage.logoutLink);
    }
}

export default HomePageSteps;
