// Description: Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// Link: https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(n) wheren is the time complexity of the function fn
// Space complexity: O(1)

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return await new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => reject('Time Limit Exceeded'), t);

      fn(...args)
        .then((result) => {
          resolve(result);
          clearTimeout(timeoutId);
        })
        .catch((err) => {
          reject(err);
          clearTimeout(timeoutId);
        });
    });
  };
}
