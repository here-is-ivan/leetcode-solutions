// Description: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Link: https://leetcode.com/problems/merge-sorted-array/description/

// Time complexity: O(m + n)
// Space complexity: O(1)

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1 = m - 1;
  let n2 = n - 1;
  let k = m + n - 1;

  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] < nums2[n2]) {
      nums1[k] = nums2[n2];
      n2--;
    } else {
      nums1[k] = nums1[n1];
      n1--;
    }

    k--;
  }

  while (n1 >= 0) {
    nums1[k] = nums1[n1];
    n1--;
    k--;
  }

  while (n2 >= 0) {
    nums1[k] = nums2[n2];
    n2--;
    k--;
  }
}
