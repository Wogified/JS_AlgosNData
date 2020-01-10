// Problem description:
// Write a recursive function that accepts an array of arrays and returns a new array with all values flattened

function flatten(arr_1) {
  // need an array to add elements into
  let result = [];
  //   need to establish array length
  let i = 0;
  // need a helper function to search through nested arrays?
  function helper(item) {
    //   base case
    if (arr_1.length === 0) return;

    let temp = [];
    // console.log(`current input---------`);
    // console.log(item);
    // Check if input is an array
    // if it is an array, then go deeper in the last elem
    if (Array.isArray(item)) {
      while (item.length > 0) {
        helper(item[item.length - 1]);
        item.pop();
      }
    } else {
      // if not an array, then add to the result
      temp.push(item);
      result = temp.concat(result);
      temp.pop();
      return;
    }
  }

  helper(arr_1);
  return result;
}

var testCases = {
  "0": {
    a: [1, 2, 3, [4, 5]],
    b: 1
  },
  "1": {
    a: [1, [2, [3, 4], [[5]]]],
    b: 1
  },
  "2": {
    a: [[1], [2], [3]],
    b: 1
  },
  "3": {
    a: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
    b: val => val > 10
  }
};
// console.log(Array.isArray(1));
for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = flatten(a, b);
  console.log(result);
}
