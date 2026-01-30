//Encapsulation in TypeScript

// Encapsulation is the concept of hiding the information. 
// Encapsulation is the concept of binding the data and methods together to access the private information. 

class Employee {
    // private properties
    private empName: string="Bharath Reddy";
    private empAge: number=1234;
    private empSalary: number=200000;

    //public setter & getter methods
    public setName(name: string): void {
        this.empName = name;
    }
    public getName(): string {
        return this.empName;
    }
    public setAge(age: number): void {
        this.empAge = age;
    }
    public getAge(): number {
        return this.empAge;
    }
    public setSalary(salary: number): void {
        this.empSalary = salary;
    }
    public getSalary(): number {
        return this.empSalary;
    }

}

let emp = new Employee();
emp.setName("John Doe");
emp.setAge(30);
emp.setSalary(50000);

console.log("Employee Name: " + emp.getName());
console.log("Employee Age: " + emp.getAge());
console.log("Employee Salary: " + emp.getSalary());