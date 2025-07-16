// Description: Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// Link: https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: depends on functioin
// Space complexity: depends on functioin

class ArrayWrapper {
  private array: number[];

  constructor(nums: number[]) {
    this.array = nums;
  }

  valueOf(): number {
    return this.array.reduce((acc, cur) => acc + cur, 0);
  }

  toString(): string {
    return JSON.stringify(this.array);
  }
}
