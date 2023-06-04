const reverseString = function (reverse) {
  let answer = "";
  if (reverse !== "") {
    answer = reverse.split("").reverse().join("");
  }
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
