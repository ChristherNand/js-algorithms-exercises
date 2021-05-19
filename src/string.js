function findSecondCoincidenceOfLetterOnString(str) {
  let strCounter = 0,
    subString = "",
    e = 1;
  if (Boolean(str.length)) {
    while (subString.length < 2) {
      subString = str[strCounter];
      for (let i = e; i < str.length; i++) {
        if (subString === str[i]) {
          subString = subString + str[i];
        }
      }
      e++;
      strCounter++;
    }
    return subString;
  } else {
    return false;
  }
}
console.log(findSecondCoincidenceOfLetterOnString("kariokequeñositar")); // 'kk'
