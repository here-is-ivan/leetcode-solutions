// Description: A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Link: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

// Time complexity: O(n) - n number of words
// Space complexity: O(n)

function uncommonFromSentences(s1: string, s2: string): string[] {
  const words = [
    ...s1
      .trim()
      .split(' ')
      .filter((x) => x !== ' '),
    ...s2
      .trim()
      .split(' ')
      .filter((x) => x !== ' '),
  ];

  const uniqueWords = new Array<string>();
  const wordsCount = new Map<string, number>();

  for (const word of words) {
    wordsCount.set(word, (wordsCount.get(word) || 0) + 1);
  }

  for (const [key, value] of wordsCount) {
    if (value === 1) {
      uniqueWords.push(key);
    }
  }

  return uniqueWords;
}
