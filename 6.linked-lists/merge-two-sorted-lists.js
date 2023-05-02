// Leetcode Problem #21 Merge Two Sorted Lists
class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  };

  print() {
    let pointer = this;
    let output = '['
    while(pointer) {
      output += pointer.val;
      pointer = pointer.next;
    }

    output += ']';

    console.log(output);
  }
};

const testList1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const testList2 = new ListNode(2, new ListNode(4, new ListNode(6)));

var mergeTwoLists = function(list1, list2) {
  let newList = new ListNode(null);
  let pointer = newList;

  while(list1 && list2) {
    if(list1.val < list2.val) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }
    pointer = pointer.next;
  }

  pointer.next = list1 || list2; 

  return newList.next;
};

testList1.print();
testList2.print();
mergeTwoLists(testList1, testList2).print();