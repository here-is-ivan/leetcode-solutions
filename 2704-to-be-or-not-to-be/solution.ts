// Description: Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Link: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (val2) => {
      if (val === val2) return true;
      throw new Error('Not Equal');
    },
    notToBe: (val2) => {
      if (val !== val2) return true;
      throw new Error('Equal');
    },
  };
}
