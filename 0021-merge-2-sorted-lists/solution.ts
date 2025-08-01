// Description: You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Link: https://leetcode.com/problems/merge-two-sorted-lists/description/

// Time complexity: O(n)
// Space complexity: O(1)

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(null);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }

  if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}