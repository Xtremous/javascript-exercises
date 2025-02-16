// console.log(Date());
const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear();

  return people.reduce(
    (res, person) => {
      const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
      return age > res.age ? { person, age } : res;
    },
    { person: null, age: 0 }
  ).person;
};

// console.log(findTheOldest(people)); // Ray

// Do not edit below this line
module.exports = findTheOldest;
