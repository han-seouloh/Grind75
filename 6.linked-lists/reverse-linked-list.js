// Leetcode Problem #206 Reverse Linked List

var reverseList = function (head) {
  let [ prev, curr, next ] = [ null, head, null ];

  while (curr) {/* Time O(N) */
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
  }

  return prev;
};