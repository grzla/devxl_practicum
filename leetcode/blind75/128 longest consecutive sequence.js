/*
https://leetcode.com/problems/longest-consecutive-sequence/?envType=problem-list-v2&envId=oizxjoit

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:

Input: nums = [1,0,1,2]
Output: 3

 

Constraints:

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109


*/

/**
 * @param {number[]} nums
 * @return {number}
 * key insight on this problem is if current num is start of sequence (num-1 does not exist)
 * we can check a set for the presence of consecutive nums.
 */

// ~50ms runtime
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0

    // set creation is O(n). lookup is O(1)
    let numSet = new Set(nums)

    let maxSeq = 1

    for (let i=0; i<nums.length; i++) {
        
        if (!numSet.has(nums[i]-1)) {
            let seq = 1
            let val = nums[i] + 1
            numSet.delete(nums[i])
            while (numSet.has(val)) {
                numSet.delete(val)
                val++
                seq++
            }
            if (seq > maxSeq) {
                maxSeq = seq
            }
        }
    }
    return maxSeq
};

// 34ms runtime iterating on set
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    
    let numSet = new Set(nums)
    let maxSeq = 1
    
    for (let num of numSet) {  // iterate over Set instead of array
        if (!numSet.has(num - 1)) {  // is this the start of a sequence?
            let currentNum = num
            let currentStreak = 1
            
            while (numSet.has(currentNum + 1)) {
                currentNum++
                currentStreak++
            }
            
            maxSeq = Math.max(maxSeq, currentStreak)
        }
    }
    
    return maxSeq
}