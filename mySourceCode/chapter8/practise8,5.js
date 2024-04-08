// Create the string and convert it to lowercase
const firstStr = "ThIs is A tEst STRIng";
const lowercaseString = firstStr.toLowerCase();

// Create an array containing the vowels
const vowels = ["a", "e", "i", "o", "u"];

//  Loop through each letter and output it to the console
for (let i = 0; i < lowercaseString.length; i++) {
  console.log(lowercaseString[i]);
}

//Replace each vowel substring with its index value
let updatedString = lowercaseString;
vowels.forEach((vowel, index) => {
  updatedString = updatedString.replaceAll(vowel, index.toString());
});

console.log("Updated String:", updatedString);
