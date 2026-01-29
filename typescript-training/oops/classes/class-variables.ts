class Employee {

    // Instance variable
    empName: string = "Bharath Reddy";

    // Static variable
    static company: string = "Tech Solutions";  

    // local Variable inside method
    displayDetails(): void {
        let empId: number = 101; //Local Variable, we cannot access this outside this method
        console.log(`Employee ID: ${empId}`);
        // console.log(`Employee Name: ${this.empName}`);
        // console.log(`Company: ${Employee.company}`);
    }

   
}

let obj = new Employee();
obj.displayDetails();
console.log(obj.empId); // Accessing local variable // Error: Cannot access local variable outside method
console.log(obj.empName); // Accessing instance variable (we can access by creating instance of class)
console.log(Employee.company); 