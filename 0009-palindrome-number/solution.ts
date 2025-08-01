// Description: Given an integer x, return true if x is a palindrome, and false otherwise.
// Link: https://leetcode.com/problems/palindrome-number/description/

// Time complexity: O(n) where n is number of digits
// Space complexity: O(n)

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const strNumber = x.toString();

  for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] !== strNumber[strNumber.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
