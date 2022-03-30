// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

export const Solution = {
  firstTry: function isPalindrome(x: number): boolean {
    const reverse = parseInt(x.toString().split("").reverse().join(""));
    return x === reverse;
  }, // 172ms, 52.1 MB
  secondTry: function isPalindrome(x: number): boolean {
    const copy = [...x.toString()];
    let strCopy = "";
    for (let i = copy.length - 1; i >= 0; i--) {
      strCopy += copy[i];
    }
    return x === parseInt(strCopy);
  }, // 148ms, 51.5MB - faster than 97.38% and less than 84.12&, respectively. Nice!
};
