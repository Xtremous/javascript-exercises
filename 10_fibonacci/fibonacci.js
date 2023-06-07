const fibonacci = function (fib) {
  if (fib < 0) return "OOPS";
  let sequence = [1, 1];
  for (let i = 0; i < fib - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  console.log(sequence);
  return sequence.pop();
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
