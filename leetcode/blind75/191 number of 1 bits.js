/*
https://leetcode.com/problems/number-of-1-bits/description/?envType=problem-list-v2&envId=oizxjoit

Given a positive integer n, write a function that returns the number of

in its binary representation (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

Constraints:

    1 <= n <= 231 - 1

 
Follow up: If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').filter(bit => bit === "1").length 
};

// bitshifting approach
var hammingWeight = function(n) {
    let count = 0
    while (n !== 0) {
        count += n & 1    // check rightmost bit
        n = n >>> 1       // shift right by 1
    }
    return count
}