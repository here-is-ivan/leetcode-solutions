// Description: Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Link: https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}
