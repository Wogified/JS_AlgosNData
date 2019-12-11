// Problem description:
// make a function that accepts a string and returns the length of the longest substring with all distinct characters

// Constraints:
// O(n) time complexity

function findLongestSubstring(str) {
  // if the string is empty then return 0
  if (str.length === 0) {
    return 0;
  }
  //   create a object to contain distinct characters from the string
  var storeChar = {};
  var start = 0;
  var end = 0;
  // variable to store the longest subarray
  // set to 0 because we are looking for greater than 0
  var longest = 0;
  var i = 0;
  // while loop through string
  while (start < str.length) {
    if (!storeChar[str[end]]) {
      // if character is not present within the character object, then add it
      storeChar[str[end]] = 1;
      if (end < str.length) end++;
    } else {
      // if the char at the current index is present in the charObj
      // begin removing elems from the beginning of the string
      // from the object until it is not in the obj
      delete storeChar[str[start]];
      start++;
    }
    // if running sum is greater than n and current subarray is smaller than
    // previous subarray, then update the subarr len tracker
    if (end - start > longest) {
      longest = end - start;
    }
    // console.log(storeChar);
    // console.log(`[${i}], start: ${start}, end: ${end}, len: ${longest}`);
    // i++;
  }
  return longest;
}

var testCases = [
  "",
  "rithmschool",
  "thisisawesome",
  "thecatinthehat",
  "bbbbbb",
  "longestsubstring",
  "thisishowwedoit"
];

for (item in testCases) {
  //   console.log(testCases[item]);
  result = findLongestSubstring(testCases[item]);
  console.log(result);
}

// console.log(findLongestSubstring("bbbbbb"));
