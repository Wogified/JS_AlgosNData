// Problem description:
// Create a function that takes in two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string. In other words, the funciton should check
// whether the characters in the first string appear somewhere in the second string
// without their order changing

// Constraints:
// O(n) time complexity
// O(1) space complexity

function isSubSeq(a, b) {
  // establish pointer to first string
  var first = 0;

  // for loop through the second string
  for (let i = 0; i < b.length; i++) {
    // check if current character in the longer string
    // matches the first char of the first string via pointer
    if (b[i] === a[first]) {
      console.log(`str1: ${a[first]}, str2: ${b[i]}`);
      first++;
    }

    // if the first string has been fully indexed, then return true
    if (first >= a.length) {
      return true;
    }
  }
  //   otherwise return false
  return false;
}

var testCases = {
  "0": {
    a: "hello",
    b: "hello world"
  },
  "1": {
    a: "sing",
    b: "sting"
  },
  "2": {
    a: "abc",
    b: "abracadabra"
  },
  "3": {
    a: "abc",
    b: "acb"
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = isSubSeq(a, b);
  console.log(result);
}
