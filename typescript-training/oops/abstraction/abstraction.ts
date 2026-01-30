//Abstraction in TypeScript

//Abstraction is the concept of hiding the implementation. 

//method ==> A method is a block of code or a collection of statements written together inside a block to perform specific tasks. 

abstract class Application {

    //abstract method
    abstract loginIntoApplication(): void ; //method

    //non-abstract method
    forgetPassword(): void {
        console.log("Forget Password method implementation");
    }

    //static method
    static appInfo(): void {
        console.log("Application Information");
    }
}

//let obj = new Application(); //Cannot create an instance of an abstract class.

  class WebApplication extends Application {

     loginIntoApplication(): void {
         throw new Error("Method not implemented.");
     }
    
}

let app = new WebApplication();
app.forgetPassword();
Application.appInfo();