/*
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort array to help with duplicate handling and two-pointer approach
    nums.sort((a, b) => a - b)
    
    let result = []
    
    // iterate through possible first numbers of triplet
    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicates for first number
        if (i > 0 && nums[i] === nums[i-1]) continue
        
        // use two pointers for remaining two numbers
        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            
            if (sum === 0) {
                // found a valid triplet
                result.push([nums[i], nums[left], nums[right]])
                
                // skip duplicates for second number
                while (left < right && nums[left] === nums[left + 1]) left++
                // skip duplicates for third number
                while (left < right && nums[right] === nums[right - 1]) right--
                
                // move both pointers inward
                left++
                right--
            } else if (sum < 0) {
                // sum is too small, need larger numbers
                left++
            } else {
                // sum is too large, need smaller numbers
                right--
            }
        }
    }
    
    return result
}