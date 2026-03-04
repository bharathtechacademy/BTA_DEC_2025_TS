import {expect, Page,Locator} from '@playwright/test';

export class WebCommons {
    page:Page;

    //constructor method to provide current browser tab details to perform the actions 
    constructor(page: Page){
        this.page = page;
    }

    //common method to generate web element from the locator 
    element(selector: string): Locator{
        return this.page.locator(selector);
    }

    //common method to launch the application
    async launchApplication(url:string, exptitle?:string){
        await this.page.goto(url);
        if(exptitle){
            await expect(this.page).toHaveTitle(exptitle);
        }
    }

    //common method to scroll to the web element
    async scrollToElement(selector: string){
        await this.element(selector).scrollIntoViewIfNeeded();
    }

    //common method to click on the web element
    async click(selector: string){
        await this.scrollToElement(selector);
        await this.element(selector).click();
    }

    //common method to double click on the web element
    async doubleClick(selector: string){
        await this.scrollToElement(selector);
        await this.element(selector).dblclick();
    }

    //common method to right click on the web element
    async rightClick(selector: string){
        await this.scrollToElement(selector);
        await this.element(selector).click({ button: 'right' });
    }

    //common method to hover on the web element
    async hover(selector: string){
        await this.scrollToElement(selector);
        await this.element(selector).hover();
    }

    //common method to click on the hidden element 
    async clickHiddenElement(selector: string){
        await this.element(selector).click({ force: true });
    }

    //common method to type the text within the text box
    async enterText(selector: string, text: string){
        await this.scrollToElement(selector);
        await this.element(selector).fill(text);
    }
}
