// Description: Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Link: https://leetcode.com/problems/linked-list-cycle/

// Time complexity: O(n)
// Space complexity: O(1)

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) return true;

    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}
