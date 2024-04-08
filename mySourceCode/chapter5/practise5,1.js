// Step 1: Create a variable for the max value
var max = 5;

// Step 2: Generate a random number for the solution
var solution = Math.floor(Math.random() * max) + 1;
console.log("Random number:", solution);

// Step 3: Create a variable to track whether the answer is correct
var isCorrect = false;

// Step 4: Use a while loop to prompt the user for guesses
while (!isCorrect) {
  // Prompt the user to enter a number between 1 and max
  var guess = parseInt(prompt("Enter a number between 1 and " + max));

  // Step 5: Check if the guess is correct
  if (guess === solution) {
    isCorrect = true;
    alert("Congratulations! You guessed the correct number.");
  } else {
    if (guess < solution) {
      alert("Too low. Try again.");
    } else {
      alert("Too high. Try again.");
    }
  }
}
