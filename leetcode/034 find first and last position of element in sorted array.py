"""
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

 

Constraints:

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109

"""
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def find_left(nums, target):
            # find the leftmost position of target
            left, right = 0, len(nums) - 1
            result = -1
            
            while left <= right:
                mid = (left + right) // 2
                
                if nums[mid] == target:
                    result = mid
                    right = mid - 1  # look for target in left half
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return result
        
        def find_right(nums, target):
            # find the rightmost position of target
            left, right = 0, len(nums) - 1
            result = -1
            
            while left <= right:
                mid = (left + right) // 2
                
                if nums[mid] == target:
                    result = mid
                    left = mid + 1  # look for target in right half
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return result
        
        left_pos = find_left(nums, target)
        right_pos = find_right(nums, target)
        
        return [left_pos, right_pos]
        