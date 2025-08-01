// Description: Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Link: https://leetcode.com/problems/length-of-last-word/description/

// Time complexity: O(n)
// Space complexity: O(1)

function lengthOfLastWord(s: string): number {
  let lastWordEndIndex = s.length - 1;
  while (lastWordEndIndex >= 0 && s[lastWordEndIndex] === ' ') {
    lastWordEndIndex--;
  }

  let lastWordStartIndex = lastWordEndIndex;
  while (lastWordStartIndex >= 0 && s[lastWordStartIndex] !== ' ') {
    lastWordStartIndex--;
  }

  return lastWordEndIndex - lastWordStartIndex;
}
