// Problem description:
// Write a func which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  // establish base case: if the array length is 0, then
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

var testCases = {
  "0": {
    a: [1, 2, 3],
    b: 0
  },
  "1": {
    a: [1, 2, 3, 10],
    b: 2
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = productOfArray(a);
  console.log(result);
}
