//using else if
let age = 10;
let cost = 0;
let message;
if (age < 3) {
 cost = 0;
 message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
 cost = 5;
 message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
 cost = 10;
 message ="A regular ticket costs 10 dollars.";} else {
  cost = 7;
  message ="A ticket is 7 dollars.";
 }
 console.log(message);
 console.log("Your Total cost "+cost);
 //more else if
 if(age < 3){
  console.log("Access is free under three.");
 } else if(age < 12) {
  console.log("With the child discount, the fee is 5 dollars");
 } else if(age < 65) {
  console.log("A regular ticket costs 10 dollars.");
 } else if(age >= 65) {
  console.log("A ticket is 7 dollars.");
 }
 //switch statements
//  switch(expression) {
//   case value1:
//   // code to be executed
//   break;
//   case value2:
//   // code to be executed
//   break;
//   case value-n:
//   // code to be executed
//   break;
//  }
let activity='Get up'
switch(activity) {
  case "Get up":
  console.log("It is 6:30AM");
  break;
  case "Breakfast":
  console.log("It is 7:00AM");
  break;
  case "Drive to work":
  console.log("It is 8:00AM");
  break;
  case "Lunch":
  console.log("It is 12:00PM");
  break;
  case "Drive home":
  console.log("It is 5:00PM");
  break;
  case "Dinner":
  console.log("It is 6:30PM");
  break;
 }
 //combining cases
 switch(grade){
  case "F":
  case "D":
  console.log("You've failed!");
  break;
  case "C":
  case "B":
  console.log("You've passed!");
  break;
  case "A":
  console.log("Nice!");
  break;
  default:
  console.log("I don't know this grade.");
 }
