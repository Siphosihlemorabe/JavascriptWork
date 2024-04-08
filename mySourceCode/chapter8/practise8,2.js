let arrWithDuplicates = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];
let arrWithoutDuplicate = arrWithDuplicates.filter((element, index, array) => {
  console.log(element, index, array.indexOf(element));
  return array.indexOf(element) === index;
});
console.log(arrWithoutDuplicate);
