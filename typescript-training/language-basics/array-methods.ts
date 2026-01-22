//Array : An array is a collection of multiple values. 

//1. Creating an Array
console.log("1. Creating an Array");
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['Apple', 'Banana', 'Cherry'];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

//2. Accessing Array Elements
console.log("2. Accessing Array Elements");
console.log(fruits[1]); // Output: Banana
console.log(numbers[2]); // Output: 3

//3. Adding additional values to the existing array at the end. 
console.log("3. Adding additional values to the existing array at the end.");
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

//4. Removing the last element from an array
console.log("4. Removing the last element from an array");
let lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//5.Adding additional value at the beginning of an array. 
console.log("5. Adding additional value at the beginning of an array.");
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

//6. Removing the first element from an array
console.log("6. Removing the first element from an array");
let firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//7. Add or remove one or more values within the array from a specific index. 
console.log("7. Add or remove one or more values within the array from a specific index.");
let removedNumbers = numbers.splice(2, 0, 10, 11);//splice(index, numberOfElementsToRemove, elementsToAdd)
console.log(numbers); // Output: [1, 2, 10, 11, 3, 4, 5]

//8. Creating a new array by extracting a portion of an existing array
console.log("8. Creating a new array by extracting a portion of an existing array");
let subArray = numbers.slice(1, 4); //slice(startIndex, endIndex+1)
console.log(subArray); // Output: [2, 10, 11]

//9. Merges two or more arrays and creates a new array.
console.log("9. Merges two or more arrays and creates a new array."); 
let numbers1: number[] = [6, 7, 8];
let numbers2: number[] = [9,10,11];
let mergedArray = numbers1.concat(numbers2);
console.log(mergedArray); // Output: [6, 7, 8, 9, 10, 11]

//10. Finding the index of a specific value in an array
console.log("10. Finding the index of a specific value in an array");
let index = fruits.indexOf('Cherry');
console.log(index); // Output: 2
let mangoIndex = fruits.indexOf('Mango');
console.log(mangoIndex); // Output: -1

//11. Iterate over values of array. 
console.log("11. Iterate over values of array.");
for (let fruit of fruits) {
    console.log(fruit);
}
for (let number of numbers) {
    console.log(number);
}

//12.Reverse the values within the array. 
console.log("12. Reverse the values within the array.");
numbers.reverse();
console.log(numbers);

//13. Sort the values within the array. 
console.log("13. Sort the values within the array.");
numbers.sort((a,b) => a - b); // Ascending order
console.log(numbers);
numbers.sort((a,b) => b - a); // Descending order
console.log(numbers);

//14.map,filter, foreach methods
//map: Create a new array with manipulated values from the original array. 
//filter: Create a new array with values that meet a specific condition.
//foreach: Execute a provided function once for each array element.
console.log("14. map, filter, foreach methods");
let values: number[] = [1,2,3,4,5];

//map (Get square of each and every number. )
let squaredValues = values.map(x => x * x);
console.log(squaredValues); // Output: [1,4,9,16,25]

//filter (Get neven numbers from the array.)
let evenValues = values.filter(x => x % 2 === 0);
console.log(evenValues); // Output: [2,4]

//foreach (Print each value from the array.)
values.forEach(x => console.log(x));


