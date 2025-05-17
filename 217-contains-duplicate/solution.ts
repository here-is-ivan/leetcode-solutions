// Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Link: https://leetcode.com/problems/contains-duplicate/description/

// Time complexity: O(n)
// Space complexity: O(n)

function containsDuplicate(nums: number[]): boolean {
    const seenValues = new Set<number>();

    for (const num of nums) {
        if (seenValues.has(num)) return true;
        seenValues.add(num);
    }

    return false;
};