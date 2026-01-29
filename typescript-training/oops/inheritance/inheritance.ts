//Inheritance in TypeScript

//Inheritance is the concept of extending parent class properties into child class without creating any object. 
//extends keyword is used to achieve inheritance in TypeScript.

//There are three different types of inheritance available in OOPS! 
//1. Single Inheritance
//2. Multilevel Inheritance
//3. Hierarchical Inheritance


//4.multiple Inheritance is not supported in TypeScript/JavaScript.


//Single Inheritance Example
class Class1 {
    empName: string = "Bharath Reddy";
    empId: number = 101;
}

class Class2 extends Class1 {
    empSalary: number = 50000;

    printDetails(): void {
        // let obj = new Class1();
        // console.log(`Employee Name: ${obj.empName}`);
        // console.log(`Employee ID: ${obj.empId}`);

        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Salary: ${this.empSalary}`);
    }
}


//Multilevel Inheritance Example
class Class3 extends Class2 {
    empAddress: string = "Hyderabad";

    printFullDetails(): void {
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Salary: ${this.empSalary}`);
        console.log(`Employee Address: ${this.empAddress}`);
    }
}

let obj = new Class3();
obj.printFullDetails();