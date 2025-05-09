/*
https://leetcode.com/problems/longest-common-subsequence/?envType=problem-list-v2&envId=oizxjoit

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    For example, "ace" is a subsequence of "abcde".

A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

 

Constraints:

    1 <= text1.length, text2.length <= 1000
    text1 and text2 consist of only lowercase English characters.


*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // create dp array with dimensions (text1.length + 1) x (text2.length + 1)
    const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0))
    
    // fill dp array
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i-1] === text2[j-1]) {
                // characters match, add 1 to previous diagonal value
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                // characters don't match, take max of left or top value
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    
    // return the bottom-right value which contains the final answer
    return dp[text1.length][text2.length]
}