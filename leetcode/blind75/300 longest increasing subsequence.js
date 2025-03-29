/*
https://leetcode.com/problems/longest-increasing-subsequence/?envType=problem-list-v2&envId=oizxjoit

Given an integer array nums, return the length of the longest strictly increasing

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

 

Constraints:

    1 <= nums.length <= 2500
    -104 <= nums[i] <= 104

 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp[i] represents the length of LIS ending at index i
    let dp = new Array(nums.length).fill(1)
    let maxLen = 1
    
    // for each number, look at all previous numbers
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // if current number is greater, we can extend the subsequence
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    
    return maxLen
}

// O (n log n) binary search solution
var lengthOfLIS = function(nums) {
    // tails[i] stores the smallest value that can end a subsequence of length i+1
    let tails = []
    
    for (let num of nums) {
        // find the first position where num could be inserted while keeping array sorted
        let left = 0
        let right = tails.length
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (tails[mid] < num) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        
        // if we found a position equal to tails length, we're adding to the end
        if (left === tails.length) {
            tails.push(num)
        } else {
            // otherwise we're replacing a value to keep our subsequence optimal
            tails[left] = num
        }
    }
    
    return tails.length
}