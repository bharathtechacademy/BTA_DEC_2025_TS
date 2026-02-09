import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async () => {
    
    test('Group 1- Test 1',{tag:'@smoke'}, async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2',{tag:'@sanity'}, async ({ page }) => {
        console.log("Group 1 - Test 2: Executing");
    });

        test('Group 1- Test 3',{tag:['@smoke','@sanity']}, async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});


test.describe('Group 2 Tests', async () => {
    
    test('Group 2- Test 1',{tag:'@smoke'}, async ({ page }) => {
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2',{tag:'@sanity'}, async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

        test('Group 2- Test 3',{tag:'@regression'}, async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});