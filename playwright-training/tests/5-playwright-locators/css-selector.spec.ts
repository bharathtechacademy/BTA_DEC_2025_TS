//cssSelector locator : this locator is going to help us to locate the element by using CSS properties of the element. 
//syntax: page.locator('css selector');

//css-selector syntaxes:

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute='attribute-value']
//Syntax 4: tagName[attribute*='attribute-value']  // * means contains
//Syntax 5: tagName[attribute^='attribute-value']  // ^ means starts with
//Syntax 6: tagName[attribute$='attribute-value']  // $ means ends with
//Syntax 7: tagName[attribute1='attribute1-value'][attribute2='attribute2-value']  // multiple attributes

//ul[class="leftmenu"] > li > a[href="services.htm?jsessionid=12345"]

//Advanced CSS Locator Syntaxes
// target --> parent --> ancestor --> ancestor's parent --> ancestor's parent's parent
// '>' refers child
//locator: ancestor > parent > target


//ancestor: ul[class="leftmenu"]
//parent: li
//target: a[href="services.htm"]

//ul[class="leftmenu"] > li > a[href="services.htm"]

import { test, expect, chromium } from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({ headless: false, channel: 'chrome' }); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Enter URL "https://www.google.com/" and launch the application. 
    await page.goto('https://www.google.com/');

    //Verify the application title. 
    await expect(page).toHaveTitle('Google');

    //Locate the 'Google Search' textbox using syntax 1
    let googleSearchTextbox1 = page.locator('textarea#APjFqb'); //tagName#id-att-value

    //Locate the 'Google Search' textbox using syntax 2
    let googleSearchTextbox2 = page.locator('textarea.gLFyf');//tagName.class-att-value

    //Locate the 'Google Search' textbox using syntax 3
    let googleSearchTextbox3 = page.locator('textarea[title="Search"]');//tagName[attribute ='attribute-value']

    //Locate the 'How Search Works' link using syntax 4
    let howSearchWorksLink1 = page.locator('a[href*="howsearchworks"]'); //tagName[attribute*='attribute-value']

    //Locate the 'Sign In' button using syntax 5
    let signInButton = page.locator('a[aria-label^="Sign"]'); //tagName[attribute^='attribute-value']

    //Locate the 'Sign In' button using syntax 6
    let signInButton2 = page.locator('a[aria-label$="In"]'); //tagName[attribute$='attribute-value']

    //Locate the 'Google Search' textbox using syntax 7
    let googleSearchTextbox4 = page.locator('textarea[title="Search"][aria-label="Search"]'); //tagName[attribute1='attribute1-value'][attribute2='attribute2-value']

    //Close all pages
    await browser.close();

});