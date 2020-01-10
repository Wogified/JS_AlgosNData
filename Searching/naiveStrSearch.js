// Implement Naive String Search
// write a function that takes two input strings. One long string and one short string
// count the number of times the shorter string appears in the longer string

function badStrSearch(longer, short) {
  // probably use the sliding window method?
  let left = 0;
  let right = 0;
  let count = 0;
  // loop over the longer string
  for (let i = 0; i < longer.length; i++) {
    // compare the character at current index of the longer string to the
    // first char of the shorter string

    // if there is a match then add to the shorter string index
    // console.log(`longer: ${longer[i]}, short: ${short[left]}`);
    if (longer[i] !== short[left]) left = 0;
    if (longer[i] === short[left]) {
      left++;
      // if the short string counter has reached the length of the short string
      // add one to the string match counter and reset the short str counter to 0
      if (left === short.length) {
        count++;
        left = 0;
      }
    }
  }
  return count;
}

var testCases = [
  ["hello bello dello mello jello", "ello"],
  ["yabadabbadoo", "poo"],
  ["yabadabbagdabbbadoo", "dabba"],
  ["bannanannaaroona", "na"]
];

for (item in testCases) {
  a = testCases[item][0];
  b = testCases[item][1];
  result = badStrSearch(a, b);
  console.log(result);
}
