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

console.log(`============================ ### ============================`);

// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

const mergeArrays = (...arrays) => {
  return arrays.flat();
};

console.log(mergeArrays([1, 2], [3, 4]));

console.log(`============================ ### ============================`);

// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

const delay = (ms) => {
  function run() {}
};
