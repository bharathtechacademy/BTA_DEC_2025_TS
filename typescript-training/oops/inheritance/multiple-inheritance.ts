class Class1 {
    empName: string = "Bharath Reddy";
    empId: number = 101;
}

class Class2 {
    empSalary: number = 50000;
}

class Class3 extends Class1, Class2 {
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