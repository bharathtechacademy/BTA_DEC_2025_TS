//Access Modifiers in TypeScript

//Access Modifiers are keywords that we are using to control the access of class members.

//There are three access modifiers in TypeScript:
//1. public / no modifier ==> can be accessed from anywhere
//2. protected ==> can be accessed within the class and its subclasses
//3. private ==> can be accessed only within the class

class Person {
    public name : string = "John"; // public access modifier
    protected age : number = 30; // protected access modifier
    private ssn : string = "123-45-6789"; // private access modifier

    //Accessing all members within the class
    printData(){
        console.log("Accessing members within the class:");
        console.log("Name: " + this.name); // Accessible
        console.log("Age: " + this.age); // Accessible
        console.log("SSN: " + this.ssn); // Accessible
    }

}

class Employee extends Person {

    //Accessing members from the subclass
    printData(){
        console.log("Accessing members from the subclass:");
        console.log("Name: " + this.name); // Accessible
        console.log("Age: " + this.age); // Accessible
        console.log("SSN: " + this.ssn); // Not Accessible, will throw error
    }
}

//Creating object of Person class and accessing members from outside the class
let person = new Person();
person.printData();

let emp = new Employee();
emp.printData();

console.log("Accessing members from outside the class:");
console.log("Name: " + emp.name); // Accessible
console.log("Age: " + emp.age);// Not Accessible, will throw error
console.log("SSN: " + emp.ssn); // Not Accessible, will throw error