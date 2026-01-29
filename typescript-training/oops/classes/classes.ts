//OOPS in TypeScript

//Class:  Class is a template or prototype that is very useful to maintain data, functions, and objects together at one place. 

//Object: An object is an instance of a class.

//Constructor: A constructor is a special method that is called when an object of a class is created. It is used to initialize the properties of the class.

//Example of Class, Object and Constructor in TypeScript

//Syntax:

// class nameOfClass{
//     //properties
//     property1: string; //data member
//     property2: number;

//     //constructor
//     constructor(param1: string, param2: number){
//         this.property1 = param1;
//         this.property2 = param2;
//     }

//     //method
//     display(): void{
//         console.log("Property 1: " + this.property1);
//         console.log("Property 2: " + this.property2);
//     }
// }

//Creating the class to maintain employee data and a couple of functions related to that. 
class Employee {

    //properties
    empName: string = "Bharath Reddy"; //data member
    empID: number = 1234;

    //method
    printEmployeeProjects(name: string): void {
        console.log("Employee Projects: " + name);
    }

    //constructor
    constructor() {
        console.log("Employee class object created");
    }

}

class EmployeeRole {

    emp = new Employee();//creating object of Employee class inside EmployeeRole class

    //properties
    roleName: string = "Software Developer"
    roleID: number = 5678

    //method
    printEmployeeRole(role: string): void {
        console.log("Employee ID: " + new Employee().empID);//accessing empID property of Employee class
        console.log("Employee Name: " + this.emp.empName);//accessing empName property of Employee class
        console.log("Employee Role: " + role);

    }

}

//Creating object of Employee class
let obj1 = new Employee();//object of class Employee
let obj2 = new EmployeeRole();//object of class EmployeeRole
console.log("Employee Name: " + obj1.empName);
console.log("Employee ID: " + obj1.empID);
obj1.printEmployeeProjects("Project A, Project B");
obj2.printEmployeeRole("Software Developer");