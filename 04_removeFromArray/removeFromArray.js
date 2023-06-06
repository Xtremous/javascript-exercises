//todo try again, USING BOTH METHODS.
//!solution 1 using forEach()
// const removeFromArray = function (array, ...args){
//  const newArray = [];
//   array.forEach((element)=>{
//     if (!args.includes(element)){
//       newArray.push(element)
//     }
//   });
//   return newArray;
// }
//!solution 2 using filter()
const removeFromArray = function (array, ...arg) {
  const newArray = array.filter((element) => !arg.includes(element));
  console.log(newArray);
  return newArray;
};
console.log(removeFromArray([1, 2, 3, 4, "e"], "e", 2));

//* lesson here: spread operator / rest paremeter, includes(), forEach(), filter();

// Do not edit below this line
module.exports = removeFromArray;
