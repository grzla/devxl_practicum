/*
https://leetcode.com/problems/reverse-bits/?envType=problem-list-v2&envId=oizxjoit

Reverse bits of a given 32 bits unsigned integer.

Note:

    Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

 

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

 

Constraints:

    The input must be a binary string of length 32

 

Follow up: If this function is called many times, how would you optimize it?

*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // convert to binary string and pad to 32 bits
    let binary = n.toString(2).padStart(32, '0')
    // reverse and join without separator
    let reversed = binary.split('').reverse().join('')
    // convert back to decimal number using parseInt with base 2
    return parseInt(reversed, 2)
};

// bitwise reversal
var reverseBits = function(n) {
    let result = 0
    
    // iterate through all 32 bits
    for (let i = 0; i < 32; i++) {
        // get current bit (0 or 1)
        let bit = (n >> i) & 1
        // place it in reverse position
        result |= (bit << (31 - i))
    }
    
    return result >>> 0  // ensure unsigned 32-bit integer
}