class Menu {
  #item1Price;
  #item2Price;
  #totalCost;

  constructor(item1Price, item2Price) {
    this.#item1Price = item1Price;
    this.#item2Price = item2Price;
  }

  calculateTotalCost(item1Quantity, item2Quantity) {
    return item1Quantity * this.#item1Price + item2Quantity * this.#item2Price;
  }

  get totalCost() {
    return this.#totalCost;
  }

  calculateAndSetTotalCost(item1Quantity, item2Quantity) {
    this.#totalCost = this.calculateTotalCost(item1Quantity, item2Quantity);
  }
}

const order1 = new Menu(5, 8);
const order2 = new Menu(6, 10);
const order3 = new Menu(4, 7);
order1.calculateAndSetTotalCost(2, 3);
order2.calculateAndSetTotalCost(4, 2);
order3.calculateAndSetTotalCost(1, 5);

console.log("Total cost for order 1:", order1.totalCost);
console.log("Total cost for order 2:", order2.totalCost);
console.log("Total cost for order 3:", order3.totalCost);
