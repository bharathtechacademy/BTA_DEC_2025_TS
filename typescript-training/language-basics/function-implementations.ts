// function implementations

//1. Function without parameters and without return type
//Creating a function that is not going to take any input, at the same time it is not going to give you any output data as well. 
function helloWorld():void{
    console.log("Hello, World!");
}

//calling the function
helloWorld(); // Output: Hello, World!

//2. Function with parameters and without return type
//Creating a function that is going to take some input parameters, but it is not going to give you any output data.
function greetUser(name:string):void{
    console.log("Hello, " + name + "!");
}

//calling the function
greetUser("Abhishek"); // Output: Hello, Abhishek!

//3. Function with parameters and with return type
//Creating a function that is going to take some input parameters and it is also going to give you some output data.
function addNumbers(a:number, b:number):number{
    return a + b;
}

//calling the function
let sum = addNumbers(5, 10);
console.log("Sum: " + sum); // Output: Sum: 15

//4. Function without parameters and with return type
//Creating a function that is not going to take any input, but it is going to give you some output data.
function getCurrentYear():number{
    let currentDate = new Date();
    return currentDate.getFullYear();
}

//calling the function
let year = getCurrentYear();
console.log("Current Year: " + year); // Output: Current Year: 2024 (or the current year)

//5. Function with optional parameters. 
//Creating a function that can take some input parameters and some parameters are optional to enter. 
// ? represents that the parameter is optional.
function printEmployeeDetails(name:string, age?:number):void{
    if(age !== undefined){
        console.log("Employee Name: " + name + ", Age: " + age);
    } else {
        console.log("Employee Name: " + name + ", Age: Not Provided");
    }
}

//calling the function
printEmployeeDetails("John", 30); // Output: Employee Name: John, Age: 30
printEmployeeDetails("Doe"); // Output: Employee Name: Doe, Age: Not Provided

//6. Function with default parameters.
//Creating a function that can take some input parameters and some parameters have default values if not provided.
function printEmployeeInfo(name:string, visaStatus:boolean = false):void{
    console.log("Employee Name: " + name + ", Visa Status: " + visaStatus);
}
//calling the function
printEmployeeInfo("Alice", true);// Output: Employee Name: Alice, Visa Status: true
printEmployeeInfo("Bob");// Output: Employee Name: Bob, Visa Status: false

//7. Function with rest parameters.
//Creating a function that can take multiple input parameters as an array.
function sumOfNumbers(...numbers:number[]):void{
    let sum:number = 0;
    for(let num of numbers){
        sum += num;
    }
    console.log("Sum: " + sum);
}

//calling the function
sumOfNumbers(1, 2, 3, 4, 5); // Output: Sum: 15
sumOfNumbers(10, 20); // Output: Sum: 30
sumOfNumbers(5); // Output: Sum: 5