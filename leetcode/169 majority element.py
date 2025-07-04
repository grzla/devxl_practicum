"""
https://leetcode.com/problems/majority-element/description/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
"""

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate, count = nums[0], 1
        
        # voting phase: find the candidate
        for num in nums[1:]:  # Pythonic: iterate from second element
            if count == 0:
                # pick new candidate when count reaches 0
                candidate, count = num, 1
            elif num == candidate:
                # strengthen current candidate
                count += 1
            else:
                # weaken current candidate
                count -= 1
        
        # guaranteed majority element exists, so candidate is our answer
        return candidate
        