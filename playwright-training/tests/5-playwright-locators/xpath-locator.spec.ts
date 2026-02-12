//XPATH LOCATOR SYNTAX

/******************LEVEL 1: BASIC XPATH*******************/
//Syntax 1: //tagName[@attribute='attribute-value']
//Syntax 2: //tagName[text()='text-value']

/******************LEVEL 2: contains , starts-with*******************/
//Syntax 3: //tagName[contains(@attribute,'attribute-value')]
//Syntax 4: //tagName[contains(text(),'text-value')]

//Syntax 5: //tagName[starts-with(@attribute,'attribute-value')]
//Syntax 6: //tagName[starts-with(text(),'text-value')]

/******************LEVEL 3: multiple attributes & text values using AND *******************/
//Syntax 7: //tagName[@attribute1='attribute-value1' and @attribute2='attribute-value2' and text()='text-value']

/******************LEVEL 4: Advanced XPATH with Relationships *******************/
//Syntx 8: referenceElementXpath/relationship::targetElementXpath

//relationship: parent, child, ancestor, following-sibling, preceding-sibling, following, preceding, /(child), //(with-in-family)
// target --> sibling --> parent --> ancestor --> ancestor's parent --> ancestor's parent's parent


//ancestor: //ul[@class='leftmenu']
//parent://li  (duplicate)
//sibling: NA
//target: //a[text()='Services'] (duplicate)

//ul[@class='leftmenu']/child::li/child::a[text()='Services']
//ul[@class='leftmenu']//a[text()='Services']
//li[@class='Solutions']/following-sibling::li[2]/child::a[text()='Services']

import { test, expect, chromium } from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({ headless: false, channel: 'chrome' }); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Enter URL "https://parabank.parasoft.com/parabank/index.htm" and launch the application. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Verify the application title. 
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

    //Locate the 'Parabank Logo' using XPATH  Syntax 1
    let logo = page.locator("//img[@class='logo']");

    //Locate the 'Parabank Caption' using XPATH  Syntax 2
    let caption = page.locator("//p[text()='Experience the difference']");

    //Locate the 'Parabank Logo' using XPATH  Syntax 3
    let logo2 = page.locator("//img[contains(@src,'logo')]");

    //Locate the 'Parabank Caption' using XPATH  Syntax 4
    let caption2 = page.locator("//p[contains(text(),'difference')]");

    //Locate the 'Parabank Logo' using XPATH  Syntax 5
    let logo3 = page.locator("//img[starts-with(@src,'images/logo')]");

    //Locate the 'Parabank Caption' using XPATH  Syntax 6
    let caption3 = page.locator("//p[starts-with(text(),'Experience')]");

    //Locate the 'Parabank Logo' using XPATH  Syntax 7
    let logo4 = page.locator("//img[@class='logo' and  @alt='ParaBank' and @title='ParaBank']");

    //Locate the 'Parabank Caption' using XPATH  Syntax 7
    let caption4 = page.locator("//p[text()='Experience the difference' and @class='caption']");

    //Locate the 'Services' link using XPATH  Syntax 8
    let servicesLink = page.locator("//ul[@class='leftmenu']/child::li/child::a[text()='Services']");


    //Close all pages
    await browser.close();

});