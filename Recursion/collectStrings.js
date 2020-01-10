// Problem description:
// Write a recursive function that takes in an object and returns an array of all the values in teh object that are strings

function collectStrings(obj) {
  let result = [];
  function helper(input) {
    for (item in input) {
      if (typeof input[item] === "object") {
        helper(input[item]);
      } else if (typeof input[item] === "string") {
        result.push(input[item]);
      }
    }
  }
  helper(obj);
  return result;
}

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};
console.log(collectStrings(obj1));
