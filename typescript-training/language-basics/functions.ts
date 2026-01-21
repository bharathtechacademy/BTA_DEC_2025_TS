//functions in TypeScript

// JavaScript or TypeScript supports three commonly used function styles: 

// 1. Named functions
// 2. Arrow functions/Lambda functions
// 3. Anonymous functions

// 1. Named functions: 
// Named functions are nothing but the functions that are declared explicitly with some name. 

//Syntax:

// function functionName(parameters):returnType {
//   // function body
// }

function greetThePerson(name: string): string {
  return "Hello, "+name+"! Good Morning.";
}

function printTheGreeting(name: string): void {
  console.log("Hello, "+name+"! Good Morning.");
}

let greetMsg = greetThePerson("Alice");
console.log(greetMsg); // Output: Hello, Alice! Good Morning.
printTheGreeting("Bob"); // Output: Hello, Bob! Good Morning.


// 2. Arrow functions/Lambda functions
// Arrow functions are a more concise syntax for writing function expressions. They are often used for short functions or as callbacks.

// Syntax:
// let functionName = (parameters):returnType => {
//   // function body
// }

// Calculate the sum of two numbers and return the output in the form of a number. 

//regular function
function sum(a: number, b: number): number {
    let c:number = a + b;
    return c;
}

//arrow function
let sumOfNumber = (a: number, b: number): number => a+b;

// Calculate the square of  numbers and return the output in the form of a number. 
function square(a: number): number {
    let c:number = a * a;
    return c;
}

//arrow function
let squareOfNumber = (a: number): number => a*a;

console.log(sum(1,2)); // Output: 3
console.log(sumOfNumber(1,2)); // Output: 3


// 3. Anonymous functions:
// Anonymous functions are functions that are defined without a name. They are often used as arguments to other functions or assigned to variables.
// Syntax:
// let functionName = function(parameters):returnType {
//   // function body
// }

//Syntax : function as parameter of another function
// function outerFunction(paramFunction: functionType): returnType {
//   // function body
// }

// Example: Using an anonymous function as parameter of another function
function run(  greet: (name: string) => void  ): void {
    greet("Charlie");
}

function printName(name: string): void {
    console.log("Hello, "+name+"! Good Morning.");
}

//calling the function
run(

function(name:string):void{
    console.log("Hello, "+name+"! Good Morning.");
}

)

printName("Bharath"); // Output: Hello, David! Good Morning.