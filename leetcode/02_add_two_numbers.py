""" https://leetcode.com/problems/add-two-numbers/ """

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # create a dummy head node
        dummy = ListNode(0)
        current = dummy
        carry = 0
        
        # iterate while we have nodes or carry
        while l1 or l2 or carry:
            # get values from nodes or use 0 if node is None
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            
            # calculate sum and new carry
            total = x + y + carry
            carry = total // 10
            
            # create new node with ones digit
            current.next = ListNode(total % 10)
            current = current.next
            
            # move to next nodes if they exist
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next
        
