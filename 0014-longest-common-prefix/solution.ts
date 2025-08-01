// Description: Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Link: https://leetcode.com/problems/longest-common-prefix/description/

// Time complexity: O(n * m) n - length of the array; m - length of the shortest word
// Space complexity: O(m)

function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const currentLetter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (currentLetter !== strs[j][i]) {
        return longestPrefix;
      }
    }

    longestPrefix += currentLetter;
  }

  return longestPrefix;
}
