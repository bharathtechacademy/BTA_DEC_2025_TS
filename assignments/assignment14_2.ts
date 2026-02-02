// Declare and initialize a number array with some unsorted numbers
let array: number[] = [12, 34, 11, 36, 87, 98, 93];

// Begin sorting the array in descending order without using a temporary variable
for (let i: number = 0; i < array.length; i++) {

    // Compare element at index i with the rest of the elements to its right
    for (let j: number = i + 1; j < array.length; j++) {

        // If current element is less than the next one, a swap is needed
        if (array[i] < array[j]) {

            // Swapping without using a temp variable using arithmetic operations
            // Let's say array[i] = a and array[j] = b

            // Step 1: a = a + b ==> 12+34 = 46
            array[i] = array[i] + array[j];

            // Step 2: b = a - b => (a + b) - b = a ==>46-34 = 12
            array[j] = array[i] - array[j];

            // Step 3: a = a - b => (a + b) - a = b ==>46-12 = 34
            array[i] = array[i] - array[j];

            // After these 3 steps, values of array[i] and array[j] are swapped
        }
    }
}

// Now the array is sorted in descending order
// The largest number is at index 0
// The second largest number is at index 1
// The third largest number is at index 2

// Printing the second largest number
console.log("Second largest number is :" + array[1]);

// Printing the third largest number
console.log("Third largest number is :" + array[2]);

export { };