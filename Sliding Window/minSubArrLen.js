// Problem description:
// Given an array and a number, write a function that returns the minimum length of a contiguous subarray of which the sum is greater than
// or equal to the number passed into the function
// if there is none, then return 0

// Constraints:
// O(n) time complexity
// O(1) space complexity

function minSubArrLen(arr, n) {
  // if the input array is empty return 0
  console.log(arr);
  console.log(`num: ${n}`);
  if (arr.length === 0) {
    return 0;
  }
  var tempSum = 0;
  var lenCount = Infinity;
  var i = 0;
  var j = 0;
  var start = 0;
  var end = 0;
  // while loop to interate through the array

  while (start < arr.length) {
    //   if running sum is less than input number, add to sum
    // console.log(arr[i]);

    if (tempSum < n) {
      console.log(`add ${arr[end]}`);
      tempSum += arr[end];
      if (end < arr.length) {
        end++;
      }
    } else {
      // if the running sum is greater the input number
      // subtract the oldest value
      console.log(`minus ${arr[start]}`);
      tempSum -= arr[start];
      start++;
    }
    if ((tempSum >= n) & (end - start < lenCount)) {
      lenCount = end - start;
      console.log(`lenCount: ${lenCount}`);
    }

    console.log(`[${j}], start: ${start}, end: ${end}, Sum: ${tempSum}`);
    j++;
  }

  // if running sum is still less than input num after adding all elems
  // return 0
  if (tempSum === Infinity) {
    return 0;
  }
  return lenCount;
}

var testCases = {
  //   "0": {
  //     a: [2, 3, 1, 2, 4, 3],
  //     b: 7
  //   },
  //   "1": {
  //     a: [2, 1, 6, 5, 4],
  //     b: 9
  //   },
  //   "2": {
  //     a: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19],
  //     b: 52
  //   },
  //   "3": {
  //     a: [1, 4, 16, 22, 5, 7, 8, 9, 10],
  //     b: 39
  //   },
  //   "4": {
  //     a: [1, 4, 16, 22, 5, 7, 8, 9, 10],
  //     b: 55
  //   },
  //   "5": {
  //     a: [4, 3, 3, 8, 1, 2, 3],
  //     b: 11
  //   },
  "6": {
    a: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    b: 95
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = minSubArrLen(a, b);
  console.log(result);
}
