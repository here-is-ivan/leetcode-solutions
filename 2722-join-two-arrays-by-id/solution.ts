// Description: Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// Link: https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(n + m)
// Space complexity: O(n + m)

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const allObjects = [...arr1, ...arr2];
  const uniqueIDsArray = {};

  for (let i = 0; i < allObjects.length; i++) {
    const currentId = allObjects[i].id;

    if (currentId in uniqueIDsArray) {
      Object.assign(uniqueIDsArray[currentId], allObjects[i]);
    } else {
      uniqueIDsArray[currentId] = allObjects[i];
    }
  }

  return Object.values(uniqueIDsArray);
}
