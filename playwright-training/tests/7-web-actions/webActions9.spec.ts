import { test, expect } from '@playwright/test';

// Sample REST URL (no real server — Playwright fulfills it via page.route)
const MOCK_USERS_API = 'https://api.example.com/users';

test('Mock API example - users list', async ({ page }) => {

    // 1. Intercept the users API before any real network call happens
    await page.route(MOCK_USERS_API, async (route) => {

        // 2. Return a fake JSON array instead of calling the real backend
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                { id: 1, name: 'Bharath' },
                { id: 2, name: 'Reddy' },
            ]),
        });
    });
    console.log('Mock route registered: GET users returns Bharath and Reddy');

    // 3. Open a tiny in-memory page that calls fetch() against the mocked URL
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head><title>Users mock</title></head>
        <body>
            <ul id="list"></ul>
            <script>
                fetch('${MOCK_USERS_API}')
                    .then(function (r) { return r.json(); })
                    .then(function (users) {
                        var ul = document.getElementById('list');
                        users.forEach(function (u) {
                            var li = document.createElement('li');
                            li.textContent = u.name;
                            ul.appendChild(li);
                        });
                    });
            </script>
        </body>
        </html>
    `);

    // 4. Assert the UI shows both mocked names (proves mock + UI wiring)
    await expect(page.locator('text=Bharath')).toBeVisible();
    await expect(page.locator('text=Reddy')).toBeVisible();
    console.log('Mocked user names are visible in the list');
});
