//1.Difference between unknown and any. 
let a: any;
a = "Hello";
a = 10;
console.log(a + 10);

let b: unknown;
b = "Hello";
b = 10;
if (typeof b === "number") {
    console.log(b + 10);
}

//2. Type Alias in TypeScript. 
type input = string | number;

let userInput: input;
userInput = "Test";
userInput = 25;

if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
if (typeof userInput === "number") {
    console.log(userInput + 10);
}


//3. How to reduce the flaky test cases in Playwright? 
// await page.waitForTimeout(5000); // Not Recommended
// await page.waitForSelector('#elementId'); // Recommended


//4. Auto-wait mechanism in TestCafe and how it is going to work. 
//await mechanism in TestCafe automatically waits for page elements to load and become ready for interaction before performing actions on them. This means that TestCafe will wait for elements to appear in the DOM, become visible, and be enabled before executing test steps, reducing the need for manual waits or timeouts in test scripts. This leads to more reliable and stable tests as it minimizes the chances of interacting with elements that are not yet ready.

//by default TestCafe waits up to 10 seconds for an element to become available before throwing an error. This timeout can be adjusted using the `--selector-timeout` command-line option or the `selectorTimeout` configuration setting in the TestCafe configuration file.

//5. Generics in TypeScript. 
function getValue<T>(input: T): T {
    return input;
}

getValue<string>("Hello");
getValue<number>(100);

console.log(getValue("Generic Test"));
console.log(getValue(200));
