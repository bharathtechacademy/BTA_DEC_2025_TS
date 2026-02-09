import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async () => {
    
    test('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        console.log("Group 1 - Test 2: Executing");
    });

        test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});


test.describe('Group 2 Tests', async () => {
    
    test('Group 2- Test 1', async ({ page }) => {
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2', async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

        test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});

//Global Hooks

test.beforeAll(async () => {
    console.log("***Global beforeAll: This runs once before all tests***");
});

test.afterAll(async () => {
    console.log("***Global afterAll: This runs once after all tests***");
});

test.beforeEach(async () => {
    console.log("----Global beforeEach: This runs before each test----");
});

test.afterEach(async () => {
    console.log("----Global afterEach: This runs after each test----");
});