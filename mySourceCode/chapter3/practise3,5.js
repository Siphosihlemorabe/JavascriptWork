// 1. Create an object named people that contains an empty array called friends.
let people = {
  friends: []
};

// 2. Create three variables, each containing an object for a friend.
let friend1 = {
  firstName: "John",
  lastName: "Doe",
  ID: 123
};

let friend2 = {
  firstName: "Jane",
  lastName: "Smith",
  ID: 456
};

let friend3 = {
  firstName: "Michael",
  lastName: "Johnson",
  ID: 789
};

// 3. Add the three friends to the friends array.
people.friends.push(friend1, friend2, friend3);

// 4. Output the friends array to the console.
console.log(people.friends);
