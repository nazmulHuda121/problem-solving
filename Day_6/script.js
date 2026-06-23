// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

const user2 = (fName, lName, age) => {
  return {
    fName,
    lName,
    age,
  };
};

console.log(user2('nazmul', 'huda', 35));

const user = {
  firstName: 'Nazmul',
  lastName: 'khan',
  age: 35,
};

const { firstName: name, lastName, age } = user;

console.log(`My Name is ${name} ${lastName} & age is ${age}`);
