"""
https://leetcode.com/problems/sum-of-two-integers/?envType=problem-list-v2&envId=oizxjoit

Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = 2, b = 3
Output: 5

 

Constraints:

    -1000 <= a, b <= 1000


"""

class Solution:
    def getSum(self, a: int, b: int) -> int:
        # 32-bit mask for handling overflow
        mask = 0xFFFFFFFF
        
        # convert to 32-bit integers
        a = a & mask
        b = b & mask
        
        while b != 0:
            # calculate carry
            carry = ((a & b) << 1) & mask
            # calculate sum without carry
            a = (a ^ b) & mask
            # update b to be the carry
            b = carry
            
        # handle negative numbers
        if a > 0x7FFFFFFF:
            a = ~(a ^ mask)
            
        return a
        