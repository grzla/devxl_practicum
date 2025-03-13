/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=oizxjoit

Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

const { SetMealRounded } = require("@mui/icons-material");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // handle edge cases
    if (s.length <= 1) return s.length
    
    let left = 0
    let right = 0
    let maxLen = 0
    let chars = new Set()
    
    while (right < s.length) {
        while (chars.has(s[right])) {
            chars.delete(s[left])
            left++
        }
        chars.add(s[right])
        maxLen = Math.max(maxLen, right-left + 1)
        right++
    }

    return maxLen
};