    """
    https://leetcode.com/problems/reverse-integer/ 
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
    """

class Solution:
    def reverse(self, x: int) -> int:
        # handle negative numbers
        is_negative = x < 0
        # convert to positive number
        x = abs(x)
        
        # convert to string, reverse, and back to integer
        reversed_num = int(str(x)[::-1])
        
        # apply sign
        if is_negative:
            reversed_num = -reversed_num
            
        # check int overflow
        if reversed_num > 2**31 - 1 or reversed_num < -(2**31):
            return 0
            
        return reversed_num
        