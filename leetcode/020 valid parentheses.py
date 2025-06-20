"""
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


"""

class Solution:
    def isValid(self, s: str) -> bool:
        # stack to keep track of opening brackets
        stack = []
        
        # map to store matching pairs of brackets
        pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        
        # iterate through each character
        for char in s:
            # if it's a closing bracket
            if char in pairs:
                # stack is empty or top of stack doesn't match
                if not stack or stack.pop() != pairs[char]:
                    return False
            else:
                # it's an opening bracket, push to stack
                stack.append(char)
        
        # valid only if stack is empty (all brackets matched)
        return len(stack) == 0
