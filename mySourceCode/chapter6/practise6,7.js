let start = 10;

function count(countdownValue) {
  console.log(countdownValue);

  if (countdownValue < 1) {
    return; // Return from the function when countdownValue is less than 1
  } else {
    // If countdownValue is greater than or equal to 1, continue counting down
    countdownValue--; // Decrement the countdownValue
    count(countdownValue); // Recursively call count with the decremented countdownValue
  }
}

count(start);
