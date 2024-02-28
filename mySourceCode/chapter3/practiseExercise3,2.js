let shoppingList=[];
shoppingList.push('Milk','Bread','Apples');
shoppingList.splice(1,1,'Bananas','Eggs');
console.log(shoppingList.pop());
shoppingList.sort();
console.log(shoppingList.indexOf('Milk'));
/* bananas milk  */
shoppingList.splice(0,0,'carrots','lettuce');
let newList=['Juice','pop'];
// 9. Combine both lists, adding the new list twice to the end of the first list.
shoppingList.push(newList[0], newList[1], newList[0], newList[1]);
// 10. Get the last index value of Pop and output it to the console
let popIndex = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", popIndex);