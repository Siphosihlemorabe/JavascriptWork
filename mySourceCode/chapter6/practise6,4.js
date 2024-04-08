function calcValue(x, y) {
  return x + y;
}

let Values = [];

for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;

  let response = calcValue(value1, value2);

  Values.push(response);
}

console.log(Values);
