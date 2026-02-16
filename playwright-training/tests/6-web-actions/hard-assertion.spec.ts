      // 1. Hard Assertions: If the assertion fails, the test will stop executing and will be marked as failed.
      import { test, expect } from '@playwright/test';
      
      test('Hard Assertion Example', async ({ page }) => {

        //Launch the application google.com
        await page.goto('https://www.google.com');

        //Verify the application title
        await expect(page).toHaveTitle('Yahoo'); // If this assertion fails, the test will stop here and will be marked as failed.

        console.log("Execution Completed...")
      });

  
      