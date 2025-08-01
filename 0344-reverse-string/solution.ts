// Description: Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Link: https://leetcode.com/problems/reverse-string/description/

// Time complexity: O(n)
// Space complexity: O(1)

function reverseString(s: string[]): void {
  const halfLength = Math.floor(s.length / 2);

  for (let i = 0; i < halfLength; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
}
