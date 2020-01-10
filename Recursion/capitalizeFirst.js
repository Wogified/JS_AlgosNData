// Problem description:
// Write a recursive function that accepts an array of strings and capitalizes the first letter of each string in the array

function capitalizeFirst(arr) {
  // need an array to add elements into
  let result = [];

  // need a helper function to search through nested arrays?
  function helper(item) {
    if (item.length === 0) return [];
    console.log(item);
    result.push(item[0][0].toUpperCase().concat(item[0].slice(1)));
    return helper(item.slice(1));
    // dfghd
  }
  helper(arr);
  return result;
}

test = ["car", "taco", "banana"];
console.log(capitalizeFirst(test));
