/*
https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]

 

Constraints:

    The number of nodes in the list is n.
    1 <= k <= n <= 105
    0 <= Node.val <= 100


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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // edge case: if list is empty or has only one node
    if (!head || !head.next) return head
    
    // use dummy to keep track of first k nodes
    let first = head
    
    // find the kth node from start
    let kthFromStart = head
    for (let i = 1; i < k; i++) {
        kthFromStart = kthFromStart.next
    }
    
    // find kth node from end using two pointer technique
    // slow will end up at kth node from end
    let slow = head
    let fast = kthFromStart.next
    
    // move fast to the end
    // when fast reaches end, slow will be at kth from end
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    
    // swap the values of kth node from start and kth node from end
    let temp = kthFromStart.val
    kthFromStart.val = slow.val
    slow.val = temp
    
    return head
}