"""
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

 

Constraints:

    2 <= numbers.length <= 3 * 104
    -1000 <= numbers[i] <= 1000
    numbers is sorted in non-decreasing order.
    -1000 <= target <= 1000
    The tests are generated such that there is exactly one solution.


"""

from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # two pointer technique - left at start and right at end
        left = 0
        right = len(numbers) - 1
        
        while left < right:
            current_sum = numbers[left] + numbers[right]
            
            # found target, return indices (1-indexed)
            if current_sum == target:
                return [left + 1, right + 1]
            
            # sum too large, decrease right pointer
            if current_sum > target:
                right -= 1
            # sum too small, increase left pointer
            else:
                left += 1
        
        # this line shouldn't be needed, problem guarantees a solution
        return []
        

# more pythonic solution
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # solution 1: pythonic two-pointer approach
        left, right = 0, len(numbers) - 1
        
        while left < right:
            curr_sum = numbers[left] + numbers[right]
            match curr_sum:
                case x if x == target:
                    return [left + 1, right + 1]
                case x if x > target:
                    right -= 1
                case _:
                    left += 1
        
        return []
    
    def twoSum_dict(self, numbers: List[int], target: int) -> List[int]:
        # solution 2: dictionary approach (uses O(n) space but more pythonic)
        seen = {}
        
        # enumerate gives us index and value in one go
        for i, num in enumerate(numbers, 1):  # 1-indexed enumeration
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
            
        return []  # not reached due to problem constraints