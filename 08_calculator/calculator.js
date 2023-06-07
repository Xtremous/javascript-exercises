const add = function (num1, num2) {
  return num1 + num2;
};
// console.log(add(1,14));

const subtract = function (num1, num2) {
  return num1 - num2;
};
// console.log(subtract(20,5));

// imagine an array of [1,2,3,4,5] = 15, length = 5, iterates from 0-4
const sum = function (emptyArray) {
  let total = 0;
  for (let i = 0; i < emptyArray.length; i++) {
    total += emptyArray[i];
  }
  return total;
};
// console.log(sum([0,1,2,3,4]));

const multiply = function (arr) {
  let ahaha = arr.reduce(
    (accumulator, currentVal) => accumulator * currentVal,
    1
  );
  return ahaha;
};
// console.log(multiply([1, 4, 2, 1, 2]));

const power = function (num1, num2) {
  return num1 ** num2;
};
// console.log(power(2,4))

const factorial = function (n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    console.log(i);
    factorial *= i;
  }
  return factorial;
};
// console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
