// Description: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Link: https://leetcode.com/problems/valid-palindrome/description/

// Time complexity: O(n)
// Space complexity: O(1)

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumberic(s[left])) {
      left++;
    }

    while (left < right && !isAlphaNumberic(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumberic(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase lettters
    (code >= 97 && code <= 122) // lowecase letters
  );
}
