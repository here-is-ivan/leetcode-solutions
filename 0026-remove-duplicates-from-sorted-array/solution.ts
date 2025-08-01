// Description: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// - Return k. 

// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Time complexity: O(n)
// Space complexity: O(n)

function removeDuplicates(nums: number[]): number {
    let uniqueNumbersCount = 0;
    const seenValues = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seenValues.has(nums[i])) { continue; }
        seenValues.add(nums[i]);

        nums[uniqueNumbersCount] = nums[i];
        uniqueNumbersCount++;
    }

    return uniqueNumbersCount;
};