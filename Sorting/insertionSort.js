// implement Insertion Sort

function arrSwap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {
  let count = 0;
  // for loop that starts at the second element
  for (let i = 1; i < arr.length; i++) {
    // for loop to compare current value to previous value(s)
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) arrSwap(arr, j + 1, j);
      else break;
      count++;
    }
  }
  console.log(`Iteration Count: ${count}`, arr);

  return arr;
}

var testCases = [
  [[5, 1, 3, 6, 4, 9, 5, 2], "ello"],
  [[4, 3, 2, 1], "poo"],
  [[1, 2, 3, 4, 5, 6, 8, 7, 9], "poo"]
];

for (item in testCases) {
  console.log("-----------------------------------------------------");
  a = testCases[item][0];
  insertionSort(a);

  //   console.log(result);
}
