// 1. Create an array to hold an inventory of store items.
let inventory = [];

// 2. Create three items with properties: name, model, cost, and quantity.
let item1 = {
    name: "Laptop",
    model: "ABC123",
    cost: 1200,
    quantity: 10
};

let item2 = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 800,
    quantity: 20
};

let item3 = {
    name: "Tablet",
    model: "PQR789",
    cost: 500,
    quantity: 15
};

// 3. Add all three items to the main array using an array method, and then log the inventory array to the console.
inventory.push(item1, item2, item3);
console.log("Inventory:", inventory);

// 4. Access the quantity element of the third item and log it to the console.
console.log("Quantity of the third item:", inventory[2].quantity);

// Experiment by adding and accessing more elements within your data structure.
// Adding and accessing more elements:
let item4 = {
    name: "Desktop",
    model: "DEF321",
    cost: 1500,
    quantity: 8
};

inventory.push(item4);

console.log("Updated Inventory:", inventory);
console.log("Quantity of the fourth item:", inventory[3].quantity);
