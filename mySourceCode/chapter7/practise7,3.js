"use strict";

class AnimalNoises {
  constructor(cowSound, dogSound, catSound) {
    this.cow = cowSound;
    this.dog = dogSound;
    this.cat = catSound;
  }

  // Method to print the sound of a given animal
  printSound(animal) {
    switch (animal) {
      case "cow":
        console.log(`The cow says ${this.cow}`);
        break;
      case "dog":
        console.log(`The dog says ${this.dog}`);
        break;
      case "cat":
        console.log(`The cat says ${this.cat}`);
        break;
      default:
        console.log("Unknown animal");
    }
  }
}

// Create an instance of AnimalNoises
const animalSounds = new AnimalNoises("Moo", "Woof", "Meow");

// Output the entire object into the console
console.log(animalSounds);

// Call the printSound method for each animal
console.log(animalSounds.printSound("cow"));
console.log(animalSounds.printSound("dog"));
console.log(animalSounds.printSound("cat"));
