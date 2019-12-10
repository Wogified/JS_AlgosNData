// Problem description:
// Given a sorted array of integers and a arget average, determine if there is a pair of
// values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the target

// Constraints:
// O(n) time complexity
// O(1) space complexity

function avgPair(arr, avg) {
  // if the input array is empty, return false

  // establish left and right indicies
  var left = 0;
  // right side is length minus one for indicial reference
  var right = arr.length - 1;

  // for loop through array from both sides
  for (let i = 0; i < arr.length; i++) {
    // avg left and right index value
    var temp = (arr[left] + arr[right]) / 2;
    console.log(`Left: ${arr[left]}, Right: ${arr[right]}, temp: ${temp}`);
    // if the avg of both sides is equal to avg, the return true
    if (temp === avg) {
      return true;
    }
    // else if avg of both is less than the input avg, add to the left index
    else if (temp < avg) {
      left++;
    }
    // else if the avg of both is greater than the input avg,
    else if (temp > avg) {
      right--;
    }
    // add to the right index
  }
  return false;
}

var testCases = {
  "1": {
    arr: [1, 2, 3],
    avg: 2.5
  },
  "2": {
    arr: [1, 3, 3, 5, 6, 7, 10, 12, 19],
    avg: 8
  },
  "3": {
    arr: [-1, 0, 3, 4, 5, 6],
    avg: 4.1
  },
  "4": {
    arr: [],
    avg: 4
  }
};

for (item in testCases) {
  a = testCases[item].arr;
  b = testCases[item].avg;
  result = avgPair(a, b);
  console.log(result);
}
