"""
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

"""
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # create dp table with dimensions (len(s) + 1) x (len(p) + 1)
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        
        # empty pattern matches empty string
        dp[0][0] = True
        
        # handle patterns with *
        for j in range(1, len(p) + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-2]
        
        # fill the dp table
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j-1] == s[i-1] or p[j-1] == '.':
                    dp[i][j] = dp[i-1][j-1]
                elif p[j-1] == '*':
                    # zero occurrence of the element before *
                    dp[i][j] = dp[i][j-2]
                    # if current char matches with the one before * or the one before * is '.'
                    if p[j-2] == s[i-1] or p[j-2] == '.':
                        dp[i][j] = dp[i][j] or dp[i-1][j]
        
        return dp[len(s)][len(p)]
        