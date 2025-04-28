/*
https://leetcode.com/problems/top-k-frequent-elements/description/?envType=problem-list-v2&envId=oizxjoit

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create frequency map
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    
    // convert map to array of [num, freq] pairs and sort by frequency
    const sorted = Array.from(freqMap.entries())
        .sort((a, b) => b[1] - a[1])
    
    // take first k elements and return just the numbers
    return sorted.slice(0, k).map(pair => pair[0])
}