// Description: You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Link: https://leetcode.com/problems/search-a-2d-matrix/

// Time complexity: O(log(n) + log(m)) -> O(log(n * m))
// Space complexity: O(1)

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  if (matrix[0].length === 0) return false;

  let rowIndex: number | null = null;

  let left = 0;
  let right = matrix.length - 1;
  const rowLength = matrix[0].length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < matrix[mid][0]) {
      right = mid - 1;
    } else if (target > matrix[mid][rowLength - 1]) {
      left = mid + 1;
    } else if (
      target <= matrix[mid][rowLength - 1] &&
      target >= matrix[mid][0]
    ) {
      rowIndex = mid;
      break;
    }
  }

  if (rowIndex === null) return false;

  left = 0;
  right = rowLength - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < matrix[rowIndex][mid]) {
      right = mid - 1;
    } else if (target > matrix[rowIndex][mid]) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}
