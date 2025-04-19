/* 
https://leetcode.com/problems/house-robber-ii/?envType=problem-list-v2&envId=oizxjoit

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [1,2,3]
Output: 3

 

Constraints:

    1 <= nums.length <= 100
    0 <= nums[i] <= 1000


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // handle edge cases
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    
    // helper function to solve regular house robber problem
    const robRange = (start, end) => {
        let rob1 = 0 // represents two houses back
        let rob2 = 0 // represents one house back
        
        // iterate through the range
        for (let i = start; i < end; i++) {
            // current max is either including current house + rob1
            // or excluding current house (rob2)
            const temp = Math.max(nums[i] + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }
        
        return rob2
    }
    
    // return max of either:
    // 1. robbing houses 0 to n-2 or
    // 2. robbing houses 1 to n-1
    return Math.max(
        robRange(0, nums.length - 1),
        robRange(1, nums.length)
    )
}