// Description: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:

// Link: https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// Time complexity: O(n)
// Space complexity: O(1)

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}
