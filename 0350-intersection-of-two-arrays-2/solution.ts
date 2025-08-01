// Description: Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

// Time complexity: O(n + m)
// Space complexity: O(n)

function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map<number, number>();
  const result = new Array<number>();

  for (let i = 0; i < nums1.length; i++) {
    map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1);
  }

  for (const num of nums2) {
    if (map1.has(num) && map1.get(num)! > 0) {
      result.push(num);
      map1.set(num, map1.get(num)! - 1);
    }
  }

  return result;
}
