import { test, expect, chromium } from '@playwright/test';

test('Validating Alerts in Web Page', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/)        
    await page.goto("https://demoqa.com/");

    //2. Maximize the browser window to a specific resolution. 
    await page.setViewportSize({ width: 1920, height: 1080 });

    //3. Locate the alert style and click on the same
    const alertTile = page.locator('//h5[text()="Alerts, Frame & Windows"]');
    await alertTile.click();

    //4. Click on the 'Alerts' menu
    const alertsMenu = page.locator('//span[text()="Alerts"]');
    await alertsMenu.click();

    //5. Locate alert buttons to trigger the alerts. 
    const infoAlertButton = page.locator('//button[@id="alertButton"]');
    const confirmAlertButton = page.locator('//button[@id="confirmButton"]');
    const promptAlertButton = page.locator('//button[@id="promtButton"]');

    //6. Click on the information alert button and trigger the alert and select 'OK' from the alert.
    page.once('dialog', async dialog => {

        //copy and print the message displayed in the alert
        console.log("Information Alert Message is :" + dialog.message());

        //select ok button
        await dialog.accept();

    });

    //trigger information alert
    infoAlertButton.click();

    //Wait for 2 seconds 
    await page.waitForTimeout(2000);

    //7. Click on the confirmation alert button and trigger the alert and select 'Cancel' from the alert.
    page.once('dialog', async dialog => {

        //copy and print the message displayed in the alert
        console.log("Confirmation Alert Message is :" + dialog.message());

        //select ok button
        await dialog.dismiss();

    });

    //trigger confirmation alert
    confirmAlertButton.click();

    //Wait for 2 seconds 
    await page.waitForTimeout(2000);

    //7. Click on the prompt alert button and trigger the alert and select 'Ok' from the alert.
    page.once('dialog', async dialog => {

        //copy and print the message displayed in the alert
        console.log("Prompt Alert Message is :" + dialog.message());

        //select ok button
        await dialog.accept("Playwright Training");

    });

    //trigger prompt alert
    promptAlertButton.click();

    //Wait for 5 seconds to see the results. 
    await page.waitForTimeout(5000);

});
