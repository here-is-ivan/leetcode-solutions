// Description: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Link: https://leetcode.com/problems/top-k-frequent-elements/description/

// Time complexity: O(n log n)
// Space complexity: O(n)

function topKFrequent(nums: number[], k: number): number[] {
  const elementsFrequency = new Map<number, number>();

  for (const num of nums) {
    elementsFrequency.set(num, (elementsFrequency.get(num) ?? 0) + 1);
  }

  return [...elementsFrequency]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, k);
}
