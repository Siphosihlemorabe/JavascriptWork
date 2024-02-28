// 1. Create a new myCar object for a car.
let myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue",
  mileage: 5000,
  forSale: true
};

// 2. Create a variable to hold the string value color.
let propertyName = "color";

// Use the variable within square bracket notation to assign a new value to the color property.
myCar[propertyName] = "red";

// 3. Assign a new property string value and use bracket notation to assign a new value.
propertyName = "forSale";
myCar[propertyName] = false; // Indicates the car is not available for purchase.

// 4. Output make and model into the console.
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// 5. Output the value of forSale into the console.
console.log("For Sale:", myCar.forSale);
