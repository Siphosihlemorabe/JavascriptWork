let arr = [];
for (i = 0; i < 10; i++) {
  arr.push(i);
  console.log(arr);
}
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}
for (const val of arr) {
  console.log(val);
}
