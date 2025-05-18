// Description: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Link: https://leetcode.com/problems/longest-consecutive-sequence/description/

// Time complexity: O(n)
// Space complexity: O(n)

function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  const cachedValues = new Set<number>([...nums]);
  let maxSequenceLength = 1;

  for (const number of cachedValues) {
    if (cachedValues.has(number - 1)) continue;

    let currentSequenceLength = 1;
    while (cachedValues.has(number + currentSequenceLength)) {
      currentSequenceLength++;
    }

    maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
  }

  return maxSequenceLength;
}
