class Solution:
    def isPalindrome(self, x: int) -> bool:
        # can't be negative
        if x < 0:
            return False
        
        # compare string to its reverse
        return str(x) == str(x)[::-1]
    