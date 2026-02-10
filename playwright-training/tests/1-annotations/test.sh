________________________________________
test.afterAll() – Global Cleanup
Description
Runs once after all tests in the file.
Common Uses
•	Closing connections
•	Cleaning test data
•	Generating logs
Example
test.afterAll(async () => {
  console.log('Global afterAll: Runs once after all tests');
});
________________________________________
test.beforeEach() – Global Precondition
Description
Runs before every test in the file.
Common Uses
•	Launching application
•	Navigating to a base URL
•	Resetting test state
Example
test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});
________________________________________
test.afterEach() – Global Teardown
Description
Runs after every test in the file.
Common Uses
•	Logging test results
•	Cleaning cookies or storage
•	Taking screenshots on failure
Example
test.afterEach(async ({ page }) => {
  await page.close();
});
________________________________________
Group-Level Hooks
Definition
Group-level hooks are defined inside a test.describe() block.
They apply only to tests within that group.
________________________________________
Group-Level beforeAll()
Description
Runs once before all tests inside the group.
Example
test.describe('Login Tests', () => {

  test.beforeAll(async () => {
    console.log('Group beforeAll: Login setup');
  });

});


________________________________________
Group-Level beforeEach()
Description
Runs before each test in the group.
Example
test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

});
________________________________________
Group-Level afterEach()
Description
Runs after each test in the group.
Example
test.describe('Login Tests', () => {

  test.afterEach(async () => {
    console.log('Cleanup after each login test');
  });

});
________________________________________
Group-Level afterAll()
Description
Runs once after all tests in the group.
Example
test.describe('Login Tests', () => {

  test.afterAll(async () => {
    console.log('Group afterAll: Login tests completed');
  });

});
