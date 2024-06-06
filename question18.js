// Question 18

function factorial(n) {
  if (n === 0 || n === 1) { // n = 0 or  n = 1 => returns 1
    return 1;
  }

  return n * factorial(n - 1);
}

let number = 3;
let result = factorial(number);
console.log(result);
