/*
*Data types are two different categories. 
*Primitive data types and Non-primitive data types.
*/

/*********************************/
/*******PRIMITIVE DATA TYPES******/
/*********************************/

//1.number ==> number represents numbers with decimals and without decimals. (without quotes)
let num = 123; //number without decimals
num+10;
console.log(num); //output: 123
let floatNum = 12.34; //number with decimals
console.log(typeof num); //output: number
console.log(typeof floatNum); //output: number

//2.string ==> string represents text / sequence of characters wrapped inside single or double quotes.
let str1 = 'Hello, World!'; //string with single quotes
let str2 = "JavaScript is fun!";//string with double quotes
console.log(typeof str1); //output: string
console.log(typeof str2); //output: string

//3.boolean ==> boolean represents result of condition : true or false.
let isJavaScriptFun = true; //boolean true
let isSkyGreen = false; //boolean false
console.log(typeof isJavaScriptFun); //output: boolean

//4.undefined ==> undefined represents a variable that has been declared but not assigned a value.
let undefVar; //variable declared but not assigned
console.log(typeof undefVar); //output: undefined

//5.null ==> null represents an intentional absence of any object value.
let nullVar = null;

//6.symbol ==> symbol represents a unique identifier.
let countryOfOrigin = Symbol();
let productInfo= {
    productName: "OnePlus 9",
    productPrice: 69990,
    [countryOfOrigin]: "China"
};
console.log(productInfo); 


/*********************************/
/****NON-PRIMITIVE DATA TYPES*****/
/*********************************/
//1.object ==> object represents a collection of key-value pairs.
let empDetails = {
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

//print employee name
console.log(empDetails.empName); //output: John Doe
//print employee zip code
console.log(empDetails.address.zipCode); //output: 10001
//print entire employee details
console.log(empDetails);

//2.array ==> array represents an ordered collection of items.
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsAndPrices= ["Apple", 120, "Banana", 60, "Mango", 150, "Orange", 80];
let fruitsAndPricesAndAvailability= ["Apple", 120, true, "Banana", 60, true, "Mango", 150, false, "Orange", 80, true];

//print banana from fruits array
console.log(fruits[1]); //output: Banana
//print price of Apple from fruitsAndPrices array
console.log(fruitsAndPrices[1]); //output: 120
//print availability of Orange from fruitsAndPricesAndAvailability array
console.log(fruitsAndPricesAndAvailability[11]); //output: true


//3.function ==> function represents a block of code designed to perform a particular task.
function launchTheApplication(browserName, url) {
    console.log("Launch the browser: " + browserName);
    console.log("Navigate to URL: " + url);
    console.log("Application launched successfully!");
}

//call the function
launchTheApplication("Chrome", "https://www.example.com");

//4.Date ==> Date represents date and time in JavaScript.
let currentDate = new Date();

//get current year
console.log(currentDate.getFullYear()); //output: current year

//get current month
console.log(currentDate.getMonth() + 1); //output: current month (0-based index, so adding 1)

//get current date
console.log(currentDate.getDate()); //output: current date

//get current hours
console.log(currentDate.getHours()); //output: current hours

//get current minutes
console.log(currentDate.getMinutes()); //output: current minutes

//get current seconds
console.log(currentDate.getSeconds()); //output: current seconds

//get milliseconds since January 1, 1970
console.log(currentDate.getMilliseconds()); //output: milliseconds since January 1, 1970


//5. Map ==> Map represents a collection of key-value pairs where keys can be of any data type.
let employeeMap = new Map();
employeeMap.set("empId", 101);
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", true);
employeeMap.set("empName", "Bharath");
employeeMap.delete("havingVisa"); //deleting key havingVisa
//get employee name
console.log(employeeMap.get("empName")); //output: Bharath
console.log(employeeMap);
console.log(employeeMap.size);//getting size of the map

//6. Set ==> Set represents a collection of unique values of any data type.
let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); //duplicate value, will not be added
uniqueNumbers.delete(10); //deleting value 10
console.log(uniqueNumbers.size)//getting size of the set
console.log(uniqueNumbers);