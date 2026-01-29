

//Hierarchical Inheritance Example
class Class1 {
    empName: string = "Bharath Reddy";
    empId: number = 101;
}

class Class2 extends Class1 {
    empSalary: number = 50000;
    printDetails(): void {
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Salary: ${this.empSalary}`);
    }
}

class Class3 extends Class1 {
     empAddress: string = "Hyderabad";
        printDetails(): void {
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Address: ${this.empAddress}`);
    }   
}

let obj1 = new Class2();
obj1.printDetails();

let obj2 = new Class3();
obj2.printDetails();