import { chromium } from 'playwright';

const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });

await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').fill('admin123');
await Promise.all([
  page.waitForURL(/dashboard/i, { timeout: 60000 }),
  page.locator('button.orangehrm-login-button').click(),
]);

await page.waitForTimeout(3000);

// Click user dropdown
const userTab = page.locator('.oxd-userdropdown-tab');
await userTab.click();
await page.waitForTimeout(500);

// Get dropdown menu items
const dropdownHtml = await page.evaluate(() => {
  const dd = document.querySelector('.oxd-dropdown-menu');
  if (dd) return dd.outerHTML.slice(0, 3000);
  const dd2 = document.querySelector('.oxd-userdropdown');
  if (dd2) return dd2.innerHTML.slice(0, 3000);
  return 'no dropdown found';
});
console.log('--- DROPDOWN MENU HTML ---\n', dropdownHtml);

const menuItems = await page.locator('.oxd-userdropdown .oxd-dropdown-menu a').allInnerTexts().catch(() => []);
console.log('dropdown menu items:', menuItems);

// login page title
console.log('page title:', await page.title());

// login form elements 
const loginFormHtml = await page.evaluate(() => {
  const h5 = document.querySelector('.orangehrm-login-title');
  if (h5) return h5.outerHTML;
  return 'no login title';
});
console.log('login title element:', loginFormHtml);

await browser.close();
