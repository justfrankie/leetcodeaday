class Node {
   constructor(data) {
       this.data = data
       this.next = null
   }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    add(val) {
        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = new Node(val);

        return this.head;
    }

    size() { // returns the amount of nodes in the Linked List
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() { // clears/empties the Linked list
        this.head = null;
    }

    getFirst() { // returns the first node of the Linked List
        return this.head;
    }

    getLast() {
        let lastNode = this.head; // start at beginning, or the head
       if (lastNode) {

           while (lastNode.next) { // iterate recursively until last node aka next === null
               lastNode = lastNode.next
           }
       }
       return lastNode
    }

   
}

let findCycleInLinkedList = (list) => {
    let seen = new Set(); // uses Hash Set to check if there are duplicate values

    let currNode = list.head;

    while (currNode != null) { // while loop to iterate over linked list
        if (seen.has(currNode.data)) { // return true if found a cycle
            return true;
        } else {
            seen.add(currNode.data) // if not in seen set, add the current value to seen set
        }
        currNode = currNode.next // loop into next node in linked list
    }
    return false 
}


let list = new LinkedList(new Node(1231313));
list.add(5)
list.add(7)
list.add(99)
list.add(5)
// console.log(list)

console.log(findCycleInLinkedList(list)) // should return true
