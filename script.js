// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

const a = 5;
const b = 10;

function swaps(a, b) {
  [a, b] = [b, a];

  return [a, b];
}
const result = swaps(5, 10);
console.log(`The swap result is a = ${result[0]} and b = ${result[1]}`);
