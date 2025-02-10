/* 
https://leetcode.com/problems/string-to-integer-atoi/

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.

Return the integer as the final result.
*/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // match optional whitespace, optional sign, and consecutive digits
    let match = s.match(/^\s*([-+]?\d+)/)
    
    // if no match found, return 0
    if (!match) return 0
    
    // convert to number and handle bounds
    let num = Number(match[1])
    let min = Math.pow(-2, 31)
    let max = Math.pow(2, 31) - 1
    
    // clamp the number within 32-bit integer bounds
    return Math.min(Math.max(num, min), max)
}

/*
// clever algorithmic version
let myAtoi = function (s) {
    const ans = Number.parseInt(s);
    if (ans) {
        if (ans <= -2147483648) {
            return -2147483648
        }
        else if (ans >= 2147483647) {
            return 2147483647
        }
        else {
            return ans
        }
    }
    return 0;
};

// standard algorithmic version
var myAtoi = function(s) {
    let i = 0
    let result = 0
    let sign = 1
    let min = Math.pow(-2, 31)
    let max = Math.pow(2, 31) - 1
    
    // skip leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++
    }
    
    // handle sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '+' ? 1 : -1
        i++
    }
    
    // process digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        // check for overflow before adding new digit
        if (result > Math.floor(max / 10) || 
            (result === Math.floor(max / 10) && s[i] > '7')) {
            return sign === 1 ? max : min
        }
        
        result = result * 10 + (s[i] - '0')
        i++
    }
    
    return sign * result
}
*/