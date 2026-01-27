const palindromeCheck = (str: string): void => {

    // 1. Convert the input string to lowercase
    // This ensures the comparison is case-insensitive
    const lowerCaseStr: string = str.toLowerCase();

    // 2. Remove all non-alphabet characters (spaces, commas, symbols, etc.)
    // Example:
    // "A man, a plan, a canal: Panama"
    // becomes -> "amanaplanacanalpanama"
    const cleanedStr: string = lowerCaseStr.replace(/[^a-z]/g, "");

    // 3. Reverse the cleaned string using a for loop
    let reversedStr: string = "";

    // Start from the last character and move towards the first
    for (let i: number = cleanedStr.length - 1; i >= 0; i--) {
        // charAt(i) returns the character at index i
        reversedStr = reversedStr + cleanedStr.charAt(i);
    }

    // 4. Compare original cleaned string with reversed string
    if (cleanedStr === reversedStr) {
        console.log(`The string "${cleanedStr}" is a Palindrome`);
    } else {
        console.log(`The string "${cleanedStr}" is NOT a Palindrome`);
    }
};

// Function Call
palindromeCheck("A man, a plan, a canal: Panama");


export {};