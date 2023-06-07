const palindromes = function (str) {
  //get rid of special characters and uppercase
  const processedString = str.toLowerCase().replace(/[^a-z]/g, "");
  //return split reverse join compare
  return processedString.split("").reverse().join("") == processedString;
};
// console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
