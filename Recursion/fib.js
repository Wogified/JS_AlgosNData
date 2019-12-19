// Problem description:
// Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the
// Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 which starts with 1 and 1, and where every number thereafter is
// equal to the sum of the previous two numbers

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  // Dumb method
  //   let incr = 0;
  //   let arr = [];
  //   // help function
  //   function helper(incr) {
  //     // console.log(incr);
  //     if (incr === 0 || incr === 1) {
  //       arr.push(1);
  //       return helper(incr + 1);
  //     }
  //     if (incr === num) return 1;
  //     let temp = arr[incr - 1] + arr[incr - 2];
  //     arr.push(temp);
  //     return helper(incr + 1);
  //   }
  //   helper(incr);
  //   return arr.pop();

  //   actually recursive
  // estblish base case
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

var testCases = {
  "0": {
    a: 4,
    b: 0
  },
  "1": {
    a: 10,
    b: 2
  },
  "2": {
    a: 28,
    b: 2
  },
  "4": {
    a: 35,
    b: 2
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = fib(a);
  console.log(result);
}
