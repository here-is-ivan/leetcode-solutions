// Description: Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

// Implement the NumArray class:
// - NumArray(int[] nums) Initializes the object with the integer array nums.
// - int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Link: https://leetcode.com/problems/range-sum-query-immutable/

// Time complexity: O(n) on start and O(1) for sumRange
// Space complexity: O(n) on start and O(1) for sumRange

class NumArray {
  private prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array(nums.length);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.prefix[i] = sum;
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right] - (this.prefix[left - 1] || 0);
  }
}
