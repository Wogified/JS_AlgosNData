// Problem description:
// Write a recursive function called reverse which accepts a string and returns a new string in reverse

function isPalindrome(str) {
  // method 1: kind of cheaty since I just did the string reverse recursion problem
  //   function reverse(str) {
  //     if (str.length === 0) return "";
  //     //   console.log(str.slice(-1));
  //     //   console.log(str.slice(0, str.length - 1));
  //     return str.slice(-1) + reverse(str.slice(0, str.length - 1));
  //   }
  //   revStr = reverse(str);
  //   if (str === revStr) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

var testCases = {
  "0": {
    a: "awesome",
    b: 0
  },
  "1": {
    a: "foobar",
    b: 2
  },
  "2": {
    a: "tacocat",
    b: 2
  },
  "3": {
    a: "amanaplanacanalpanama",
    b: 2
  },
  "4": {
    a: "amanaplanacanalpandemonium",
    b: 2
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = isPalindrome(a);
  console.log(result);
}
