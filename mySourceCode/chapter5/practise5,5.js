// let grid = [];
// let numberOfCells = 64;
// let counter = 0;
// let row = [];
// for (i = 0; i < numberOfCells + 1; i++) {
//   if (counter % 8 == 0) {
//     if (row !== undefined) {
//       grid.push(row);
//       if (counter !== 0) {
//         row = [];
//       }
//     }
//   }
//   counter++;
//   let temp = counter;
//   row.push(temp);
//   if (counter == 8) {
//     grid.push(row);
//   }
// }
// console.log(grid);

// Step 1: Create a grid array variable.
let grid = [];

// Step 2: Set a value of 64 for the number of cells.
let numberOfCells = 64;

// Step 3: Set a counter to 0.
let counter = 0;

// Step 4: Create a global variable to be used for the row array.
let row = [];

// Step 5: Create a loop to iterate up to the number of cells you want in the array, plus one to include the zero value.
for (let i = 0; i < numberOfCells + 1; i++) {
  // Step 6: Add an outer if statement to check if the main counter is divisible by 8 or whatever number of columns you want.
  if (counter % 8 === 0) {
    // Step 7: Inside the preceding if statement, check if the row is undefined, indicating whether it is the first run or whether the row is complete.
    if (typeof row !== "undefined" && row.length > 0) {
      // Add the row to the main grid array.
      grid.push(row);
    }

    // Step 8: Clear the row array if the counter is divisible by 8.
    if (counter !== 0) {
      row = [];
    }
  }

  // Step 9: Increment the main counter by 1.
  counter++;

  // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array.
  let tempValue = counter;
  row.push(tempValue);

  // Step 11: Check if the value of the counter is equal to the total number of columns you want and add the current row to the grid.
  if (counter === 8) {
    grid.push(row);
  }
}

// Step 12: Output the grid into the console.
console.log(grid);
