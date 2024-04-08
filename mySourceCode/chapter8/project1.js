let myChoise = "simmoea";
function choice(word) {
  let lenOfStr = word.length;
  let tempStr = "";
  for (let i = 0; i < lenOfStr; i++) {
    let rando = Math.floor(Math.random() * lenOfStr);
    tempStr += word[rando];
    console.log(tempStr);
    word = word.slice(0, rando) + word.slice(rando + 1);
    console.log(word);
  }
  return tempStr;
}
choice(myChoise);
