let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);
function adder() {
  let counter = val;
  for (let i = 0; i < val; i++) {
    counter++;
    console.log(counter);
  }
  return counter;
}
