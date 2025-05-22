// Description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Link: https://leetcode.com/problems/3sum/description/

// Time complexity: O(n log n) + O(n²) -> O(n²)
// Space complexity: O(1)

function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    const currenNumber = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = currenNumber + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        results.push([currenNumber, nums[left], nums[right]]);

        do {
          left++;
        } while (left < right && nums[left - 1] === nums[left]);

        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1]);
      }
    }
  }

  return results;
}
