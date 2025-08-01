// Description: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// Time complexity: O(n + m)
// Space complexity: O(1)

function strStr(haystack: string, needle: string): number {
  const maxLastIndex = haystack.length - needle.length + 1;

  for (let i = 0; i < maxLastIndex; i++) {
    if (haystack[i] === needle[0]) {
      let count = 1;
      while (count < needle.length && haystack[i + count] === needle[count]) {
        count++;
      }

      if (count === needle.length) return i;
    }
  }

  return -1;
}
