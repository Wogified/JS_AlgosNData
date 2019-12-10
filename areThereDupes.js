// Problem Description
// Make a function that checks whether or not there are duplicates among the
// arguments passed in
//
// Solution Requirements:
// Must have at most
// O(n) time complexity
// O(n) space complexity

function areThereDupes() {
  //   console.log(arguments);
  //   This function takes in a variable number of arguments
  // use the arguments keyword to access an object with the available inputs
  // create obj to count frequencies
  var counts = {};
  //  use a for loop to count the frequencies of items within the arguments
  for (item in arguments) {
    counts[arguments[item]] = ++counts[arguments[item]] || 1;
    // if the count of a specific element is more than one, return true
    if (counts[arguments[item]] > 1) {
      return true;
    }
  }
  // otherwise return false
  return false;
}

// Test zone

testCases = [
  [1, 2, 3],
  [1, 2, 2],
  ["a", "b", "c", "a"],
  [2, "b", "h", 3, "h"]
];
for (let i = 0; i < testCases.length; i++) {
  // ... is the spread operator. it turns [1,2,3] into separate arguments for the function
  result = areThereDupes(...testCases[i]);
  console.log(result);
}
