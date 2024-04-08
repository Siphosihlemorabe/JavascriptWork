// Task 1
console.log(Math.PI);

// Task 2
console.log("Ceil of 5.7:", Math.ceil(5.7));
console.log("Floor of 5.7:", Math.floor(5.7));
console.log("Round of 5.7:", Math.round(5.7));

// Task 3
console.log("Random value:", Math.random());

// Task 4
console.log("Random number between 0 and 10:", Math.floor(Math.random() * 11));

// Task 5
console.log(
  "Random number between 1 and 10:",
  Math.floor(Math.random() * 10) + 1
);

// Task 6
console.log(
  "Random number between 1 and 100:",
  Math.floor(Math.random() * 100) + 1
);

// Task 7
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 100; i++) {
  console.log("Random number from 1 to 100:", getRandomNumber(1, 100));
}
