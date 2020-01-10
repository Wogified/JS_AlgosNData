function binSearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  // while the left index is less than or equal to the right
  // and the search val is not equal to the middle
  // search through the array
  while (left <= right && val !== arr[middle]) {
    console.log(`Left: ${left}, Mid: ${middle}, Right: ${right}, Val: ${val}`);

    // if the search val is greater than the middle value
    // then set the left index equal to the mid index plus one
    // because the middle index did not match anyways
    // the right index does not change
    if (val > arr[middle]) {
      left = middle + 1;
    }
    // if neither of the above, then set the right index equal to the mid index minus one
    // because we already checked the middle
    // the left index does not change
    else {
      right = middle - 1;
    }

    // recalculate the middle index
    middle = Math.floor((right + left) / 2);
  }

  // if the search val is equal to the value at the middle, then return
  // the middle index
  if (val === arr[middle]) {
    return middle;
  } else return -1;
}

var testCases = {
  "0": {
    a: [1, 2, 3, 4, 5],
    b: 1
  },
  "1": {
    a: [1, 2, 3, 4, 5],
    b: 2
  },
  "2": {
    a: [1, 2, 3, 4, 5],
    b: 4
  },
  "3": {
    a: [1, 2, 3, 4, 5],
    b: 6
  },
  "4": {
    a: [2, 3],
    b: 3
  },
  "5": {
    a: [2, 3, 5],
    b: 4
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = binSearch(a, b);
  console.log(result);
}
