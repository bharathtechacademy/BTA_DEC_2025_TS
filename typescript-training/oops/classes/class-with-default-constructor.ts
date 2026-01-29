//Creating the class to maintain employee data and a couple of functions related to that. 
class Employee {

    //Before Parameterized Constructor

    //method 1
    printEmployeeDetails(empId:number, name: string): void {
        console.log("Employee ID: " + empId);
        console.log("Employee Name: " + name);
    }

    //method 2
    printEmployeeProjects(empId: number, projects: string): void {
        console.log("Employee ID: " + empId);
        console.log("Employee Projects: " + projects);
    }

    // method 3
    printEmployeeRole(empId: number, role: string): void {
        console.log("Employee ID: " + empId);
        console.log("Employee Role: " + role);
    }

}

//Creating object of Employee class
let empObj = new Employee();//object of class Employee
empObj.printEmployeeDetails(1234, "Bharath Reddy");
empObj.printEmployeeProjects(1234, "Project A, Project B");
empObj.printEmployeeRole(1234, "Software Developer");