// Description: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Link: https://leetcode.com/problems/missing-number/description/

// Time complexity: O(n)
// Space complexity: O(n)

function missingNumber(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) return i;
  }

  return 0;
}
