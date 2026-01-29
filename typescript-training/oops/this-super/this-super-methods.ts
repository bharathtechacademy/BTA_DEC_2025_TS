class Class1{
    printName():void{
        console.log("Playwright");
    }
}

class Class2 extends Class1{

      printName():void{
        console.log("Selenium");
    }

    printCourse():void{
        this.printName();
        super.printName();
    }

}

let obj = new Class2();
obj.printCourse();