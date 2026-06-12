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

console.log(`====================== ### ======================`);

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

const findMax = (arr) => {
  const maxValue = Math.max(...arr);
  return maxValue;
};

console.log(findMax([4, 99, 23, 1, 76, 332, 0, 6, 43]));

console.log(`====================== ### ======================`);

// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

const removeDuplicates = (arr) => {
  const newArray = new Set(arr);
  const finalArray = [...newArray];
  return finalArray;
};
console.log(removeDuplicates([1, 1, 5, 3, 2, 6]));
