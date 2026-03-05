import { expect, Page, Locator } from '@playwright/test';

export class WebCommons {
    page: Page;

    //constructor method to provide current browser tab details to perform the actions 
    constructor(page: Page) {
        this.page = page;
    }

    //common method to generate web element from the locator 
    element(selector: string): Locator {
        return this.page.locator(selector);
    }

    //common method to launch the application
    async launchApplication(url: string, exptitle?: string) {
        await this.page.goto(url);
        if (exptitle) {
            await expect(this.page).toHaveTitle(exptitle);
        }
    }

    //common method to scroll to the web element
    async scrollToElement(selector: string) {
        await this.element(selector).scrollIntoViewIfNeeded();
    }

    //common method to click on the web element
    async click(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).click();
    }

    //common method to double click on the web element
    async doubleClick(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).dblclick();
    }

    //common method to right click on the web element
    async rightClick(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).click({ button: 'right' });
    }

    //common method to hover on the web element
    async hover(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).hover();
    }

    //common method to click on the hidden element 
    async clickHiddenElement(selector: string) {
        await this.element(selector).click({ force: true });
    }

    //Common method to clear the text into textbox
    async clearText(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).clear();
    }

    //common method to type the text within the text box
    async enterText(selector: string, text: string) {
        await this.clearText(selector);
        await this.element(selector).fill(text);
    }

    //Common method to select the option from the drop-down 
    async selectOption(selector: string, option: string) {
        await this.scrollToElement(selector);
        await this.element(selector).selectOption(option);
    }

    //common method to check the checkbox
    async check(selector: string) {
        await this.scrollToElement(selector);
        if (!(await this.element(selector).isChecked())) {
            await this.element(selector).check();
        }
    }

    //Common method to check the radio button 
    async selectRadioButton(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).check();
    }

    //Common method to get the text value from the element 
    async getText(selector: string): Promise<string> {
        await this.scrollToElement(selector);
        return await this.element(selector).innerText();
    }

    //Common method to get the attribute value from the element
    async getAttribute(selector: string, attribute: string): Promise<string | null> {
        await this.scrollToElement(selector);
        return await this.element(selector).getAttribute(attribute);
    }

    //Common method to upload the file. 
    async uploadFile(selector: string, filePath: string) {
        await this.element(selector).setInputFiles(filePath);
    }

    //Common method to accept or dismiss the alert pop-up
    async handleAlert(action: string) {
        this.page.once('dialog', async (dialog) => {
            if (action.toLowerCase() === 'accept') {
                await dialog.accept();
            } else if (action.toLowerCase() === 'dismiss') {
                await dialog.dismiss();
            }
        });
    }

    //Common method to verify the visibility of an element 
    async verifyElementIsVisible(selector: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toBeVisible();
    }

    //Common method to verify the element is enabled or not
    async verifyElementIsEnabled(selector: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toBeEnabled();
    }

    //Common method to verify the text value of the element 
    async verifyElementText(selector: string, expectedText: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toHaveText(expectedText);
    }

    //Common method to verify the attribute value of the element
    async verifyElementAttribute(selector: string, attribute: string, expectedValue: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toHaveAttribute(attribute, expectedValue);
    }
}



