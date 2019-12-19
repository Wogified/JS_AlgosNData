// Problem description:
// Write a recursive function that accepts an array of arrays and returns a new array with all values flattened

function flatten(arr_1) {
  // need an array to add elements into
  let result = [];
  //   need to establish array length
  let i = 0;

  // need a helper function to search through nested arrays?
  function helper(arr) {
    console.log(`Input arr ---------------`);
    console.log(arr);
    //   base case
    if (arr.length === 0) return;

    // if (arr[arr.length - 1].length === 0) {
    //   arr.pop();
    //   return 0;
    // }

    // check to see if elem of input arr is an array
    if (Array.isArray(arr[arr.length - 1])) {
      // if so, then recursive call again with  elem
      helper(arr[arr.length - 1]);
    } else {
      // if not, then add the  part to the result
      let elem = arr.pop();
      console.log(`\t Add elem: ${elem}`);
      result.push(elem);
      console.log(result);

      return;
    }
    if (arr[arr.length - 1].length === 0) {
      arr.pop();
    }
    console.log("blah");
    helper(arr);
  }

  helper(arr_1);
  console.log(arr_1);
  return result;
}

var testCases = {
  "0": {
    a: [1, 2, 3, [4, 5]],
    b: 1
  }
  //   "1": {
  //     a: [1, [2, [3, 4], [[5]]]],
  //     b: 1
  //   },
  //   "2": {
  //     a: [[1],[2],[3]],
  //     b: 1
  //   },
  //   "3": {
  //     a: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
  //     b: val => val > 10
  //   }
};
// console.log(Array.isArray(1));
for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = flatten(a, b);
  console.log(result);
}
