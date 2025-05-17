// Description: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Link: https://leetcode.com/problems/valid-anagram/description/

// Time complexity: O(3n) -> O(n)
// Space complexity: O(n)

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const storedValues = new Map<string, number>();

  for (const letter of s) {
    storedValues.set(letter, (storedValues.get(letter) ?? 0) + 1);
  }

  for (const letter of t) {
    const count = storedValues.get(letter) ?? 0;

    if (storedValues.get(letter) === 0) return false;
    storedValues.set(letter, count - 1);
  }

  for (const value of storedValues.values()) {
    if (value !== 0) return false;
  }

  return true;
}