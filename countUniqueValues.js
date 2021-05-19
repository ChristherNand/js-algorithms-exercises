function countUniqueValues(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) counter++;
  }
  return counter;
}

console.log(countUniqueValues([-1,0,1,1,1,2,6,8,8,8,9])) // 7
