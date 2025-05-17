// Description: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// - Only the filled cells need to be validated according to the mentioned rules.

// Link: https://leetcode.com/problems/valid-sudoku/

// Time complexity: O(81) -> O(1)
// Space complexity: O(243) -> O(1)

function isValidSudoku(board: string[][]): boolean {
  const boardLength = board.length;
  const rowValues = new Set<string>();
  const columnValues = new Set<string>();
  const subBoxValues = new Set<string>();

  for (let row = 0; row < boardLength; row++) {
    for (let column = 0; column < boardLength; column++) {
      const currentValue = board[row][column];
      if (currentValue === '.') continue;

      const rowKey = `row:${row}#value:${currentValue}`;
      const columnKey = `column:${column}#value:${currentValue}`;
      const subBoxKey = `subBox:${[
        Math.floor(row / 3),
        Math.floor(column / 3),
      ]}#value:${currentValue}`;

      if (
        rowValues.has(rowKey) ||
        columnValues.has(columnKey) ||
        subBoxValues.has(subBoxKey)
      ) {
        return false;
      }

      rowValues.add(rowKey);
      columnValues.add(columnKey);
      subBoxValues.add(subBoxKey);
    }
  }

  return true;
}
