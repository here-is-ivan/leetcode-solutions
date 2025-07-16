// Description: Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
// Link: https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then(
    (values) => values[0] + values[1]
  );
}
