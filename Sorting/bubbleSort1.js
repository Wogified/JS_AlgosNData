// implement bubble sort

function arrSwap(arr, index) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

function bubble1(arr) {
  // Temp variable to store array value swap
  let temp = 0;
  let count = 0;

  // for loop to interate through the length of the array
  for (let i = 0; i < arr.length; i++) {
    //  nested for loop to check each element in the array against the rest of the array
    for (let j = 0; j < arr.length - 1; j++) {
      // if the array elem at the current position is greater
      // than the value at the next elem, then swap
      if (arr[j] > arr[j + 1]) {
        arrSwap(arr, j);
        // temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
      count++;
    }
  }
  console.log(`Bubble1 Iteration Count: ${count}`, arr);
  return arr;
}
function bubble2(arr) {
  // Temp variable to store array value swap
  let temp = 0;
  let count = 0;
  // for loop to interate through the length of the array
  for (let i = 0; i < arr.length; i++) {
    //  nested for loop to check each element in the array against the rest of the array
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // if the array elem at the current position is greater
      // than the value at the next elem, then swap
      if (arr[j] > arr[j + 1]) {
        arrSwap(arr, j);

        // temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
      count++;
    }
  }
  console.log(`Bubble2 Iteration Count: ${count}`, arr);
  return arr;
}

function bubble3(arr) {
  // Temp variable to store array value swap
  let temp = 0;
  let count = 0;
  // variable for determining whether or not any array values have been swapped per iteration
  let swapped = false;
  // for loop to interate through the length of the array
  for (let i = 0; i < arr.length; i++) {
    //  nested for loop to check each element in the array against the rest of the array
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // if the array elem at the current position is greater
      // than the value at the next elem, then swap
      if (arr[j] > arr[j + 1]) {
        arrSwap(arr, j);

        // temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swapped = true;
      }
      count++;
    }
    // if no values have been swapped, then exit the loop
    if (!swapped) {
      break;
    } else swapped = false;
  }
  console.log(`Bubble3 Iteration Count: ${count}`, arr);
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
  b = testCases[item][1];
  bubble1(a);
  bubble2(a);
  bubble3(a);
  //   console.log(result);
}
