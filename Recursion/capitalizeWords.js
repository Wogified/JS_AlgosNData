// Problem description:
// Write a recursive function that accepts an array of strings and capitalizes each word in the array

function capitalizeWords(arr) {
  // need an array to add elements into
  let result = [];

  // need a helper function to search through nested arrays?
  function helper(item) {
    if (item.length === 0) return [];
    // console.log(item);
    result.push(item[0].toUpperCase());
    return helper(item.slice(1));
    // dfghd
  }
  helper(arr);
  return result;
}

test = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(test));
