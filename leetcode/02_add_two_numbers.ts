/* https://leetcode.com/problems/add-two-numbers/ */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummyHead = new ListNode(0)
    let current = dummyHead
    let carry = 0

    // continue while we have digits to process in either number
    // or a carry from previous addition
    while (l1 || l2 || carry) {
        // get current digits (0 if no digit exists)
        const digit1 = l1?.val ?? 0  // e.g., for 342, first digit is 2
        const digit2 = l2?.val ?? 0  // e.g., for 465, first digit is 5

        // add digits and any carry from previous position
        const sum = digit1 + digit2 + carry

        // carry is 1 if sum >= 10, otherwise 0
        carry = Math.floor(sum / 10)
        
        // new digit is remainder after removing carry
        current.next = new ListNode(sum % 10)
        current = current.next

        // move to next digits
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }

    return dummyHead.next
};