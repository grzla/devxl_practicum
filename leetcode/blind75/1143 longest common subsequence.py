"""
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


"""
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # create a grid where each cell [i][j] represents:
        # "what's the longest common subsequence between text1[0...i] and text2[0...j]?"
        grid = [[0] * (len(text2) + 1) for _ in range(len(text1) + 1)]
        
        # fill the grid row by row
        for i in range(len(text1)):
            for j in range(len(text2)):
                if text1[i] == text2[j]:
                    # if characters match, we can extend the previous subsequence
                    # by adding this matching character
                    grid[i + 1][j + 1] = grid[i][j] + 1
                else:
                    # if characters don't match, we have two choices:
                    # 1. skip the current character from text1
                    # 2. skip the current character from text2
                    # we take the maximum of these two choices
                    grid[i + 1][j + 1] = max(grid[i + 1][j], grid[i][j + 1])
        
        return grid[-1][-1]
        