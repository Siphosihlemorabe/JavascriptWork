const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Remove the first element and add "FIRST" at the beginning
theList.shift();
theList.unshift("FIRST");

// Remove the fourth element and add "MIDDLE" at index 2
theList.splice(2, 1, "MIDDLE");

// Remove the sixth element and add "hello World" at index 3
theList.splice(3, 1, "hello World");

// Remove the last two elements
theList.pop();
theList.pop();

// Add "LAST" at the end
theList.push("LAST");

console.log(theList);
