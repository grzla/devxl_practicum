/* https://leetcode.com/problems/longest-palindromic-substring/ 

Given a string s, return the longest

in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // track start and maxLen to return the actual substring
    let start = 0
    let maxLen = 1  // initialize to 1 since single chars are palindromes

    for (let i = 0; i < s.length; i++) {
        // check even length palindromes (bb)
        let left = i
        let right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left
                maxLen = right - left + 1
            }
            left--
            right++
        }

        // check odd length palindromes (aba)
        left = i - 1
        right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left
                maxLen = right - left + 1
            }
            left--
            right++
        }
    }
    
    return s.substring(start, start + maxLen)
}