//Callback function example in TypeScript


function sumOfNumbers(input: number): number {

    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

//Program to demonstrate callback function

//Normal execution flow
console.log("Execution started");
console.log("Step 1 Executed");
console.log("Step 2 Executed");
let result = sumOfNumbers(10);
console.log("Step 3 :Sum of first 10 numbers is: " + result);
console.log("Step 4 Executed");
console.log("Execution ended");


//Callback execution flow
console.log("**********Callback Function Execution Flow**********");
console.log("Execution started");
console.log("Step 1 Executed");
console.log("Step 2 Executed");
setTimeout(():void=>{
    let result = sumOfNumbers(10);
    console.log("Step 3 :Sum of first 10 numbers is: " + result);
},3000);
console.log("Step 4 Executed");
console.log("Execution ended");