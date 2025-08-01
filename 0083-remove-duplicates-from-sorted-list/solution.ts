// Description: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// Time complexity: O(n)
// Space complexity: O(1)

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = head;
  const tail = dummy;

  while (head) {
    while (head.next && head.val === head.next.val) {
      head.next = head.next.next;
    }

    head = head.next;
  }

  return dummy;
}
