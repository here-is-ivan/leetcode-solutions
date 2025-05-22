// Description: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Link: https://leetcode.com/problems/container-with-most-water/description/

// Time complexity: O(n)
// Space complexity: O(1)

function maxArea(height: number[]): number {
  let maxWaterAmount: number = 0;

  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    const shorterSide = Math.min(height[left], height[right]);
    const currentWaterAmount = shorterSide * (right - left);

    maxWaterAmount = Math.max(maxWaterAmount, currentWaterAmount);

    if (height[left] < height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return maxWaterAmount;
}
