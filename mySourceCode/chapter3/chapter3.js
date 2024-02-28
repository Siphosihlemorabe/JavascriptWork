let shoppingList=['Milk','Bread','Apples'];
console.log(shoppingList.length);
shoppingList[1]='Bananas';
console.log(shoppingList);
// if you would want to add elements at a certain index can use the splice() method
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
/*The splice() method takes multiple parameters. The
first parameter, 2 in our case, is the index of the array on which we want to start
inserting. The second parameter, 0 in our case, is the number of elements we want to
delete starting at our previously defined starting index. */
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
//You can also add elements of another array to a new array using concat
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
/*This concat() method can do even more! We can use it to add values as well. We can
add a single value, or we can comma-separate multiple values: */
let arr7 = arr5.concat(arr6);
console.log(arr7);//it wil log [1, 2, 3,4, 5, 6]
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
//Deleting elements
/*There are several ways in which you can delete elements from an array. Removing
the last element is done with pop(): */
arr8.pop();// the new array is [ 1, 2, 3, 4, 5, 6, 7, 8 ]
/*Deleting the first element can be done with shift(). This causes all other indices to
be reduced by one: */
arr8.shift();//the new array is [ 2, 3, 4, 5, 6, 7, 8 ]
//using splice()method
arr8.splice(1, 3);// array is now [ 2, 6, 7, 8 ]
/* As you can see, 3 elements starting from the second positional index have been
deleted. The values 3, 4, and 5 are gone. If you do not wish to change any of the later
indices, you can also use the operator delete.*/
delete arr8[0];// the array is now [ <1 empty item>, 6, 7, 8 ]
// finding elements
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
//arrow function
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
// if you want to find the first occurance of an element we use indexOf()
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex/*will show 1 because the first occurance is in index 1 */, findIndex2/*will sho -1 as there is no 10 */);
/* If you want to find the next occurrence of the specified number, you can add a
second argument to indexOf(), specifying from which position it should start
searching:*/
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);/* In this case, the value of findIndex3 will be -1, because 6 cannot be found starting
from index 2*/
//To find the last occurance use lastIndexOf()
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
//Sorting
/*There is also a built-in method for sorting arrays. It sorts numbers from small to
high and strings A-Z. You can call sort() on an array and the order of the values of
the array will change to a sorted order: */
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();//the array after sorting is [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
let ages = [18, 72, 33, 56, 40];
ages.sort();//after sorting [ 18, 33, 40, 56, 72 ]
//Reversing
/*The elements of the array can be reversed by calling the built-in method, reverse(),
on an array. It puts the last element first, and the first element last. It does not matter
whether the array is sorted or not; it just reverses the order. */
let namesOfPeople=[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ];
namesOfPeople.reverse();//The new order will be:[ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]
//Multidimensional arrays
/*arrays can contain any data type  (which, in turn, can contain… other arrays!) This
is called a multidimensional array. It sounds complicated, but it is just an array of
arrays: a list of lists: */
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
/*So, we can create an array of already existing arrays. This is called a two-dimensional
array. We can write it like this: */
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//If you want to access elements of the inner arrays, you will have to specify an index twice: 
let value1 = arrOfArrays[0][1];//that is why its called two dimensional array

//objects in js
let arr = [0, 1, 2];
console.log(typeof arr);//an array is an object
let dog = { dogName: "JavaScript",
 weight: 2.4,
 color: "brown",
 breed: "chihuahua",
 age: 3,
 burglarBiter: true
 };//An object in JavaScript is a collection of key-value pairs for storing related data.
 
 //updating objects
/*We can change the value of the properties of the objects. Again, this is similar to an
array because an array is an object as well, but for properties, we have two options: */
dog["color"] = "blue";
dog.weight = 2.3;

//objects in objects
let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };//address is an object within the original object
 //to modify you can
 company.address.zipcode = "33117";
 //or
company["address"]["number"] = "100";
//arrays in objects
company = { companyName: "Healthy Candy",
 activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };/*We've integrated an array into our company object. Utilizing square brackets after the property allows straightforward array usage. Retrieving individual values is akin to accessing elements in arrays. To fetch the second value of the activities array, employ this statement: */
 //let activity = company.activities[1];
 //objects in arrays
 let addresses = [{
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
  },
  {
  street: "1st West avenue",
  number: "5",
  zipcode: "75001",
  city: "Addison",
  state: "Texas"
  }];
  //objects in arrays in objects
  company = { companyName: "Healthy Candy",
 activities: [ "food manufacturing",
"improving kids' health","manufacturing toys"],
address: [{
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}],
yearOfEstablishment: 2021
};