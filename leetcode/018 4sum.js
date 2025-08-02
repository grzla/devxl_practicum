/*  
https://leetcode.com/problems/4sum/

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 

Constraints:

    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = []
    const n = nums.length
    
    // edge case: need at least 4 numbers
    if (n < 4) return result
    
    // sort the array to enable two-pointer technique and avoid duplicates
    nums.sort((a, b) => a - b)
    
    // iterate through all possible first numbers
    for (let i = 0; i < n - 3; i++) {
        // skip duplicates for first number
        if (i > 0 && nums[i] === nums[i - 1]) continue
        
        // iterate through all possible second numbers
        for (let j = i + 1; j < n - 2; j++) {
            // skip duplicates for second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            
            // use two pointers for the remaining two numbers
            let left = j + 1
            let right = n - 1
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                
                if (sum === target) {
                    // found a valid quadruplet
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    
                    // skip duplicates for left pointer
                    while (left < right && nums[left] === nums[left + 1]) left++
                    // skip duplicates for right pointer
                    while (left < right && nums[right] === nums[right - 1]) right--
                    
                    // move both pointers
                    left++
                    right--
                } else if (sum < target) {
                    // need larger sum, move left pointer right
                    left++
                } else {
                    // need smaller sum, move right pointer left
                    right--
                }
            }
        }
    }
    
    return result
}