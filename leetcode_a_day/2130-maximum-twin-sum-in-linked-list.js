/**
2130. Maximum Twin Sum of a Linked List
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

 

Example 1:


Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
Example 2:


Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
Example 3:


Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var pairSum = function(head) {
    // calculate twin is twin = n - 1 - i
    // find size by iterating through the LL once
    let current = head;
    let index = 0;
    while (current) {
        index++;
        current = current.next
    }

    // find midpoint of LL
    let middle = index/2;

    current = head;
    let reversed;
    // split the LL into halves
    while (current) {
        if (middle === 0) {
            reversed = new ListNode(current.val, current.next)
            break;
        }
        middle--
        current = current.next
    }
    current = reversed
    let previous = null, next = null
    // reverse the second half of LL
    while (current !== null) {
        next = current.next
        current.next = previous
        previous = current
        current = next
    }

    reversed = previous
    let max = -99999999
    current = head
    // iterate through the first LL, its twin will be the same node in the reversed LL
    while (current && reversed) {
        max = Math.max(current.val + reversed.val, max)
    // calculate sum if > max
        // current sum = max
        current = current.next 
        reversed = reversed.next 
    }
    // return max
    return max
};
