// Description: .You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

// Time complexity: O(n)
// Space complexity: O(n)

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const currentSymbol = tokens[i];

    if (!isNaN(Number(currentSymbol))) {
      stack.push(Number(currentSymbol));
      continue;
    }

    const operand2: number = stack.pop()!;
    const operand1: number = stack.pop()!;

    switch (currentSymbol) {
      case '+':
        stack.push(operand1 + operand2);
        break;
      case '-':
        stack.push(operand1 - operand2);
        break;
      case '*':
        stack.push(operand1 * operand2);
        break;
      case '/':
        stack.push(Math.trunc(operand1 / operand2));
        break;
    }
  }

  return stack[0];
}