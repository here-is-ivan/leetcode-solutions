// Description: Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.

// Link: https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(n)

class TimeLimitedCache {
  private cachedPairs: Map<number, [number, ReturnType<typeof setTimeout>]>;

  constructor() {
    this.cachedPairs = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let alreadyExists = this.cachedPairs.has(key);

    if (alreadyExists) {
      const existingPair = this.cachedPairs.get(key);
      if (existingPair) {
        clearTimeout(existingPair[1]);
      }
    }

    this.cachedPairs.set(key, [
      value,
      setTimeout(() => {
        this.cachedPairs.delete(key);
      }, duration),
    ]);

    return alreadyExists;
  }

  get(key: number): number {
    const cachedPair = this.cachedPairs.get(key);
    if (cachedPair) {
      return cachedPair[0];
    }

    return -1;
  }

  count(): number {
    return this.cachedPairs.size;
  }
}