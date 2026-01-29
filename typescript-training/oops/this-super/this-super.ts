//this & super in TypeScript

//this keyword refers to the current instance of a class
//super keyword is used to call the constructor of the parent class

class Parent{
    course:string = "Java";
}

class Child extends Parent{
    course:string = "Selenium";

    printCourse(course:string){
        console.log(course);
        // console.log(new Child().course);
        // console.log(new Parent().course);
        console.log(this.course);
        console.log(super.course);
    }
}

let child = new Child();
child.printCourse("TypeScript"); //Course: TypeScript