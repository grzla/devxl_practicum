/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given the head of a linked list, remove the nth node from the end of the list and return its head.


Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

 

Constraints:

    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz

 

Follow up: Could you do this in one pass?

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // create a dummy node to handle edge case of removing first node
    // (create the dummy node ahead of the list)
    let dummy = new ListNode(0)
    dummy.next = head
    
    let first = dummy
    let second = dummy
    
    // advance first pointer by n+1 steps
    for (let i = 0; i <= n; i++) {
        first = first.next
    }
    
    // move both pointers until first reaches end
    while (first) {
        first = first.next
        second = second.next
    }
    
    // remove the nth node
    second.next = second.next.next
    
    return dummy.next
}

