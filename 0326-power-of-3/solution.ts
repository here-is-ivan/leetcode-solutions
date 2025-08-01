// Description: Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Link: https://leetcode.com/problems/power-of-three/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }

  return true;
}
