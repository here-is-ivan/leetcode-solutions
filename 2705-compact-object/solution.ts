// Description: Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Link: https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript

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

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    obj = obj.filter(Boolean);
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj[key] = compactObject(obj[key]);
    } else if (!Boolean(obj[key])) {
      delete obj[key];
    }
  }

  return obj;
}
