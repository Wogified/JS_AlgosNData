// Problem description:
// Write a func which accepts a number and adds up all the numbers from 0 to the number pass to the function

// recursiveRange(6) = 21
// recursiveRange(10) = 55

function recursiveRange(num) {
  // establish base case: if num === 0, then return 0
  if (num === 0) return 0;
  // return current num multiplied by the recursive value
  return num + recursiveRange(num - 1);
}

var testCases = {
  "0": {
    a: 6,
    b: 0
  },
  "1": {
    a: 10,
    b: 2
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = recursiveRange(a);
  console.log(result);
}
