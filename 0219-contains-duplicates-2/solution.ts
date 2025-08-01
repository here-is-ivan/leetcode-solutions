// Description: Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Link: https://leetcode.com/problems/contains-duplicate-ii/

// Time complexity: O(n)
// Space complexity: O(n)

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (map.has(nums[i]) && map.get(nums[i])! - i <= k) return true;
    map.set(nums[i], i);
  }

  return false;
}