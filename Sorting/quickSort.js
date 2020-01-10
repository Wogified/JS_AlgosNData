// implement Quick sort

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // create a variable to store the pivot value
  let pivot = arr[start];
  //  count of elems smaller than pivot
  let compInd = start;
  // for loop to go through the array to check the pivot against all elements
  for (let i = start + 1; i < arr.length; i++) {
    // if the current value at index is less than the value of the pivot
    // then add to the pivot index compInder and swap the value to
    // start accumulating in front of the pivot
    if (pivot > arr[i]) {
      compInd++;
      swap(arr, compInd, i);
    }
  }
  swap(arr, start, compInd);
  return compInd;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //   console.log(arr);
  console.log(left, right);

  if (left < right) {
    let piv = pivot(arr, left, right);
    quickSort(arr, left, piv - 1);
    quickSort(arr, piv + 1, right);
  }
  return arr;
}

var testCases2 = [
  [[5, 1, 3, 6, 4, 9, 5, 2], "ello"],
  [[4, 3, 2, 1], "poo"],
  [[1, 2, 3, 4, 5, 6, 8, 7, 9], "poo"]
];

for (let i = 0; i < testCases2.length; i++) {
  console.log("-----------------------------------------------------");
  a = testCases2[i][0];
  result = quickSort(a);
  console.log(a);
}
