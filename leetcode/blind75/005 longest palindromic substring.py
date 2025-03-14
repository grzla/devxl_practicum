"""
https://leetcode.com/problems/longest-palindromic-substring/ 

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
"""

class Solution:
    def longestPalindrome(self, s: str) -> str:
        start=0
        maxLen=1

        for i in range (len(s)):
            left=i 
            right=i+1 

            while left >= 0 and right < len(s) and s[left] == s[right]:
                if right-left + 1 > maxLen:
                    start=left
                    maxLen=right-left+1
                left-=1
                right+=1

            left=i-1
            right=i+1

            while left>=0 and right<len(s) and s[left] == s[right]:
                if right-left +1 > maxLen:
                    start=left
                    maxLen=right-left+1

                left-=1
                right+=1

        return s[start:start+maxLen]
