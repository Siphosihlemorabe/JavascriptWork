class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let myFriend = new Person("Ntebo", "Mosweu");
let myFriend2 = new Person("pablo", "gom");
console.log("hello", myFriend.firstName, myFriend.lastName);
console.log("Hello", myFriend2.firstName, myFriend2.lastName);
