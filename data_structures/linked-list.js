class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {}

  // insert last node
  insertLast(data) {}

  // insert at index
  insertAtIndex(data, index) {}

  // get at index
  getAtIndex(index) {}

  // Remove at index
  removeAtIndex(index) {
    // out of range, return;
  }

  // clear list
  clear() {
    this.head = null;
    return;
  }

  getNthNodeFromLast(index) {
    // if index is out of range, return;
  }

  // print list data
  printListData() {}
}

// example usage:
const ll = new LinkedList();

// insertFirst elements into the linkedlist;
ll.insertFirst(400);
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);

// ll.insertAtIndex(500, 2);
// ll.removeAtIndex(1);
// ll.clear();
// ll.getNthNodeFromLast(3); // should return 200
// ll.getAtIndex(2);
ll.printListData();
