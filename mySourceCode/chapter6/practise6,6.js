function calcFactorial(num) {
  console.log("Current value:", num);

  if (num === 0) {
    return 1; // This is correct, it returns 1 when num is 0
  } else {
    return num * calcFactorial(num - 1); // Here's the fix, we need to call calcFactorial recursively
  }
}

console.log("Factorial result:", calcFactorial(5));
