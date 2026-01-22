//string: String is nothing but a collection of characters written together within the quotations. 

//1. Creating a String
let greeting: string = "Hello, World!"; //double quotes
let farewell: string = 'Goodbye, World!'; //single quotes
let templateLiteral: string = `Welcome to TypeScript!`; //backticks

console.log(greeting); // Output: Hello, World!
console.log(farewell); // Output: Goodbye, World!
console.log(templateLiteral); // Output: Welcome to TypeScript!

//advantage with backticks
let name: string = "Alice";
let personalizedGreeting1: string = "Hello, ${name}! Welcome to TypeScript.";
let personalizedGreeting2: string = 'Hello, ${name}! Welcome to TypeScript.';
let personalizedGreeting3: string = `Hello, ${name}! Welcome to TypeScript.`;
console.log(personalizedGreeting1); // Output: Hello, ${name}! Welcome to TypeScript.
console.log(personalizedGreeting2); // Output: Hello, ${name}! Welcome to TypeScript.
console.log(personalizedGreeting3); // Output: Hello, Alice! Welcome to TypeScript.

//********String Methods************/

//1.Storing String value
console.log("1.Storing String value");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log("Original String: '" + originalString + "'");

//2. Calculate the total number of characters available in the string. ==> string.length
console.log("2. Calculate the total number of characters available in the string.");
let stringLength: number = originalString.length;
console.log("Length of the string: " + stringLength); // Output: Length of the string:  Forty something

//3. Get the specific character from the string at a specific index. ==> string.charAt(index)
console.log("3. Get the specific character from the string at a specific index.");
let charAtIndex5: string = originalString.charAt(5);
console.log("Character at index 5: " + charAtIndex5); // Output: Character at index 5: n

//reverse the string
let reversedString: string = "";
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString.charAt(i);
}
console.log("Reversed String: '" + reversedString + "'");


