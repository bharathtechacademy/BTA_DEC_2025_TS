//Creating the class to maintain employee data and a couple of functions related to that. 
class Employee {

    empId: number;

    //After Parameterized Constructor
    constructor(id: number,empName?: string, empProjects?: string, empRole?: string) {
        this.empId = id; //this keyword is used to refer to the current class instance
    }

    //method 1
    printEmployeeDetails(name: string): void {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + name);
    }

    //method 2
    printEmployeeProjects(projects: string): void {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Projects: " + projects);
    }

    // method 3
    printEmployeeRole(role: string): void {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Role: " + role);
    }

}

//Creating object of Employee class
let empObj = new Employee(1234,"Bharath Reddy","Project A, Project B","Software Developer");//object of class Employee
empObj.printEmployeeDetails("Bharath Reddy");
empObj.printEmployeeProjects("Project A, Project B");
empObj.printEmployeeRole("Software Developer");