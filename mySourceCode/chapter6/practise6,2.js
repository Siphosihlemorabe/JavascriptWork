let decriptive = [
  "smelly",
  "boring",
  "smart",
  "noisy",
  "beautiful",
  "amazing",
  "wonderful",
  "breathtaking",
  "magnificent",
];
let rando = Math.floor(Math.random() * decriptive.length);
function whatIsYourName() {
  let yourName = prompt("whats your name");
  let chooseRando = decriptive[rando];
  console.log(yourName, "you are " + chooseRando);
}
whatIsYourName();
