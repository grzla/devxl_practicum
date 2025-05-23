/*
https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=oizxjoit

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109


*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let freqs = {}

    for (let i=0; i<nums.length; i++) {
        if (freqs[nums[i]]) {
            return true
        }
        freqs[nums[i]] = true
    }
    return false 
};

// using Set
var containsDuplicate = function(nums) {
    const seen = new Set() 

    for (let num of nums) {
        if (seen.has(num)) {
            return true 
        }
        seen.add(num) 
    }
    return false
}

// clever use of Set
var containsDuplicate = function(nums) {
    return new Set(nums).size !== length.nums 
}