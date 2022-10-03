function sort(arr, direction) {
  const newArray = [];
  let numbers = arr.filter((n) => typeof n === "number");

  while (numbers.length > 0) {
    const valToSort =
      direction === "desc" ? Math.max(...numbers) : Math.min(...numbers);
    newArray.push(valToSort);
    numbers = numbers.filter((n) => n !== valToSort);
  }
  return newArray;
}
//console.log(sort([1,20,10,-1,0,5,4,null,"hello"],"asc")) // => [-1, 0, 1, 4, 5, 10, 20]
