// Description: Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Link: https://leetcode.com/problems/happy-number/description/

// Time complexity: ...
// Space complexity: ...

function isHappy(n: number): boolean {
  const seenValues = new Set();
  seenValues.add(n);

  while (n !== 1) {
    n = n
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Math.pow(parseInt(cur), 2), 0);

    if (seenValues.has(n)) {
      return false;
    }

    seenValues.add(n);
  }

  return true;
}
