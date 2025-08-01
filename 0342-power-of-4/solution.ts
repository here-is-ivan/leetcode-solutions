// Description: Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Link: https://leetcode.com/problems/power-of-four/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 4 !== 0) return false;
    n /= 4;
  }

  return true;
}
