// Description: Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// Link: https://leetcode.com/problems/generate-fibonacci-sequence/

// Time complexity: O(1)
// Space complexity: O(1)

function* fibGenerator(): Generator<number, any, number> {
  let x1 = 0;
  let x2 = 1;

  while (true) {
    yield x1;
    [x1, x2] = [x2, x1 + x2];
  }
}
