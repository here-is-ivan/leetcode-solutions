// Description: Given two binary strings a and b, return their sum as a binary string.
// Link: https://leetcode.com/problems/add-binary/description/

// Time complexity: O(n) n - length of longest string
// Space complexity: O(n)

function addBinary(a: string, b: string): string {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let carry = 0;

  const result = new Array<number>;

  while (aIndex >= 0 || bIndex >= 0 || carry > 0) {
    if (a[aIndex]) {
      carry += parseInt(a[aIndex]);
      aIndex--;
    }

    if (b[bIndex]) {
      carry += parseInt(b[bIndex]);
      bIndex--;
    }

    result.push(carry % 2);
    carry = Math.floor(carry / 2);
  }

  return result.reverse().join('');
}
