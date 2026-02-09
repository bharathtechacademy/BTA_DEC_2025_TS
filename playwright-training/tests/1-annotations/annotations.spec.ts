import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async () => {
    
    test.skip('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        test.fixme(); //i'm planning to fix this test later
        console.log("Group 1 - Test 2: Executing");
        expect(1).toBe(1);
    });

        test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});

test.describe('Group 2 Tests', async () => {
    
    test('Group 2- Test 1', async ({ page }) => {
        test.slow(); //this test is expected to be slow
        console.log("Group 2 - Test 1: Executing");
        await new Promise(resolve => setTimeout(resolve, 40000)); //time to complete test is 40 seconds
    });

    test('Group 2- Test 2', async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

        test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});