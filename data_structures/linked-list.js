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
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // insert at index
  insertAtIndex(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to first
    current = this.head;
    let count = 0;
    // loop over the linked list
    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
  }

  // get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAtIndex(index) {
    // out of range, return
    if (index > 0 && index > this.size) {
      return;
    }
    // set marker flag
    let current = this.head;
    let previous;
    let count = 0;

    // if first, remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  // clear list
  clear() {
    this.head = null;
    return;
  }

  getNthNodeFromLast(index) {
    // if index is out of range, return;
    if (index > this.size) return;

    // if no this.size, we have to run through the linkedList first to set size

    // create count variable by this.size - index
    let count = this.size - index;
    let current = this.head;

    // iterate over linkedList up until the count variable
    while (current) {
      if (count === 0) {
        console.log(current.data);
      }
      count--;
      current = current.next;
    }
  }

  // print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
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
ll.getNthNodeFromLast(3); // should return 200
// ll.printListData();
// ll.getAtIndex(2);
