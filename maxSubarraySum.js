function maxSubarraySum(arr, n) {
  // check if the input array is empty
  // if so, return null
  if (arr.length < n) {
    return null;
  }

  n_array = [];
  windowSum = 0;
  maxSum = 0;
  temp = 0;
  index = 0;
  // for loop to check the rest of the array
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp += arr[i];
    if (i >= n) {
      temp = temp - arr[i - n];
      if (temp > windowSum) {
        maxSum = temp;
        index = i + 1;
      }
    }
    windowSum = temp;
  }
  console.log(arr.slice(index - n, index));
  return maxSum;
}

result = maxSubarraySum([5, 2, 4, 9, 6, 20, 1], 2);
console.log(result);
