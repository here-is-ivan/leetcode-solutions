// Description: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Link: https://leetcode.com/problems/add-digits/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function addDigits(num: number): number {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, cur) => acc + parseInt(cur), 0);
  }

  return num;
}