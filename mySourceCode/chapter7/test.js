"use strict";

let nameArray = [
  "Eleanor",
  "Liam",
  "Ava",
  "Noah",
  "Sophia",
  "Oliver",
  "Emma",
  "William",
  "Isabella",
  "James",
];

let nameRequest = prompt("Please enter a name");
nameRequest = nameRequest.toLowerCase(); // Assign the result back to nameRequest

function guessList(name) {
  let found = false;
  nameArray.forEach((item) => {
    if (name === item.toLowerCase()) {
      // Convert item to lowercase for comparison
      found = true;
    }
  });
  if (found) {
    alert("You are on the list!");
  } else {
    alert(`${name} is not on the list unfortunately`);
  }
}

guessList(nameRequest);
