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

//4.Removing unwanted spaces (begining & trailing) from the string. ==> string.trim()
console.log("4.Removing unwanted spaces from the string.");
let trimmedString: string = originalString.trim();
console.log("Original String: '" + originalString + "'");
console.log("Trimmed String: '" + trimmedString + "'");

//5. Removing all the spaces from the string. ==> string.replace(/\s+/g, '')
console.log("5. Removing all the spaces from the string.");
let stringWithoutSpaces: string = originalString.replace(/ /g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without spaces: '" + stringWithoutSpaces + "'");

//5. Removing all the alphabets from the string. ==> string.replace(/\s+/g, '')
console.log("5. Removing all the alphabets from the string.");
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without alphabets: '" + stringWithoutAlphabets + "'");

//6. Removing all the numbers from the string. ==> string.replace(/\s+/g, '')
console.log("6. Removing all the numbers from the string.");
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without numbers: '" + stringWithoutNumbers + "'");

//7. Removing all the special chars from the string. ==> string.replace(/[^a-zA-Z0-9]/g, '') 
console.log("6. Removing all the special chars from the string.");
let stringWithoutSpecialChars: string = originalString.replace(/[^a-zA-Z0-9 ]/g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without special chars: '" + stringWithoutSpecialChars + "'");

//8. Converting the string to Uppercase. ==> string.toUpperCase()
console.log("8. Converting the string to Uppercase.");
let upperCaseString: string = originalString.toUpperCase();
console.log("Original String: '" + originalString + "'");
console.log("Uppercase String: '" + upperCaseString + "'");

//9. Converting the string to Lowercase. ==> string.toLowerCase()
console.log("9. Converting the string to Lowercase.");
let lowerCaseString: string = originalString.toLowerCase();
console.log("Original String: '" + originalString + "'");
console.log("Lowercase String: '" + lowerCaseString + "'");

//10. Extracting a part of the string based on the starting and ending index. ==> string.substring(startIndex, endIndex)
console.log("10. Extracting a part of the string based on the starting and ending index.");
let username: string = originalString.substring(12, 17);
let password: string = originalString.substring(31);
console.log("Original String: '" + originalString + "'");
console.log("Extracted Substring: '" + username + "'");
console.log("Extracted Substring: '" + password + "'");

//11. Splitting the string based on a specific separator. ==> string.split(separator)
console.log("11. Splitting the string based on a specific separator.");
let stringParts: string[] = originalString.split(' ');
let user: string = stringParts[3]!;
let pass: string = stringParts[7]!;
console.log("Original String: '" + originalString + "'");
console.log("Extracted Username: '" + user + "'");
console.log("Extracted Password: '" + pass + "'");

//12. Compare two different strings. 
//=== operator for strict equality (case-sensitive)
//== operator for loose equality (case-insensitive)
//includes() method for substring presence check
//startsWith() method for prefix check
//endsWith() method for suffix check
console.log("12. Compare two different strings.");
let stringA: string = "TypeScript";
let stringB: string = "typescript";
console.log("String A: '" + stringA + "'");
console.log("String B: '" + stringB + "'");
console.log("Are both strings strictly equal? " + (stringA === stringB)); // Output: false
console.log("TypeScript contains 'Script'? " + stringA.includes("Script")); // Output: true
console.log("TypeScript contains 'script'? " + stringA.includes("script")); // Output: false
console.log("TypeScript starts with 'Type'? " + stringA.startsWith("Type")); // Output: true
console.log("TypeScript starts with 'Pipe'? " + stringA.startsWith("Pipe")); // Output: false
console.log("TypeScript ends with 'Script'? " + stringA.endsWith("Script")); // Output: true
console.log("TypeScript ends with 'Script'? " + stringA.endsWith("Scripts")); // Output: false

//14. Data Conversions  
// Convert other data types to string. ==> String(value)
// Convert string to other data types. ==> parseInt(string), parseFloat(string), Boolean(string)
console.log("14. Data Conversions");
let stdCode:number = 144;
let phone:number = 323456;
let stdCodeString:string = String(stdCode);
console.log(stdCodeString+phone);

//I want to verify whether my account is having minimum balance of 10000 or not. 
let balance:string = "Account balance is 19,999.99 rupees.";
balance =balance.replace(/[^0-9.]/g, ''); //removing unwanted chars except numbers and dot 9999.99
console.log(balance);
let bal:number = parseFloat(balance); //converting string to number 9999.99
console.log(bal>=10000);