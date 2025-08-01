// Description: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Link: https://leetcode.com/problems/permutation-in-string/

// Time complexity: O(n)
// Space complexity: O(1)

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Values = new Array<number>(26).fill(0);
  const currentWindow = new Array<number>(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const index1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
    const index2 = s2.charCodeAt(i) - 'a'.charCodeAt(0);

    s1Values[index1] += 1;
    currentWindow[index2] += 1;
  }

  if (checkEqualLeatters(s1Values, currentWindow)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    const indexDecrease = s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0);
    const indexIncrease = s2.charCodeAt(i) - 'a'.charCodeAt(0);

    currentWindow[indexDecrease] -= 1;
    currentWindow[indexIncrease] += 1;

    if (checkEqualLeatters(s1Values, currentWindow)) return true;
  }

  console.log(s1Values, currentWindow);
  return false;
}

const checkEqualLeatters = (array1: number[], array2: number[]) => {
  for (let i = 0; i < 26; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};
