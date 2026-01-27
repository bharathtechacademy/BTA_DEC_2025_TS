//2. throwing an customized error

let age: number = 17;

if(age < 18){
   throw new Error("Not Eligible to vote ");
}else{
    console.log("Eligible to vote ");
}

console.log("Execution Continues...");