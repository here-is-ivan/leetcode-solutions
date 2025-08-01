// Description: Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Link: https://leetcode.com/problems/pascals-triangle/

// Time complexity: O(n²)
// Space complexity: O(n²)

function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const triangleRows = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const currentRow = new Array<number>(i + 1);
    currentRow[0] = 1;
    currentRow[i] = 1;

    for (let j = 1; j < i; j++) {
      currentRow[j] = triangleRows[i - 1][j - 1] + triangleRows[i - 1][j];
    }

    triangleRows.push(currentRow);
  }

  return triangleRows;
}
