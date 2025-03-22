/*
https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=oizxjoit

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

function threeSum(nums) {

};/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // sort array to help with duplicate handling and two-pointer approach
    nums.sort((a, b) => (a - b))

    let results = []

    for (let i = 0; i < nums.length - 2; i++) {

        // skip dupes for first number
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]

            if (sum === 0) {
                results.push([nums[i], nums[l], nums[r]])

                while (l < r && nums[i] === nums[l + 1]) {
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                l++
                r--
            } else if (sum < 0) {
                l++
            } else (
                r--
            )
        }
    }
    return results
}