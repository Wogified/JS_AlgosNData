// implement Radix Sort

function getDigit(num, pos) {
  // Convert to string method
  //   let temp = num.toString();
  //   if (pos > temp.length - 1) {
  //     return 0;
  //   }
  //   return Number(temp[temp.length - 1 - pos]);

  //   The Math way
  // Absolute Value to account for negative numbers
  let a = Math.abs(num);
  // digit value. Use this to bring the number to 2 digits or less
  let b = Math.pow(10, pos);
  // divide the abs val by the digit val and floor the result to get rid of the decimals
  let c = Math.floor(a / b);
  // find the remainder when dividing by 10
  let d = c % 10;

  return d;
}

function digitCount(num) {
  // string count method
  //   let temp = num.toString();
  //   return temp.length;

  // Math Method
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
  let tempArr = [[], [], [], [], [], [], [], [], [], []];
  let count = 0;

  // for loop over the max number of digits
  for (let i = 0; i < max; i++) {
    // loop over the array to sort each elem into its respective bucket
    for (let j = 0; j < arr.length; j++) {
      // loop over 0 - 9 to sort the number into its bucket
      k = getDigit(arr[j], i);
      tempArr[k].push(arr[j]);
      count++;
    }
    // concatenate the bucket arrays
    arr = [];
    arr = arr.concat(
      tempArr[0],
      tempArr[1],
      tempArr[2],
      tempArr[3],
      tempArr[4],
      tempArr[5],
      tempArr[6],
      tempArr[7],
      tempArr[8],
      tempArr[9]
    );
    // clear the arrays
    tempArr = [[], [], [], [], [], [], [], [], [], []];
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

// var test3 = [1, 20, 342, 9854, 98231, 9876041423, 0];
// for (let j = 0; j < test3.length; j++) {
//   console.log(digitCount(test3[j]));
// }

// console.log(maxDigits(test3));
