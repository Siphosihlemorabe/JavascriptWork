let myObject = [
  {
    name: "hello",
    color: "green",
  },
  {
    name: "bye",
    color: "red",
  },
];
let newStr = JSON.stringify(myObject);
let newObject = JSON.parse(newStr);
function iterate() {
  newObject.forEach((element) => {
    console.log(`${element.name} and ${element.color}`);
  });
}
iterate();
