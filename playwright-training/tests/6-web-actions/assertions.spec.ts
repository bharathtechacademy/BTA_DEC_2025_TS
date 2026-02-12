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
      Assertion : Default method provided by Playwright to compare expected results vs actual results. 

      2 Types of Assertions:
      1.Hard Assertions: If the assertion fails, the test will stop executing and will be marked as failed.
      2.Soft Assertions: If the assertion fails, the test will continue executing and will be marked as failed at the end of the test.

      //Syntax for Hard Assertion:
      expect(actual).toBe(expected);

      //Syntax for Soft Assertion:
      expect.soft(actual).toBe(expected);
      ========================================================= */

      //Check if the element is visible
     await expect(element).toBeVisible();


    //Close all pages
    await browser.close();

});