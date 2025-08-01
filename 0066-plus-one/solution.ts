// Description: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Link: https://leetcode.com/problems/plus-one/description/

// Time complexity: O(n)
// Space complexity: O(1)

function plusOne(digits: number[]): number[] {
  let numberToAdd = 1;
  let currentIndex = digits.length - 1;

  while (currentIndex > 0 && numberToAdd !== 0) {
    if (digits[currentIndex] === 9) {
      digits[currentIndex] = 0;
    } else {
      digits[currentIndex] += 1;
      numberToAdd = 0;
    }

    currentIndex--;
  }

  if (numberToAdd === 1) {
    if (digits[0] === 9) {
      digits[0] = 1;
      digits.push(0);
    } else {
      digits[0] += 1;
    }
  }

  return digits;
}