const sumAll = function (lowEnd, highEnd) {
  //checks conditions like negatives, nonnumber, highEnd first.
  if (!Number.isInteger(lowEnd) || !Number.isInteger(highEnd)) return "ERROR";
  if (lowEnd < 0 || highEnd < 0) return "ERROR";
  if (lowEnd > highEnd) {
    const temporary = lowEnd;
    lowEnd = highEnd;
    highEnd = temporary;
  }
  const range = [];
  for (let i = lowEnd; i <= highEnd; i++) {
    range.push(i);
  }
  const sum = range.reduce((accu, curr) => accu + curr);
  return sum;
};
sumAll(1, 5);
// console.log(sumAll(0,0));

// Do not edit below this line
module.exports = sumAll;
