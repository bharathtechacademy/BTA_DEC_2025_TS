import { sum } from "../modules/4_default_exports.ts";

//asynchronous function that returns a promise & reject 
function prmoseMethod(): Promise<string> {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        console.log(`Generated number: ${randomNum}`);
        if (randomNum > 0.5) {
            resolve(`Resolved with number: ${randomNum}`);
        } else {
            reject(new Error(`Rejected with number: ${randomNum}`));
        }
    })
};

async function executeTest(): Promise<void> {
    const result: string = await prmoseMethod();
    console.log(result);
}
executeTest();

//executeTest2
function sumOfNumbers(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

function executeTest2(): void {
    let sum = sumOfNumbers(10);
    console.log("Sum of first 10 numbers is: " + sum);
}

executeTest2();