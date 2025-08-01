// Description: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Link: https://leetcode.com/problems/sqrtx/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function mySqrt(x: number): number {
  if (x <= 1) return x;

  let left = 0;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sqaure = mid * mid;

    if (sqaure < x) {
      left = mid + 1;
    } else if (sqaure > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return right;
}
