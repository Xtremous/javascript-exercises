const getTheTitles = function (books) {
  let titles = books.map((element) => element.title);
  return titles.sort();
};

// Do not edit below this line
module.exports = getTheTitles;
