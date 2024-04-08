let num1 = 3;
let nnum2 = 2;
let operator = "+";
function operands(num1, nnum2, operator) {
  if (operator == "-") {
    console.log(num1 - nnum2);
    return num1 - nnum2;
  } else {
    return num1 + nnum2;
  }
}
console.log(operands(num1, nnum2, "-"));
