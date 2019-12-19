// Problem description:
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This funciton should mimic the functionality of "Math.pow()" - do not worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  // base case: if exp has decremented to 1, the return base?
  if (exp === 0) return 1;
  // return the base multiplied by the recursive?
  return base * power(base, exp - 1);
}

var testCases = {
  "0": {
    a: 2,
    b: 0
  },
  "1": {
    a: 2,
    b: 2
  },
  "2": {
    a: 2,
    b: 4
  }
};

for (item in testCases) {
  a = testCases[item].a;
  b = testCases[item].b;
  result = power(a, b);
  console.log(result);
}
