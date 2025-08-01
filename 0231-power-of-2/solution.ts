// Description: Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Link: https://leetcode.com/problems/power-of-two/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
}
