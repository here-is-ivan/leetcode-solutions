// Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// Link: https://leetcode.com/problems/two-sum/description/

// Time complexity: O(n)
// Space complexity: O(n)

function twoSum(nums: number[], target: number): number[] | null {
  const seenValues = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (seenValues.has(difference)) {
      return [seenValues.get(difference)!, i];
    }

    seenValues.set(nums[i], i);
  }

  return null;
}