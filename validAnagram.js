function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {},
    frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("anitalavalatina", "lavalatinaanita"));
