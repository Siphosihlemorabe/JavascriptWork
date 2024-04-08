class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullname() {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
  }
}
let person1 = new Person("Ntebo", "Themos");
let person2 = new Person("Bebo", "Remos");
console.log(person1.fullname());
console.log(person2.fullname());
