let nameIs = "";
let num = 7;
for (let i = 0; i <= 10; i++) {
  if (i === num) {
    continue;
  }
  nameIs += " " + i;
}
console.log(nameIs);
