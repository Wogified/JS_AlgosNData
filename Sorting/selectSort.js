// Implement Selection Sort

function arrSwap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  // create a minimum variable. This will store in index of the minimum value in the current array subset
  let minIndex = 0;
  let count = 0;
  // for loop to step through the length of the array
  // each iteration can potentially swap the minimum value to the current array index
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    // inner for loop to check the minimum value in array subset
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(`i: ${arr[i]}, j: ${arr[j]}, min: ${min}`);
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      count++;
    }
    if (i !== minIndex) {
      //   console.log("swap");
      arrSwap(arr, i, minIndex);
      //   console.log(arr);
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
  selectionSort(a);

  //   console.log(result);
}
