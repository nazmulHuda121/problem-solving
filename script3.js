// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

const sumArray = (arr) => {
  let count = 0;
  for (const num of arr) {
    count += num;
  }
  console.log(count);
};
sumArray([1, 5, 6, 2, 33, 8]);
