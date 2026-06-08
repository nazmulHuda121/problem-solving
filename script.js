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
console.log(swaps(5, 10));
const result = swaps(5, 10);
console.log(`The swap result is a = ${result[0]} and b = ${result[1]}`);

console.log(`==================== ### ====================`);

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true Input: 7  → Output: false
// Hint: Use the modulus (%) operator.

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(50));

console.log(`==================== ### ====================`);

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largestNumber(a, b, c) {
  return Math.max(a, b, c);
}

console.log(largestNumber(3, 7, 5));

console.log(`==================== ### ====================`);

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32 Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

function toFahrenheit(c) {
  const Fahrenheit = (c * 9) / 5 + 32;
  return Fahrenheit;
}
console.log(toFahrenheit(0));

console.log(`==================== ### ====================`);
