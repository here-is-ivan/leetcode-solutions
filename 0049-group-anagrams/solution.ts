// Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Link: https://leetcode.com/problems/group-anagrams/description/

// Time complexity: O(n * k) n - number of strings in array; k - lenth of the longest string
// Space complexity: O(n * k)

function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups = new Map<string, string[]>();

  for (const currentWord of strs) {
    const lettersCount = new Array(26).fill(0);

    for (const char of currentWord) {
      lettersCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = lettersCount.join('#');

    if (anagramGroups.has(key)) {
      anagramGroups.get(key)!.push(currentWord);
    } else {
      anagramGroups.set(key, [currentWord]);
    }
  }

  return Array.from(anagramGroups.values());
}
