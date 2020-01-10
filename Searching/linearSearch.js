function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

testArr = [1, 5, 2, 7, 3, 10];
testVal = 3;

console.log(linearSearch(testArr, testVal));
