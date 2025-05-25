// Description: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Link: https://leetcode.com/problems/generate-parentheses/description/

// Time complexity: ...
// Space complexity: ...

function generateParenthesis(n: number): string[] {
  if (n <= 0) return [];
  const parenthesesList: string[] = [];

  const generate = function (
    parentheses: string = '',
    open: number = n,
    closed: number = n
  ) {
    if (open > 0) {
      generate(parentheses + '(', open - 1, closed);
    }
    if (closed > open) {
      generate(parentheses + ')', open, closed - 1);
    }
    if (open === 0 && closed === 0) {
      parenthesesList.push(parentheses);
    }
  };

  generate();
  return parenthesesList;
}
