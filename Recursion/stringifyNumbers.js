// Problem description:
// Write a recursive function that takes in an objet and finds all of the values which are numbers and converts them to strings

function stringifyNumbers(obj) {
  const result = {};

  for (let key in obj) {
    // console.log(obj[key]);
    if (typeof obj[key] === "number") {
      result[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  //   console.log(result);
  return result;
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};
console.log(stringifyNumbers(obj1));
