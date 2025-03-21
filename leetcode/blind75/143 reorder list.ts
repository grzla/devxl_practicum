/*
https://leetcode.com/problems/reorder-list/description/?envType=problem-list-v2&envId=oizxjoit

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

 

Constraints:

    The number of nodes in the list is in the range [1, 5 * 104].
    1 <= Node.val <= 1000


*/


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 Do not return anything, modify head in-place instead.
 */
// O(n^2) recursive solution
function reorderList(head: ListNode | null): void {
    // base cases
    if (!head || !head.next || !head.next.next) return
    
    // find tail and previous
    let prev = head
    let tail = head
    while (tail.next) {
        prev = tail
        tail = tail.next
    }
    
    // break the link to tail
    prev.next = null
    
    // save the next node
    let nextHead = head.next
    
    // connect head -> tail -> rest of list
    head.next = tail
    tail.next = nextHead
    
    // recurse on the remaining list
    reorderList(nextHead)
};

// O(n) optimal solution - divide list in half, reverse second half and merge
function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return
    
    // step 1: find middle using slow/fast pointers
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next!
        fast = fast.next.next
    }
    
    // step 2: reverse second half
    let second = slow.next
    slow.next = null  // break first half
    let prev = null
    let curr = second
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    // step 3: merge two halves
    let first = head
    second = prev
    while (second) {
        let temp1 = first.next
        let temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1!
        second = temp2
    }
}