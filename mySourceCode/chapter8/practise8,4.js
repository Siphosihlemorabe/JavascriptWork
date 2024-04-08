const mixedString = "Hello welcome To the World Of coding";

function manipulateString(str) {
  const lowercaseStr = str.toLowerCase();

  const capitalizedWordsArray = [];

  const wordsArray = lowercaseStr.split(" ");

  wordsArray.forEach((word) => {
    const capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);

    capitalizedWordsArray.push(capitalizedWord);
  });

  const updatedString = capitalizedWordsArray.join(" ");

  return updatedString;
}

console.log(manipulateString(mixedString));
