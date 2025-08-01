// Description: You are given an integer array nums and an integer k.
// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
// The score of nums is the difference between the maximum and minimum elements in nums.
// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Link: https://leetcode.com/problems/smallest-range-i/description/

// Time complexity: O(n)
// Space complexity: O(1)

function smallestRangeI(nums: number[], k: number): number {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    minNum = Math.min(minNum, nums[i]);
    maxNum = Math.max(maxNum, nums[i]);
  }

  if (maxNum - minNum <= k * 2) return 0;
  return maxNum - k - (minNum + k);
}
