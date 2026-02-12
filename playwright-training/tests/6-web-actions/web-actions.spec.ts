import { test, expect, chromium } from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({ headless: false, channel: 'chrome' }); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Enter URL "https://example.com" and launch the application. 
    await page.goto('https://example.com');

    //Verify the application title. 
    await expect(page).toHaveTitle('Title');

    //Locate the element 
    let element = page.locator("a[alt='image']");

    /* =========================================================
       Common Web Element Validations
       ========================================================= */

    //Check if the element is visible
    await expect(element).toBeVisible();

    //Check if the element is enabled
    await expect(element).toBeEnabled();

    //Check if the element is checked (for checkbox or radio button)
    await expect(element).toBeChecked();


    //Close all pages
    await browser.close();

});