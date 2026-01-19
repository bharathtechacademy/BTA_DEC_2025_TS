//Loop Statements : Loop the statements or repeat the execution of statements multiple times based on the conditions given

// 1.for loop:When we know the total number of iterations to be executed before itself, we use for loop.
// 2.while loop:When we don't know the total number of iterations to be executed before itself, we use a while loop. 


//1.for loop

//syntax:

//for (condition-to-start; condition-to-end; increment/decrement)
{
    //statements
}

//example: Print the name Bharath for 10 times using for loop
let empName: string = "Bharath";
for (let i: number = 1; i <= 10; i++) {
    console.log(i + empName);
}

//2.while loop
//syntax:
//while(condition)
{
    //statements
}

//example: Refresh the page until the application is launched successfully. 
// let counter: number = 1;
// while (counter > 0) {
//      let isPageLoaded: boolean = false; //assume this value is coming from application
//      if (isPageLoaded || counter === 10) {
//         break;//terminate the loop when the page is loaded or not loaded even after 10 attempts
//      }
//     console.log("Refresh the page");
//     counter++;
// }

//3.do..while loop (special type of while loop)
let i:number =0;
// while(i>0){
//     console.log("Bharath Reddy");
//     i++;
// }

// do{
//     console.log("Bharath Reddy");
//     i++;
// }while(i>0);

//4.for..of loop : Iterate over each and every value of the predefined list (array,set,map)
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];


//traditionl for loop
for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for..of loop
//syntax:
//for (variable of pre-defined-list)
{
    //statements
}

for (let fruit of fruits) {
    console.log(fruit);
}

//Map
let employeeMap:Map<string,string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath");

employeeMap.keys();
employeeMap.values();

for(let empDetail of employeeMap){
    console.log(empDetail);
}


//5.for..in loop : Iterate over each and every key of the predefined object

//object ==> object represents a collection of key-value pairs.

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

console.log(empinfo.empId);
console.log(empinfo["empId"]);

//syntax:
//for (key in pre-defined-object)
{
    //statements
}

for (let key in empinfo) {
    console.log(key);
    console.log(empinfo[key as keyof empDetails]);
}