/*
https://leetcode.com/problems/word-break/?envType=problem-list-v2&envId=oizxjoit

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 

Constraints:

    1 <= s.length <= 300
    1 <= wordDict.length <= 1000
    1 <= wordDict[i].length <= 20
    s and wordDict[i] consist of only lowercase English letters.
    All the strings of wordDict are unique.

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    
    for (let i = 1; i <= s.length; i++) {
        // try each word in dictionary
        for (let word of wordDict) {
            // if word is longer than current position, it can't work
            if (word.length <= i) {
                // check if:
                // 1. word matches ending at position i
                // 2. we could build string up to start of this word
                const startIndex = i - word.length
                if (dp[startIndex] && s.slice(startIndex, i) === word) {
                    dp[i] = true
                    break  // we found a valid way to build up to i
                }
            }
        }
    }
    
    return dp[s.length]
};