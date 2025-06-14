/*
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


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // find left
    const findLeft = (nums, target) => {
        let left = 0
        let right = nums.length - 1
        let result = -1
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            
            if (nums[mid] === target) {
                result = mid
                right = mid - 1 // look for target in left half
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return result
    }
    
    // find right
    const findRight = (nums, target) => {
        let left = 0
        let right = nums.length - 1
        let result = -1
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            
            if (nums[mid] === target) {
                result = mid
                left = mid + 1 // look for target in right half
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return result
    }
    
    const leftPos = findLeft(nums, target)
    const rightPos = findRight(nums, target)
    
    return [leftPos, rightPos]
}