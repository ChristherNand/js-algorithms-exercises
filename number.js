//let arr = [0, 1, 2, 3, 4, 5, 3];

function calc(arr, n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += arr[i];
  }
  return sum;
}

//console.log(calc(arr, 0, 6));

//let t = [4, 23, 36, 7, 40, 8, 3, 2, 101, 0];

function isOnEvenPosition(table, value) {
  for (let i = 0; i <= table.length; i++) {
    if (value === table[i] && i % 2 === 0) {
      return true;
    }
  }
  return false;
}

//console.log(isOnEvenPosition(t, 7));
