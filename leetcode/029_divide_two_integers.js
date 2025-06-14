/*

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

/*

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // max range
    const MAX_INT = 2147483647
    const MIN_INT = -2147483648
    
    // handle overflow case
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT
    }
    
    // get sign of result
    const sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1
    
    // convert to positive
    // handle MIN_INT special case
    let dvd = Math.abs(dividend === MIN_INT ? dividend + 1 : dividend)
    let dvs = Math.abs(divisor)
    
    let result = 0
    
    // for each possible power of 2, check if we can subtract
    for (let i = 31; i >= 0; i--) {
        if ((dvd >>> i) >= dvs) {
            result += (1 << i)
            dvd -= (dvs << i)
        }
    }

    // adjust for MIN_INT special case
    if (dividend === MIN_INT && dvd + 1 >= dvs) {
        result++
    }

    return sign * result
}


/* simplified solution

var divide = function(dividend, divisor) {
    let ans = dividend/divisor;
    let res =  ans < 0 ? -1*Math.floor(Math.abs(ans)) : Math.floor(ans);
    
    if(res > 2**31 - 1) return 2 ** 31 - 1;
    if(-(2 ** 31) > res) return -(2 ** 31);

    return res;
};

*/