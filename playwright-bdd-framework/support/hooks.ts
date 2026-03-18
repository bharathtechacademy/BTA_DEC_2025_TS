import {Browser,BrowserContext, Page,chromium} from "@playwright/test";
import {BeforeAll, Before, AfterAll, After,setDefaultTimeout,Status} from "@cucumber/cucumber";
import type { CustomWorld } from "./world.js";

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(120000);

//method to launch the browser engine
BeforeAll(async function() { //before all scenarios
    browser = await chromium.launch({ headless: false });
});

//method to create a new browser context and page for each scenario
Before(async function(this: CustomWorld) { //before each scenario
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page; //make the page object available in the step definitions
    this.initializePageObjects();
});

//method to close the browser context after each scenario
After(async function(scenario) { //after each scenario
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` });
        this.attach(screenshot, 'image/png');
    }
    await context.close();
});

//method to close the browser engine after all scenarios
AfterAll(async function() { //after all scenarios
    await browser.close();
});