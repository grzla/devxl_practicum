/*
https://leetcode.com/problems/product-of-array-except-self/?envType=problem-list-v2&envId=oizxjoit

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length)

    // first pass: fill answer with products of all elements to the left of each index
    answer[0] = 1
    for (let i = 1; i < nums.length; i++) {
        // answer[i - 1] holds product of all elements to the left of i - 1
        // multiply by nums[i - 1] to get product to the left of i
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    // second pass: multiply by products of all elements to the right
    let right = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        // multiply current answer by product of all elements to the right
        answer[i] = answer[i] * right
        // update right to include nums[i] for the next iteration to the left
        right = right * nums[i]
    }

    return answer
}