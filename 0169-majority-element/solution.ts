// Description: Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Link: https://leetcode.com/problems/majority-element/

// Time complexity: O(n)
// Space complexity: O(n)

function majorityElement(nums: number[]): number {
  const numbersCount = new Map<number, number>();
  let maxNumberCount = 0;
  let number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    numbersCount.set(nums[i], (numbersCount.get(nums[i]) || 0) + 1);

    if (numbersCount.get(nums[i])! > maxNumberCount) {
      number = nums[i];
      maxNumberCount = numbersCount.get(nums[i])!;
    }
  }

  return number;
}
