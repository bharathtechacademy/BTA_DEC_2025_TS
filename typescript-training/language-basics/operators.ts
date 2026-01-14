//Operators: Operators are special characters that we are going to use to perform different types of operations in JavaScript and TypeScript. 

// There are mainly five different types of operators in TypeScript and JavaScript. 

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Conditional (Ternary) Operators

// 1. Arithmetic Operators: These operators are used to perform mathematical operations. 
//+ Addition
//- Subtraction
//* Multiplication
/// Division
//% Modulus
//++ Increment (x++ ==> post increment, ++x ==> pre increment)
//-- Decrement (x-- ==> post decrement, --x ==> pre decrement)

let a: number = 10;
let b: number = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b));// 5
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Post Increment: " + (a++));
console.log("After next line of post inctrement: " + (a));
console.log("Pre Increment: " + (++b));
console.log("Post Decrement: " + (a--));
console.log("After next line of post decrement: " + (a));
console.log("Pre Decrement: " + (--b));

// 2. Assignment Operators: These operators are used to assign values to variables.
//= Assignment
//+= Addition Assignment
//-= Subtraction Assignment
//*= Multiplication Assignment
///= Division Assignment
//%= Modulus Assignment
let c: number = 20;
c += 10; // c = c + 10
console.log("Addition Assignment: " + c);
c -= 5; // c = c - 5
console.log("Subtraction Assignment: " + c);
c *= 2; // c = c * 2
console.log("Multiplication Assignment: " + c);
c /= 5; // c = c / 5
console.log("Division Assignment: " + c);
c %= 3; // c = c % 3
console.log("Modulus Assignment: " + c);


// 3. Comparison Operators: These operators are used to compare two values.
//== Equal to (loose equality) (only compares values, performs type coercion)
//=== Strict Equal to
//!= Not Equal to (loose inequality) (only compares values, performs type coercion)
//!== Strict Not Equal to
//> Greater than
//< Less than
//>= Greater than or equal to
//<= Less than or equal to

let x: number = 10;
let y: any = '10';
console.log("Equal to (loose): " + (x == y));
console.log("Strict Equal to: " + (x === y));
console.log("Not Equal to (loose): " + (x != y));
console.log("Strict Not Equal to: " + (x !== y));
console.log("Greater than: " + (x > 5));
console.log("Less than: " + (x < 15));
console.log("Greater than or equal to: " + (x >= 10));
console.log("Less than or equal to: " + (x <= 20));

//4. Logical Operators: These operators are used to combine multiple conditions.
//&& Logical AND
//|| Logical OR
//! Logical NOT

let i: number = 10;
let j: number = 20;
console.log("Logical AND: " + (i > 5 && j > 15)); //true and true = true
console.log("Logical OR: " + (i > 15 || j > 15)); //false or true = true
console.log("Logical NOT: " + !(i > 5));// not true = false

//5. Conditional (Ternary) Operator: This operator is used to evaluate a condition and return one of two values based on the result of the condition.
//condition ? valueIfTrue : valueIfFalse
let age:number = 17;
let canVote: string = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Can Vote: " + canVote);