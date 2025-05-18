// Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Link: https://leetcode.com/problems/valid-parentheses/description/

// Time complexity: O(n)
// Space complexity: O(n)

function isValid(s: string): boolean {
  const parenthesesPairs = new Map<string, string>();
  const parenthesesStack: string[] = [];

  parenthesesPairs.set(')', '(');
  parenthesesPairs.set('}', '{');
  parenthesesPairs.set(']', '[');

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];

    if (parenthesesPairs.has(currentSymbol)) {
      if (
        parenthesesStack.length === 0 ||
        parenthesesStack[parenthesesStack.length - 1] !==
          parenthesesPairs.get(currentSymbol)
      ) {
        return false;
      } else {
        parenthesesStack.pop();
      }
    } else {
      parenthesesStack.push(currentSymbol);
    }
  }

  return parenthesesStack.length === 0;
}
