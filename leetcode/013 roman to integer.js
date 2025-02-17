/* 
https://leetcode.com/problems/roman-to-integer/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

Constraints:

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].


*/

/**
 * converts a roman numeral string to an integer
 * @param {string} s - roman numeral string (e.g., "MCMXCIV")
 * @return {number} - decimal integer value
 */
var romanToInt = function(s) {
    // map each roman numeral to its decimal value
    // this object allows O(1) lookup of values
    const values = {
        'I': 1,    // base numeral for ones
        'V': 5,    // base numeral for five
        'X': 10,   // base numeral for tens
        'L': 50,   // base numeral for fifty
        'C': 100,  // base numeral for hundreds
        'D': 500,  // base numeral for five hundred
        'M': 1000  // base numeral for thousands
    }
    
    // accumulator for building the final integer value
    let result = 0
    
    // iterate through each character in the roman numeral string
    for (let i = 0; i < s.length; i++) {
        // handle subtraction cases (e.g., IV = 4, CM = 900)
        // check if we have a next character and if current value is less than next value
        // examples where this applies: IV(4), IX(9), XL(40), XC(90), CD(400), CM(900)
        if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
            // subtract current value since it's part of a subtractive pair
            result -= values[s[i]]
        } else {
            // normal case: just add the value of current numeral
            // this handles both single numerals and the second numeral in subtractive pairs
            result += values[s[i]]
        }
    }
    
    // return the calculated integer value
    return result
}