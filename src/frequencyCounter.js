function sameValuesSquared(arr1, arr2) {
  let freqCount = {};
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  for (let value of arr1) {
    freqCount[value ** 2] = (freqCount[value ** 2] || 0) + 1;
  }
  for (let value of arr2) {
    if (!freqCount[value]) return false;
    freqCount[value] -= 1;
  }
  return true;
}
console.log(sameValuesSquared([1, 4, 2], [1, 4, 16])); //true
console.log(sameValuesSquared([1, 5, 2], [1, 4, 16])); //false
console.log(sameValuesSquared([1, 4, 2], [1, 4, 5, 20])); //false
