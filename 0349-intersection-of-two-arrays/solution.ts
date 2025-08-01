// Description: Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Link: https://leetcode.com/problems/intersection-of-two-arrays/description/

// Time complexity: O(n)
// Space complexity: O(n + m)

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result = new Array<number>();

  for (const number of set1) {
    if (set2.has(number)) {
      result.push(number);
    }
  }

  return result;
}