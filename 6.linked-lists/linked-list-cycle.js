// Leetcode Problem #141 Linked List Cycle
class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  };
};

const testList1 = new ListNode(1, new ListNode(2, new ListNode(3)));
testList1.next.next.next = testList1.next;
const testList2 = new ListNode(1, new ListNode(2, new ListNode(3)));

const hasCycle1 = function(head) {
  let map = new Set();

  while (head) {
      if (!map.has(head)) {
          map.add(head);
      } else {
          return true;
      };

      head = head.next;
  }

  return false;
};

const hasCycle2 = function(head) {
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
      head = head.next;
      fastPointer = fastPointer.next.next;

      if(head === fastPointer) return true;
  }

  return false;
};

console.log(hasCycle1(testList1));
console.log(hasCycle1(testList2));

console.log(hasCycle2(testList1));
console.log(hasCycle2(testList2));