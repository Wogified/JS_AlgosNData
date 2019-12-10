// Problem Description
// Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// Solution Requirements:
// Must have at most O(n) time complexity

function sameFreq(a, b) {
  // convert numbers into strings
  num1 = a.toString();
  num2 = b.toString();

  // if the lengths of each string do not match return false
  if (num1.length !== num2.length) {
    return false;
  }
  // create two objects to store number counts
  count_1 = {};
  count_2 = {};
  // for loops to count the number frequencies in both strings
  for (let i = 0; i < num1.length; i++) {
    count_1[num1[i]] = ++count_1[num1[i]] || 1;
  }
  for (let i = 0; i < num2.length; i++) {
    count_2[num2[i]] = ++count_2[num2[i]] || 1;
  }
  // compare the number frequencies
  for (item in count_1) {
    if (!count_2[item] || count_1[item] !== count_2[item]) {
      return false;
    }
  }

  // otherwise return true
  return true;
}

testCases = [
  [182, 281],
  [34, 14],
  [3589578, 5879385],
  [22, 222]
];
for (let i = 0; i < testCases.length; i++) {
  result = sameFreq(testCases[i][0], testCases[i][1]);
  console.log(result);
}
