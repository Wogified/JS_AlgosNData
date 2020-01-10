// implement Radix Sort

function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = digitCount(arr[i]);
    if (temp > result) {
      result = temp;
    }
  }
  return result;
}

function radixSort(arr) {
  // create a variable for the total number of iterations necessary due to the
  // size of the largest number in the array
  let max = maxDigits(arr);

  let count = 0;

  // for loop over the max number of digits
  for (let i = 0; i < max; i++) {
    // clear the arrays
    tempArr = [[], [], [], [], [], [], [], [], [], []];
    // loop over the array to sort each elem into its respective bucket
    for (let j = 0; j < arr.length; j++) {
      // loop over 0 - 9 to sort the number into its bucket
      k = getDigit(arr[j], i);
      tempArr[k].push(arr[j]);
      count++;
    }
    // concatenate the bucket arrays
    arr = [].concat(...tempArr);
  }
  console.log(count);
  return arr;
}

var testCases2 = [
  [[5, 1, 3, 6, 4, 9, 5, 2], 12345],
  [[4, 3, 2, 1], "poo"],
  [[10, 123412, 234, 14142, 3234, 5645, 1241, 976], "poo"]
];

for (let i = 0; i < testCases2.length; i++) {
  console.log("-----------------------------------------------------");
  a = testCases2[i][0];
  b = testCases2[i][1];
  result = radixSort(a);
  console.log(result);
}
