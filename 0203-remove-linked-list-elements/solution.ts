// Description: Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Link: https://leetcode.com/problems/remove-linked-list-elements/description/

// Time complexity: O(n)
// Space complexity: O(1)

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let currentList = dummy;

  while (currentList.next) {
    if (currentList.next.val === val) {
      currentList.next = currentList.next.next;
    } else {
      currentList = currentList.next;
    }
  }

  return dummy.next;
}
