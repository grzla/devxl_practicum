/* https://leetcode.com/problems/longest-palindromic-substring/ */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // handle edge cases
    if (s.length < 2) return s
    
    let start = 0
    let maxLength = 1
    
    // helper function to expand around center
    const expandAroundCenter = (left, right) => {
        // expand while within bounds and chars match
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // move outward
            left--
            right++
        }
        // return length of palindrome (right-left-1)
        return right - left - 1
    }
    
    // iterate through each character as potential center
    for (let i = 0; i < s.length; i++) {
        // check odd length palindromes (single char center)
        let len1 = expandAroundCenter(i, i)
        // check even length palindromes (between two chars)
        let len2 = expandAroundCenter(i, i + 1)
        
        // get max length from odd and even checks
        let len = Math.max(len1, len2)
        
        // update if we found a longer palindrome
        if (len > maxLength) {
            // calculate new start position
            start = i - Math.floor((len - 1) / 2)
            maxLength = len
        }
    }
    
    // return the substring using start position and length
    return s.slice(start, start + maxLength)
}