let myObj = {
  name: "sim",
  id: 12345,
  isRich: false,
};
for (let props in myObj) {
  console.log(props, ":", myObj[props]);
}
