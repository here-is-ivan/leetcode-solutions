// Description: Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Link: https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(n)
// Space complexity: O(n)

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformedArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    transformedArray.push(fn(arr[i], i));
  }

  return transformedArray;
}
