from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # store value:index pairs
        seen = {}
        
        for i, num in enumerate(nums):
        # same as: for i in range(len(nums)):
            complement = target - num
            
            # check if complement exists in map
            if complement in seen:
                return [i, seen[complement]]
            
            # if not found, add current number to map
            seen[num] = i
        