// Problem description:
// Write a recursive function that accepts and array and a callback. The function returns true if a single value in the array returns
// true when passed to the callback. otherwise returns false

function someRecursion(arr, func) {
  let last = arr.pop();
  //   if the arr is empty then return false
  if (arr.length === 0) return false;
  if (func(last)) return true;
  return someRecursion(arr, func);
}

function isOdd(num) {
  //   console.log(num);
  if (num % 2 !== 0) {
    return true;
  } else return false;
}

var testCases = {
  "0": {
    a: [1, 2, 3, 4],
    b: isOdd
  },
  "1": {
    a: [4, 6, 8, 9],
    b: isOdd
  },
  "2": {
    a: [4, 6, 8],
    b: isOdd
  },
  "3": {
    a: [4, 6, 8],
    b: val => val > 10
  }
};
// testCases[0].b;
// console.log(testCases[0].b);

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = someRecursion(a, b);
  console.log(result);
}
