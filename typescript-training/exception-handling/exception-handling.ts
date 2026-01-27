//Exception Handling in TypeScript

//Exception + Handling ==>  Handling the exceptions in different ways. 

//1. Try...Catch...Finally Block  ==> When there is an exception, we can handle that particular exception and continue the execution process. 
//2. Throwing our own exceptions  ==> We can throw our own exceptions using the throw keyword.


//1. Try...Catch...Finally Block


//Before Exception Handling
//let empName: any; //declearing a variable

//create error in execution
// console.log(empName.toLowerCase())

// console.log("Execution is Completed");

//After Exception Handling
let newEmpName: any; //declearing a variable
try {
    console.log(newEmpName.toLowerCase())
} catch (error) {
    console.log("An exception occurred. Please check the variable.");
    console.log(newEmpName.toUpperCase())
} finally{
    console.log("Execution is Completed"); //This block will always execute
}

