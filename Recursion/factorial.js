// Problem description:
// Write a func which accpets a number and returns the factorial of that number. A factorial is the product of an integer
// and all the integers below it

// factorial(4) = 24
// factorial(0) = 0

function factorial(num) {
  // establish base case: if num === 0, then return 1
  if (num === 0) return 1;
  // return current num multiplied by the recursive value
  return num * factorial(num - 1);
}

var testCases = {
  "0": {
    a: 1,
    b: 0
  },
  "1": {
    a: 2,
    b: 2
  },
  "2": {
    a: 4,
    b: 4
  },
  "3": {
    a: 7,
    b: 4
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = factorial(a);
  console.log(result);
}
