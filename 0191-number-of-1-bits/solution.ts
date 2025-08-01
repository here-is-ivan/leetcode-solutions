// Description: Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
// Link: https://leetcode.com/problems/number-of-1-bits/

// Time complexity: O(log n)
// Space complexity: O(log n)

function hammingWeight(n: number): number {
  const binaryString = n.toString(2);
  let count = 0;

  for (const letter of binaryString) {
    if (letter === '1') count++;
  }

  return count;
}
