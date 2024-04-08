// Task 1: Decoding and encoding strings
const decodedString = decodeURIComponent("How's%20it%20going%3F");
const encodedString = encodeURIComponent("How's it going?");

console.log("Decoded string:", decodedString);
console.log("Encoded string:", encodedString);
const variable1 = "Hello";
const variable2 = "World";

const encodedURI = encodeURIComponent(
  `http://www.basescripts.com?var1=${variable1}&var2=${variable2}`
);
const decodedURI = decodeURIComponent(encodedURI);

console.log("Encoded URI:", encodedURI);
console.log("Decoded URI:", decodedURI);

// Task 3: Creating a web URI with request parameters
const webURI = "http://www.basescripts.com?var1=Hello%20World";

const encodedWebURI = encodeURIComponent(webURI);

console.log("Encoded Web URI:", encodedWebURI);
