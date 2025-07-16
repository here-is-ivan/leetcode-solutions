// Description: Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
// Please solve it without the built-in Array.flat method.

// Link: https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(n)
// Space complexity: O(n)

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const flattenArray: number[] = [];

  const flatten = (array, deepLevel: number) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && deepLevel > 0) {
        flatten(array[i], deepLevel - 1);
      } else {
        flattenArray.push(array[i]);
      }
    }
  };

  flatten(arr, n);
  return flattenArray;
};
