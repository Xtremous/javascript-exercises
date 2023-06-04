const repeatString = function (string, num) {
  let finalString = "";
  if (num < 0) {
    return "ERROR";
  } else if (string === "" || num === 0) {
    return finalString;
  } else {
    for (let i = 0; i < num; i++) {
      finalString += string;
    }
    return finalString;
  }
};
//!things I learned : dont forget to ask, 'return' kills loop, define empty string var: ""
// Do not edit below this line
module.exports = repeatString;
