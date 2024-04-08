let value = "1000";

(function () {
  let value = "New value assigned within IIFE";
  console.log("Local value within IIFE:", value);
})();

let result = (function () {
  let value = "Another new value assigned within IIFE expression";
  return value;
})();

console.log("Result variable:", result);

let anonymousFunction = function (newValue) {
  value = newValue;
  console.log("Value assigned within anonymous function:", value);
};

anonymousFunction("Value passed into anonymous function");
