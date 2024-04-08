let multiplicationTable = [];

const value = 10;

outer: for (let i = 1; i <= value; i++) {
  let row = [];

  inner: for (let j = 1; j <= value; j++) {
    row.push(i * j);
  }

  multiplicationTable.push(row);
}

// Print the multiplication table
console.log("Multiplication Table:");
for (let row of multiplicationTable) {
  console.log(row.join(" /"));
}
