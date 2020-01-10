// Implemement Binary Search

function binarySearch(arr, val) {
  // declare left and right pointer positions
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    console.log(`Left: ${left}, Mid: ${mid}, Right: ${right}, Val: ${val}`);
    if (val === arr[mid]) {
      console.log("hi");
      return mid;
    } else if (val > arr[mid]) {
      //   console.log("here");
      left = mid + 1;
    } else {
      //   console.log("beart");
      right = mid;
    }
  }

  return -1;
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
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = binarySearch(a, b);
  console.log(result);
}
