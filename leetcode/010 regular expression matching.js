/* 
https://leetcode.com/problems/regular-expression-matching/description/

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

 

Constraints:

    1 <= s.length <= 20
    1 <= p.length <= 20
    s contains only lowercase English letters.
    p contains only lowercase English letters, '.', and '*'.
    It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // create a dp table with dimensions (s.length + 1) x (p.length + 1)
    // dp[i][j] represents if s[0...i-1] matches p[0...j-1]
    const dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(false))
    
    // empty pattern matches empty string
    dp[0][0] = true
    
    // handle patterns with *
    // for empty string s, pattern like a*, a*b*, etc might still be valid
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]
        }
    }
    
    // iterate through each character in s and p
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // if current chars match or pattern has '.'
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1]
            }
            // if current pattern char is '*'
            else if (p[j - 1] === '*') {
                // check if we can ignore the pattern (zero occurrence)
                dp[i][j] = dp[i][j - 2]
                
                // if previous pattern char matches current string char or is '.'
                // we can use the * to match current char
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]
                }
            }
        }
    }
    
    // return if entire string matches entire pattern
    return dp[s.length][p.length]
}