/*
*Data types are two different categories. 
*Primitive data types and Non-primitive data types.
*/

/*********************************/
/*******PRIMITIVE DATA TYPES******/
/*********************************/

//1.number ==> number represents numbers with decimals and without decimals. (without quotes)
let marks: number = 98;
let percentage: number = 99.9;
console.log("Marks: ", marks);
console.log("Percentage: ", percentage);

//2.string ==> string represents text data. (with quotes)
let name1: string = "Bharath"; //double quotes
let name2: string = 'Bharath'; //single quotes
let name3: string = `Bharath`; //backticks
console.log("Name1: ", name1);
console.log("Name2: ", name2);
console.log("Name3: ", name3);

//3.boolean ==> boolean represents only two values true or false. (it specifies results of conditions)
let visaStatus: boolean = true;
let isGraduated: boolean = false;
console.log("Visa Status: ", visaStatus);
console.log("Is Graduated: ", isGraduated);

//union of types ( | )==> variable can hold more than one type of data.
let empAddress: string | number | boolean;
empAddress = "Bangalore";
empAddress = 560068;
console.log("Employee Address: ", empAddress);

//4.undefined ==> undefined represents a variable that is declared but not assigned with any value.
let empSalary: undefined | number;
empSalary = 60000;
console.log("Employee Salary: ", empSalary);

//5.null ==> null represents a variable that is assigned with a null value.
let empRole: null | string;
empRole = null;
empRole = "Developer";
console.log("Employee Role: ", empRole);

/*********************************/
/*****NON-PRIMITIVE DATA TYPES*****/
/*********************************/

//1. array ==> array represents a collection of similar data types.
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits: ", fruits);

let scores: number[] = [98, 99, 100, 95];
console.log("Scores: ", scores);

//fruit names along with their prices in array
let fruitDetails: (string | number)[] = ["Apple", 100, "Banana", 40, "Mango", 120];

//2. object ==> object represents a collection of key-value pairs.

interface empDetails {
    empId: number ,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};
console.log("Employee Details: ", empinfo.empName);
console.log("Employee Address: ", empinfo.address.city);

//3. tuple ==> tuple represents a collection of different data types in a specific order.
let address : [string,string,number] = [ "221B Baker Street", "London", 560068] ;
console.log("Address: ", address);

//4. function ==> function represents a block of code that performs a specific task.
//void represents a function that does not return any value.
//if function returns any value, then same data type should be mentioned in the function definition.
function launchTheApplication(browserName: string , url:string):void {
    console.log("Launch the browser: " + browserName);
    console.log("Navigate to URL: " + url);
    console.log("Application launched successfully!");    
}

function sumOfNumbers(num1: number, num2: number): number {
    let num3:number = num1 + num2;
    return num3;
}

function getFullName(firstName: string, lastName: string): string {
    let fullname:string = firstName +" "+ lastName;
    return fullname;
}

launchTheApplication("Chrome", "www.example.com");
console.log("Sum of Numbers: ", sumOfNumbers(10, 20));
console.log("Full Name: ", getFullName("Bharath", "Reddy"));

//5. Map ==> Map represents a collection of key-value pairs where keys can be of any data type.
let employeeMap:Map<string,string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath");
employeeMap.delete("havingVisa"); //deleting key havingVisa

console.log("Employee Map: ", employeeMap);

//6. Set ==> Set represents a collection of unique values of any data type.
let uniqueNumbers :Set<number> = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); //duplicate value, will not be added
uniqueNumbers.delete(10); //deleting value 10
console.log(uniqueNumbers.size)//getting size of the set
console.log(uniqueNumbers);

//7. any ==> any represents a variable that can hold any type of data. (not recommended to use)
//it will remove all the type-checking benefits provided by TypeScript.
let randomValue: any;
randomValue = 100;;
console.log("Random Value (number): ", randomValue);
randomValue = "Hello World";
console.log("Random Value (string): ", randomValue);
randomValue = true;
console.log("Random Value (boolean): ", randomValue);