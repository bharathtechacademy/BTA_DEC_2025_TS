//Polymorphism in TypeScript
//Polymorphism allows methods to do different things based on the object it is acting upon.

//Two types of polymorphism:
//1. Compile-time polymorphism (Method Overloading) : Adding multiple methods with the same name but different parameters.
//2. Run-time polymorphism (Method Overriding) : Having multiple methods with the same name in different classes related by inheritance.

// Compile-time polymorphism (Method Overloading)

class Calculator {

    add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: any, b: any): any {
        return a + b;
    }


}           

let calc = new Calculator();
console.log(calc.add(5, 10));          // Output: 15
console.log(calc.add("Hello, ", "World!")); // Output: Hello, World!


// Run-time polymorphism (Method Overriding)

//Parent class
class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

//Child class Dog
class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks");
    }
}

//Child class Cat
class Cat extends Animal {
    makeSound(): void {
        console.log("Cat meows");
    }
}

let dog = new Dog();
dog.makeSound(); // Output: Dog barks