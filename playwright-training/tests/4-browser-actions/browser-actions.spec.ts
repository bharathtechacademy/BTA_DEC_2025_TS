import {test, expect, chromium} from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({headless:false, channel:'chrome'}); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Maximize the browser window to a specific resolution. 
    await page.setViewportSize({width:1920,height:1080});

    //Clear all cookies
    await context.clearCookies();

    //Enter URL "https://www.google.com/" and launch the application. 
    await page.goto('https://www.google.com/');

    //Verify the application title. 
    await expect(page).toHaveTitle('Google');

    //Launch the new application "https://playwright.dev/" within the same page. 
    await page.goto('https://playwright.dev/');

    //Go back to previous application. 
    await page.goBack();

    //Move forward to the next application. 
    await page.goForward();

    //Refresh the application. 
    await page.reload();

    //Launch the new tab or window 
    let newPage = await context.newPage();
    
    //launch the different application 'https://www.selenium.dev/'
    await newPage.goto('https://www.selenium.dev/')

    //Get all the pages (tabs) launched
    const pages = await context.pages();
    console.log("Total Pages/tabs launched : "+pages.length);

    //Switch back to the main window. 
    await page.bringToFront();

    //Get the current browser URL. 
    let currentUrl = page.url();
    console.log("Current window URL :"+currentUrl);

    //Wait for 5 sec
    await page.waitForTimeout(5000);

    //Close the current page 
    await page.close();

    //Close all pages
    await browser.close();

});