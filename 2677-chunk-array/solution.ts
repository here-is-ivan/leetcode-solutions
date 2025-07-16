// Description: Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// Please solve it without using lodash's _.chunk function.

// Link: https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(n)
// Space complexity: O(n)

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const chunckedArray: Obj[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    chunckedArray.push(arr.slice(i, i + size));
  }

  return chunckedArray;
}
