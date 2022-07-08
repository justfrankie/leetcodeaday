/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // early return itself if head is null
    if (!head) {
        return head
    }
    
    let prev = null;
    let current = head;
    let next = null;
    
    // while loop if head.next is valid
    while (current !== null) {
        // set next to current.next
        next = current.next;
        
        // set current.next = prev
        current.next = prev;
        
        // set prev to current
        prev = current;
        
        //set current to next
        current = next;
    }
    return prev
};
