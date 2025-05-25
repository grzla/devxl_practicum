"""
https://leetcode.com/problems/generate-parentheses/description/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8

"""
from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # base case 
        if n == 0:
            return ['']
        
        # store all valid combinations
        result = []
        
        # try all combinations with i pairs on the left
        for i in range(n):
            # get valid combinations for left and right parts
            for left in self.generateParenthesis(i):
                for right in self.generateParenthesis(n - 1 - i):
                    # combine with current pair
                    result.append(f'({left}){right}')
        
        return result
        