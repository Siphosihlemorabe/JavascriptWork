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
invoked();
function invoked() {
  myObject.forEach((el) => {
    console.log(`${el.name} is  ${el.color} `);
  });
}
