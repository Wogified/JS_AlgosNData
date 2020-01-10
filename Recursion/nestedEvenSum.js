// Problem description:
// Write a recursive function that accepts an array of strings and capitalizes the first letter of each string in the array

function nestedEvenSum(obj) {
  // declare a variable to store the sum
  let result = 0;
  //   create a helper function to search through the incoming object
  function helper(obj) {
    //   establish a loop to search the object
    for (let item in obj) {
      // if an elem of the object is an object itself, then
      // recursively call the helper function again
      if (typeof obj[item] === "object") {
        helper(obj[item]);
      } else if (Number.isInteger(obj[item])) {
        //   otherwise, if the elem is not an object, is a number and is even
        // then add it to the sum
        if (obj[item] % 2 === 0) result += obj[item];
      }
    }
  }
  //   call the helper function
  helper(obj);
  //   return the sum
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

result = nestedEvenSum(obj1); // 6
console.log(result);
result = nestedEvenSum(obj2); // 10
console.log(result);
