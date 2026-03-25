import { expect, Page, Locator } from '@playwright/test';

export class WebCommons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    element(selector: string): Locator {
        return this.page.locator(selector);
    }

    async launchApplication(url: string, exptitle?: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        if (exptitle) {
            await expect(this.page).toHaveTitle(exptitle);
        }
    }

    async scrollToElement(selector: string) {
        await this.element(selector).scrollIntoViewIfNeeded();
    }

    async click(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).click();
    }

    async doubleClick(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).dblclick();
    }

    async rightClick(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).click({ button: 'right' });
    }

    async hover(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).hover();
    }

    async clickHiddenElement(selector: string) {
        await this.element(selector).click({ force: true });
    }

    async clearText(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).clear();
    }

    async enterText(selector: string, text: string) {
        await this.clearText(selector);
        await this.element(selector).fill(text);
    }

    async selectOption(selector: string, option: string) {
        await this.scrollToElement(selector);
        await this.element(selector).selectOption(option);
    }

    async check(selector: string) {
        await this.scrollToElement(selector);
        if (!(await this.element(selector).isChecked())) {
            await this.element(selector).check();
        }
    }

    async selectRadioButton(selector: string) {
        await this.scrollToElement(selector);
        await this.element(selector).check();
    }

    async getText(selector: string): Promise<string> {
        await this.scrollToElement(selector);
        return await this.element(selector).innerText();
    }

    async getAttribute(selector: string, attribute: string): Promise<string | null> {
        await this.scrollToElement(selector);
        return await this.element(selector).getAttribute(attribute);
    }

    async uploadFile(selector: string, filePath: string) {
        await this.element(selector).setInputFiles(filePath);
    }

    async handleAlert(action: string) {
        this.page.once('dialog', async (dialog) => {
            if (action.toLowerCase() === 'accept') {
                await dialog.accept();
            } else if (action.toLowerCase() === 'dismiss') {
                await dialog.dismiss();
            }
        });
    }

    async verifyElementIsVisible(selector: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toBeVisible();
    }

    async verifyElementIsEnabled(selector: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toBeEnabled();
    }

    async verifyElementText(selector: string, expectedText: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toHaveText(expectedText);
    }

    async verifyElementAttribute(selector: string, attribute: string, expectedValue: string) {
        await this.scrollToElement(selector);
        await expect(this.element(selector)).toHaveAttribute(attribute, expectedValue);
    }

    async verifyElementIsNotVisible(selector: string) {
        await expect(this.element(selector)).toBeHidden();
    }

    async getAllTexts(selector: string): Promise<string[]> {
        return await this.element(selector).allInnerTexts();
    }

    async waitForNavigation(urlPattern: RegExp) {
        await this.page.waitForURL(urlPattern, { timeout: 60000 });
    }
}
