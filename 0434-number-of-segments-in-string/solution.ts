// Description: Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Link: https://leetcode.com/problems/number-of-segments-in-a-string/description/

// Time complexity: O(n) n - string length
// Space complexity: O(n) 

function countSegments(s: string): number {
  return s.split(' ').filter((x) => x !== '').length;
}