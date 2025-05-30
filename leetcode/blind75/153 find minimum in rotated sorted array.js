/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/?envType=problem-list-v2&envId=oizxjoit

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

 

Constraints:

    n == nums.length
    1 <= n <= 5000
    -5000 <= nums[i] <= 5000
    All the integers of nums are unique.
    nums is sorted and rotated between 1 and n times.


*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// theoretical log n, not passing
var findMin = function(nums) {
    // handle single element case
    if (nums.length === 1) return nums[0]

    let left = 0
    let right = nums.length-1

    // if array is not rotated
    if (nums[right] > nums[0]) return nums[0]

    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] > nums[right]) {
            mid = left + 1
        } else {
            right = mid
        }
    }
    return nums[left]
};

// working log n
// [4,5,6,7,0,1,2]
var findMin = function(nums) {
    // handle single element case
    if (nums.length === 1) return nums[0]
    
    let left = 0
    let right = nums.length - 1
    
    // if array is not rotated
    if (nums[right] > nums[0]) return nums[0]
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        // check if mid is the minimum
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
        if (nums[mid - 1] > nums[mid]) return nums[mid]
        
        // decide which half to search
        if (nums[mid] > nums[0]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}