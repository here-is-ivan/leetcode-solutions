// Description: Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Link: https://leetcode.com/problems/palindrome-linked-list/

// Time complexity: O(n)
// Space complexity: O(n)

function isPalindrome(head: ListNode | null): boolean {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] !== values[values.length - 1 - i]) return false;
  }

  return true;
}
