"""
https://leetcode.com/problems/divide-two-integers/description/

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.

 

Constraints:

    -231 <= dividend, divisor <= 231 - 1
    divisor != 0

"""

"""
 js solution

var divide = function(dividend, divisor) {
    let ans = dividend/divisor;
    let res =  ans < 0 ? -1*Math.floor(Math.abs(ans)) : Math.floor(ans);
    
    if(res > 2**31 - 1) return 2 ** 31 - 1;
    if(-(2 ** 31) > res) return -(2 ** 31);

    return res;
};

"""

class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        # handle sign
        sign = -1 if (dividend < 0) ^ (divisor < 0) else 1
        
        # get result using integer division
        result = abs(dividend) // abs(divisor)
        
        # apply sign
        result = sign * result
        
        # handle 32-bit integer constraints
        return min(max(-(2**31), result), 2**31 - 1)
        