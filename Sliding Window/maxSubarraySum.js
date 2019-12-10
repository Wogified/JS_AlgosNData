// Problem description:
// Given an array of integers and a number, write a function that finds the maximum sum
// of a subarray with the length of the number passed to the function

// Constraints:
// O(n) time complexity
// O(1) space complexity

function maxSubarraySum(arr, n) {
  // check if the input array is empty
  // if so, return null
  if (arr.length < n) {
    return null;
  }

  // declare variable to store maxsum and running rum
  var tempSum = 0;
  var maxSum = 0;

  // add up first n elements in array
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  // iterate through remaining values in array
  for (let i = n; i < arr.length; i++) {
    // update running sum with new addition, while subtracting oldest value
    tempSum = tempSum + arr[i] - arr[i - n];
    console.log(`temp: ${tempSum}, maxSum: ${maxSum}`);
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

var testCases = {
  "0": {
    a: [100, 200, 300, 400],
    b: 2
  },
  "1": {
    a: [1, 4, 2, 10, 23, 3, 1, 0, 20],
    b: 4
  },
  "2": {
    a: [-3, 4, 0, -2, 6, -1],
    b: 2
  },
  "3": {
    a: [3, -2, 7, -4, 1, -1, 4, -2, 1],
    b: 2
  },
  "4": {
    a: [2, 3],
    b: 3
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = maxSubarraySum(a, b);
  console.log(result);
}
