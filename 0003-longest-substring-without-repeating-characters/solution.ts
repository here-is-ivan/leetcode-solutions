// Description: Given a string s, find the length of the longest substring without duplicate characters.
// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Time complexity: O(n)
// Space complexity: O(n)

function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  let left = 0;
  let longestStringLength: number = 1;

  const currentChars = new Set();
  currentChars.add(s[left]);

  for (let right = 1; right < s.length; right++) {
    while (currentChars.has(s[right])) {
      currentChars.delete(s[left]);
      left++;
    }

    currentChars.add(s[right]);
    longestStringLength = Math.max(longestStringLength, right - left + 1);
  }

  return longestStringLength;
}
