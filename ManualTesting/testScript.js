const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'TestReport.md');
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

let reportContent = '# Test Result Report\n\n| Step | Description | Status | Screenshot |\n|---|---|---|---|\n';
let menuTableData = [];

async function logStep(page, stepNum, description, action) {
    console.log(`Executing Step ${stepNum}: ${description}`);
    let status = 'Passed';
    let screenshotLink = '';
    try {
        await action();
    } catch (error) {
        status = 'Failed';
        const screenshotPathRel = `screenshots/step_${stepNum}_failed.png`;
        const screenshotPathAbs = path.join(__dirname, screenshotPathRel);
        if (page) {
            try {
                await page.screenshot({ path: screenshotPathAbs, fullPage: true });
                screenshotLink = `![Failed](${screenshotPathRel})`;
            } catch (ssError) {
                console.error('Failed to take screenshot:', ssError);
            }
        }
        console.error(`Step ${stepNum} failed: ${error.message}`);
        reportContent += `| ${stepNum} | ${description} | ${status} | ${screenshotLink} |\n`;
        throw error; // stop execution on failure
    }
    reportContent += `| ${stepNum} | ${description} | ${status} | ${screenshotLink} |\n`;
}

(async () => {
    let browser;
    let context;
    let page;
    try {
        // Step 1: Launch Chrome maximized
        browser = await chromium.launch({
            headless: false,
            args: ['--start-maximized']
        });
        context = await browser.newContext({ viewport: null });
        page = await context.newPage();
        
        await logStep(page, 1, 'Launch the Chrome browser window in maximized state', async () => {
            // Browser initialized above
        });

        // Step 2: Navigate to URL
        await logStep(page, 2, 'Navigate to the URL "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"', async () => {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await page.waitForLoadState('networkidle');
        });

        // Step 3: Verify the application is launched successfully
        await logStep(page, 3, 'Verify the application is launched successfully and user is able to get to the login page', async () => {
            await page.waitForSelector('input[name="username"]', { state: 'visible', timeout: 30000 });
            const title = await page.title();
            if (!title.includes('OrangeHRM')) {
                throw new Error(`Title not correct, got: ${title}`);
            }
        });

        // Step 4: Enter username and password
        await logStep(page, 4, 'Enter username as "Admin" and password as "admin123" in the login page', async () => {
            await page.fill('input[name="username"]', 'Admin');
            await page.fill('input[name="password"]', 'admin123');
        });

        // Step 5: Click on login button
        await logStep(page, 5, 'Click on the login button', async () => {
             await page.click('button[type="submit"]');
        });

        // Step 6: Wait for home page to load
        await logStep(page, 6, 'Wait for the home page to load', async () => {
            await page.waitForSelector('.oxd-sidepanel-menu', { state: 'visible', timeout: 30000 });
        });

        // Step 7: Verify all left menus available
        await logStep(page, 7, 'Verify all the left menus available on the home page', async () => {
            const menuItemsCount = await page.locator('.oxd-sidepanel-menu .oxd-main-menu-item').count();
            if (menuItemsCount === 0) {
                 throw new Error('No left menu items found.');
            }
            console.log(`Found ${menuItemsCount} menu items.`);
        });

        // Step 8: Click each and verify clickable (also noting down URL for step 9)
        await logStep(page, 8, 'Click on each and every menu item and verify whether it is clickable or not', async () => {
            const count = await page.locator('.oxd-sidepanel-menu .oxd-main-menu-item').count();
            for (let i = 0; i < count; i++) {
                // Fetch elements again because DOM may have re-rendered on click
                const item = page.locator('.oxd-sidepanel-menu .oxd-main-menu-item').nth(i);
                
                // Keep the previous url
                const oldUrl = page.url();
                
                const nameText = await item.locator('.oxd-text').innerText();
                // Click and verify
                await item.click();
                
                // Wait for URL to change or network to settle
                await page.waitForLoadState('networkidle');
                await page.waitForTimeout(1500); // hard wait for stability just in case URL updates slowly
                
                const newUrl = page.url();
                if (oldUrl === newUrl && nameText.includes('Maintenance')) {
                    // special case for Maintenance, it requires password sometimes
                    console.log(`URL didn't change for ${nameText}, might be a prompt?`);
                    // we'll still record it. Or click cancel if a modal opens?
                    try {
                         const cancelBtn = page.locator('button', { hasText: 'Cancel' });
                         if (await cancelBtn.isVisible({ timeout: 2000 })) {
                             await cancelBtn.click();
                             await page.waitForTimeout(1000);
                         }
                    } catch(e) {}
                }
                
                menuTableData.push({ name: nameText, url: newUrl });
            }
        });

        // Step 9: Prepare table (data already captured)
        await logStep(page, 9, 'Prepare a table to capture all the menu items and the respective URL which it is navigating to', async () => {
            if (menuTableData.length === 0) throw new Error('No menu data collected');
        });

        // Step 10: Click on profile icon
        await logStep(page, 10, 'Click on the profile icon', async () => {
             await page.click('.oxd-userdropdown-tab');
             await page.waitForSelector('.oxd-userdropdown-menu', { state: 'visible', timeout: 5000 });
        });

        // Step 11: Click on log out button and verify log out is successful
        await logStep(page, 11, 'Click on the log out button and verify whether log out is successful', async () => {
            const logoutLink = page.locator('.oxd-userdropdown-menu a', { hasText: 'Logout' });
            await logoutLink.click();
            await page.waitForSelector('input[name="username"]', { state: 'visible', timeout: 15000 });
        });

    } catch (e) {
        console.error('Test script encountered a failure:', e);
    } finally {
        if (browser) {
            try { await browser.close(); } catch(e){}
        }
        
        let finalReport = reportContent;
        if (menuTableData.length > 0) {
            finalReport += '\n## Menu URLs\n\n| Menu Item | URL |\n|---|---|\n';
            menuTableData.forEach(item => {
                finalReport += `| ${item.name} | ${item.url} |\n`;
            });
        }
        
        fs.writeFileSync(reportPath, finalReport);
        console.log(`Report generated successfully at ${reportPath}`);
    }
})();
