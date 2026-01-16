//Loop Statements : Loop the statements or repeat the execution of statements multiple times based on the conditions given

// 1.for loop:When we know the total number of iterations to be executed before itself, we use for loop.
// 2.while loop:When we don't know the total number of iterations to be executed before itself, we use a while loop. 


//1.for loop

//syntax:

//for (condition-to-start; condition-to-end; increment/decrement)
{
    //statements
}

//example: Print the name Bharath for 10 times using for loop
let empName: string = "Bharath";
for (let i: number = 1; i <= 10; i++) {
    console.log(i + empName);
}

//2.while loop
//syntax:
//while(condition)
{
    //statements
}

//example: Refresh the page until the application is launched successfully. 
let counter: number = 1;
while (counter > 0) {
     let isPageLoaded: boolean = false; //assume this value is coming from application
     if (isPageLoaded || counter === 10) {
        break;//terminate the loop when the page is loaded or not loaded even after 10 attempts
     }
    console.log("Refresh the page");
    counter++;
}