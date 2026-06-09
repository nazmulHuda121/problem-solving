// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str) {
  const reverse = str.split('').reverse().join('');
  return reverse;
}

console.log(reverseString('hello'));

console.log(`======================= ### =======================`);

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let = count = 0;

  for (char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Bangladesh is our homeland'));

console.log(`======================= ### =======================`);

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

function isPalindrome(str) {
  let rev = str.split('').reverse().join('');

  if (rev == str) {
    return true;
  }
  return false;
}

console.log(isPalindrome('abba'));

console.log(`======================= ### =======================`);
