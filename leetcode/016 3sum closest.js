/*
https://leetcode.com/problems/3sum-closest/

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 

Constraints:

    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // sort array to use two-pointer technique
    nums.sort((a, b) => a - b)
    
    // initialize closest sum with first three numbers
    let closestSum = nums[0] + nums[1] + nums[2]
    
    // iterate through array, fixing first number
    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicates for first number to avoid redundant calculations
        if (i > 0 && nums[i] === nums[i-1]) continue
        
        // use two pointers for remaining two numbers
        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right]
            
            // if we found exact target, return it immediately
            if (currentSum === target) return currentSum
            
            // update closestSum if current sum is closer to target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }
            
            // move pointers based on comparison with target
            if (currentSum < target) {
                left++
                // skip duplicates for left pointer
                while (left < right && nums[left] === nums[left-1]) left++
            } else {
                right--
                // skip duplicates for right pointer
                while (left < right && nums[right] === nums[right+1]) right--
            }
        }
    }
    
    return closestSum
}