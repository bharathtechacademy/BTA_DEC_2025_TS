//Jumping Statements in TypeScript

// 1.break
// 2.continue
// 3.return
// 4.throw

//break statement: It is used to terminate the loop when condition is met.

//normal for loop to print numbers from 1 to 5
for(let i:number = 1; i <= 5; i++) {
    console.log(i); //1,2,3,4,5
}

// for loop with break stataement to terminate the loop when i equals 3
console.log("Using break statement:");
for(let i:number = 1; i <= 5; i++) {
    if(i === 3) {
        break; //terminate the loop when i equals 3
    }
    console.log(i);//1,2
}

//continue statement: It is used to skip the current iteration of the loop when condition is met.
// for loop with continue statement to skip the iteration when i equals 3
console.log("Using continue statement:");
for(let i:number = 1; i <= 5; i++) {
    if(i === 3) {
        continue; //skip the iteration when i equals 3
    }
    console.log(i);//1,2,4,5
}

//return statement: It is used to exit from the function and optionally return a value.
function addNumbers(a: number, b: number): number {
    return a + b; //exit from the function and return the sum of a and b
   // console.log("This line will not be executed");//this line will not be executed, because return statement exits the function
}
let sum: number = addNumbers(5, 10);
console.log("Sum:", sum); //Sum: 15

//throw statement: It is used to throw an exception when an error occurs.
function withdrawAmount(amount:number){
    if(amount<=0){
        throw new Error("Invalid amount. Amount should be greater than zero.");
    }
    console.log("Amount withdrawn:", amount);
}
withdrawAmount(100); //Amount withdrawn: 100
withdrawAmount(-50); //Uncaught Error: Invalid amount. Amount should be greater than zero.    