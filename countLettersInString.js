const str = "Bart Simpson";

function countLetters(str) {
  const hash = {};
  const newStr = trimmedLowerCase(str);
  for (let i of newStr) {
    if (hash[i] !== undefined) {
      hash[i]++;
    } else {
      hash[i] = 1;
    }
  }
  return hash;
}

function trimmedLowerCase(str) {
  return str.replace(/\s/g, "").toLowerCase();
}

console.log(countLetters(str));
