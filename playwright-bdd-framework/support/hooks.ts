import {Browser,BrowserContext, Page,chromium} from "@playwright/test";
import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";

let browser: Browser;
let context: BrowserContext;
let page: Page;


//method to launch the browser engine
BeforeAll(async function() { //before all scenarios
    browser = await chromium.launch({ headless: false });
});

//method to create a new browser context and page for each scenario
Before(async function() { //before each scenario
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page; //make the page object available in the step definitions
});

//method to close the browser context after each scenario
After(async function() { //after each scenario
    await context.close();
});

//method to close the browser engine after all scenarios
AfterAll(async function() { //after all scenarios
    await browser.close();
});