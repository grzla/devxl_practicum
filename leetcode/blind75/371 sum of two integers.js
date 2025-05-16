/*
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


*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // keep adding until there's no carry left
    while (b !== 0) {
        // calculate carry using AND and left shift
        let carry = (a & b) << 1
        // calculate sum using XOR
        a = a ^ b
        // update b with the carry
        b = carry
    }
    return a
}