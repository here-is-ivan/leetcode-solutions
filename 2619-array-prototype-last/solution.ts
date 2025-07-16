// Description: Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

// Link: https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};