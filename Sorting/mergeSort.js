// implement merge Sort

function mergeArr(a, b) {
  let i = 0;
  let j = 0;
  let arr = [];
  // console.log("||||||||||||||||||||", a, b);
  // console.log("there", a, b);
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
    // console.log(arr);
  }
  while (i < a.length) {
    arr.push(a[i]);
    i++;
  }
  while (j < b.length) {
    arr.push(b[j]);
    j++;
  }
  // console.log(arr);
  // console.log("|||||||||||||||||||||||");
  return arr;
}

function mergeSort(arr) {
  // the base case is that if the length of the arr is less than or equal to 1 then return the arr
  if (arr.length <= 1) return arr;
  let n = Math.floor(arr.length / 2);
  // let left = mergeSort(arr.slice(0, n));
  // let right = mergeSort(arr.slice(n));
  // return mergeArr(left, right);
  return mergeArr(mergeSort(arr.slice(0, n)), mergeSort(arr.slice(n)));
}

var testCases1 = [
  [
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10]
  ],
  [
    [1, 2, 3, 5, 10, 15, 16],
    [1, 5, 9, 15, 20]
  ],
  [[1], []]
];

var testCases2 = [
  [[5, 1, 3, 6, 4, 9, 5, 2], "ello"],
  [[4, 3, 2, 1], "poo"],
  [[1, 2, 3, 4, 5, 6, 8, 7, 9], "poo"]
];

for (item in testCases1) {
  console.log("-----------------------------------------------------");
  // a = testCases1[item][0];
  // b = testCases1[item][1];
  // result = mergeArr(a, b);
  a = testCases2[item][0];
  result = mergeSort(a);
  console.log(result);
}
