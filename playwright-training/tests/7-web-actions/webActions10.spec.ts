import { test, expect } from '@playwright/test';

test('Mock public API - posts', async ({ page }) => {

    // 1. Match any request whose URL ends with /posts (e.g. jsonplaceholder .../posts)
    await page.route('**/posts', async (route) => {

        // 2. Replace the real API response with a single mocked post object
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                {
                    id: 101,
                    title: 'Mocked Title',
                    body: 'This is mocked content',
                },
            ]),
        });
    });
    console.log('Mock route registered: **/posts returns one mocked post');

    // 3. Load jsonplaceholder so fetch('/posts') resolves to the same origin + /posts
    await page.goto('https://jsonplaceholder.typicode.com/', {
        waitUntil: 'domcontentloaded',
    });

    // 4. Run fetch in the browser context (same origin as step 3 — hits our mock)
    const response = await page.evaluate(async () => {
        const res = await fetch('/posts');
        return res.json();
    });

    // 5. Log the parsed JSON for debugging in the test output
    console.log(response);

    // 6. Assert the first item title comes from the mock, not the live API
    expect(response[0].title).toBe('Mocked Title');
    console.log('Title matched mocked value: Mocked Title');
});
