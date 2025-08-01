// Description: Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Link: https://leetcode.com/problems/isomorphic-strings/description/

// Time complexity: O(n)
// Space complexity: O(n + m)

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
      return false;
    }

    if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
      return false;
    }

    tMap.set(t[i], s[i]);
    sMap.set(s[i], t[i]);
  }

  return true;
}