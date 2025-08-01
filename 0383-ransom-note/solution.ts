// Description: Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Link: https://leetcode.com/problems/ransom-note/description/

// Time complexity: O(n + m) n - ransomNote length; m - magazine length
// Space complexity: O(n)

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineLetters = new Map<string, number>();

  for (const letter of magazine) {
    magazineLetters.set(letter, (magazineLetters.get(letter) || 0) + 1);
  }

  for (const letter of ransomNote) {
    if (!magazineLetters.has(letter)) return false;
    if (magazineLetters.get(letter)! <= 0) return false;

    magazineLetters.set(letter, magazineLetters.get(letter)! - 1);
  }

  return true;
}
