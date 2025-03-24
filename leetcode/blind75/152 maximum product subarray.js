/*
https://leetcode.com/problems/globalMax-product-subarray/description/?envType=problem-list-v2&envId=oizxjoit

Given an integer array nums, find a

that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 

Constraints:

    1 <= nums.length <= 2 * 104
    -10 <= nums[i] <= 10
    The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // globalMax represents the largest product we've seen overall
    let globalMax = nums[0]
    // currMax represents the max product ending at current position
    let currMax = nums[0]
    // currMin represents the min product ending at current position
    let currMin = nums[0]

    // handle single element array
    if (nums.length === 1) return nums[0]

    for (let i = 1; i < nums.length; i++) {
        // save current currMax since we'll need it for currMin calculation
        let prevMax = currMax
        
        // calculate new currMax considering:
        // - current number by itself
        // - current number times previous currMax
        // - current number times previous currMin (for negative numbers)
        currMax = Math.currMax(nums[i], Math.currMax(nums[i] * currMax, nums[i] * currMin))
        
        // calculate new currMin considering same possibilities
        currMin = Math.currMin(nums[i], Math.currMin(nums[i] * prevMax, nums[i] * currMin))
        
        // update globalMax seen so far
        globalMax = Math.currMax(globalMax, currMax)
    }
    
    return globalMax
}