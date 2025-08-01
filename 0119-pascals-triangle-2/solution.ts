// Description: Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Link: https://leetcode.com/problems/pascals-triangle-ii/description/

// Time complexity: O(n²)
// Space complexity: O(n²)

function getRow(rowIndex: number): number[] {
    const triangleRows = [[1], [1, 1]];

    for (let i = 2; i <= rowIndex; i++) {
        const currentRow = new Array<number>(i + 1);
        currentRow[0] = 1;
        currentRow[i] = 1;

        for (let j = 1; j < i; j++) {
            currentRow[j] = triangleRows[i - 1][j - 1] + triangleRows[i - 1][j];
        }

        triangleRows.push(currentRow);
    }

    return triangleRows[rowIndex];
};