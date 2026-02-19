import { test, expect, chromium } from '@playwright/test';

test('Validating the Parabank Application', async ({ page }) => {


    //1. Enter URL and Launch the application (https://demoqa.com/)        
    await page.goto("https://demoqa.com/");

    //2. Maximize the browser window to a specific resolution. 
    await page.setViewportSize({ width: 1920, height: 1080 });

    //3. Locate the alert style and click on the same
    const alertTile = page.locator('//h5[text()="Alerts, Frame & Windows"]');
    await alertTile.click();

    //4. Click on the 'Frames' menu
    const framesMenu = page.locator('//span[text()="Frames"]');
    await framesMenu.click();

    //5. Locate the main window element and Frame Element 

    //locate main window element
    const mainWindowElement = page.locator('//h1[text()="Frames"]');

    //navigate to the frame
    const frame = page.frameLocator('iframe#frame1');

    //locate frame element
    const frameElement = frame.locator('//h1[@id="sampleHeading"]');

    //6. Print frame element text value. 
    console.log(await frameElement.textContent());

    //7. Print a main window element's text value. 
    console.log(await mainWindowElement.textContent());
});

