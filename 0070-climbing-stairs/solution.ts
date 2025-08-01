// Description: You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Link: https://leetcode.com/problems/climbing-stairs/description/

// Time complexity: O(n)
// Space complexity: O(n)

function climbStairs(n: number): number {
  const fibonacciSequence = [1, 1];

  for (let i = 2; i <= n; i++) {
    const lastIndex = fibonacciSequence.length - 1;
    const newValue =
      fibonacciSequence[lastIndex] + fibonacciSequence[lastIndex - 1];

    fibonacciSequence.push(newValue);
  }

  return fibonacciSequence[n];
}
