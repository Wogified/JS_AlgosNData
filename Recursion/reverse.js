// Problem description:
// Write a recursive function called reverse which accepts a string and returns a new string in reverse

function reverse(str) {
  if (str.length === 0) return "";
  //   console.log(str.slice(-1));
  //   console.log(str.slice(0, str.length - 1));
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}

var testCases = {
  "0": {
    a: "awesome",
    b: 0
  },
  "1": {
    a: "rithmschool",
    b: 2
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = reverse(a);
  console.log(result);
}
