// const myDate = new Date("2023-07-15");
// console.log("Date object:", myDate);

// const monthsOfYear = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const day = myDate.getDate();
// const year = myDate.getFullYear();
// const monthIndex = myDate.getMonth();
// const monthName = monthsOfYear[monthIndex];

// console.log("Day:", day);
// console.log("Year:", year);
// console.log("Month:", monthName);
let future = new Date(2025, 5, 40);

console.log(future);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month - 1]} ${day} ${year}`;
console.log(myDate);
console.log(Date());
