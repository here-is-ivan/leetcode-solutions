// Description: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Link: https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
