// 1. Create an array containing three values: 1, 2, and 3.
let originalArray = [1, 2, 3];

// 2. Nest the original array into a new array three times.
let newArray = [originalArray, originalArray, originalArray];

// 3. Output the value 2 from one of the arrays into the console.
console.log(newArray[0][1]); // This will output 2 from the first nested array.
