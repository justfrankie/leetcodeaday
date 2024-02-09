/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.
 

Constraints:

The number of nodes in the list is in the range [1, 105].
1 <= Node.val <= 105
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteMiddle = function(head) {
    if (head.next !== null && head.next.next === null) {
        head.next = null
        return head
    } else if (head.next === null) {
        return null
    }
    // initialize count
    let count = 1;
    // iterate through the entire linkedList first
    let current = head;
    while (current.next !== null) {
        // identify the middle index by adding count +1
        count++
        current = current.next
    }
    // set the middle number to be count / 2 rounded down
    let middle = Math.floor(count/2)
    // initialize previous
    let previous, next
    current = head;

    // go through the linked list
    while (current.next !== null) {
        // each time the node is passed, subtract count--
        middle--
        if (middle === 0) {
        // once count is 0, store the next node in temp
        previous = current
        // set the previous.next = current.next
        } else if (middle === -1) {
            previous.next = current.next
        }
        current = current.next
    }
    return head
};
