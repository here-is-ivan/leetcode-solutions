// Description: Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
// - Each letter in pattern maps to exactly one unique word in s.
// - Each unique word in s maps to exactly one letter in pattern.
// - No two letters map to the same word, and no two words map to the same letter.

// Link: https://leetcode.com/problems/word-pattern/

// Time complexity: O(n)
// Space complexity: O(n)

function wordPattern(pattern: string, s: string): boolean {
  const patternArray = pattern.split('');
  const wordsArray = s.split(' ');

  if (patternArray.length !== wordsArray.length) return false;

  const patternToWordMap = new Map();
  const wordToPatternMap = new Map();

  for (let i = 0; i < patternArray.length; i++) {
    if (patternToWordMap.has(patternArray[i])) {
      if (patternToWordMap.get(patternArray[i]) !== wordsArray[i]) {
        console.log(patternToWordMap);
        return false;
      }
    } else {
      patternToWordMap.set(patternArray[i], wordsArray[i]);
    }

    if (wordToPatternMap.has(wordsArray[i])) {
      if (wordToPatternMap.get(wordsArray[i]) !== patternArray[i]) {
        console.log(wordToPatternMap);
        return false;
      }
    } else {
      wordToPatternMap.set(wordsArray[i], patternArray[i]);
    }
  }

  return true;
}
