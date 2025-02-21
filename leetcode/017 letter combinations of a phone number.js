/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]

 

Constraints:

    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].


*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // if no digits provided, return empty array
    if (!digits) return []
    
    // map each digit to its corresponding letters on phone keypad
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    // store final results
    const result = []
    
    // recursive helper function to build combinations
    const backtrack = (currentStr, remainingDigits) => {
        // base case: if no more digits to process
        if (remainingDigits.length === 0) {
            // add completed combination to result
            result.push(currentStr)
            return
        }
        
        // get the first digit from remaining digits
        const currentDigit = remainingDigits[0]
        // get letters corresponding to current digit
        const letters = phoneMap[currentDigit]
        
        // iterate through each letter for current digit
        for (let letter of letters) {
            // recursively build combinations with remaining digits
            backtrack(
                currentStr + letter,           // add current letter to combination
                remainingDigits.slice(1)       // remove first digit and continue
            )
        }
    }
    
    // start recursive process with empty string and all digits
    backtrack('', digits)
    return result
}