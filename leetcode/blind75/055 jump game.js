/*
https://leetcode.com/problems/jump-game/?envType=problem-list-v2&envId=oizxjoit

ou are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

 

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 105

*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
The solution transforms what seems like a complex path-finding problem into a simple question: "What's the furthest we can reach?" This is a great example of how sometimes simplifying the way we think about a problem can lead to much cleaner solutions!
*/
var canJump = function(nums) {
    let maxReach = 0

    for (let i = 0; i<=maxReach; i++) {
        maxReach = Math.max(maxReach, i+nums[i])

        if (maxReach >= nums.length-1) {
            return true
        }
    }
    return false

};

/* If we modified the problem to find all possible paths to the end: */
var findAllPaths = function(nums) {
    const allPaths = []
    
    // helper function to do the backtracking
    const backtrack = function(currentIndex, currentPath) {
        // base case: reached the end
        if (currentIndex === nums.length - 1) {
            allPaths.push([...currentPath])
            return
        }
        
        // try all possible jumps from current position
        const maxJump = nums[currentIndex]
        for (let jump = 1; jump <= maxJump; jump++) {
            const nextIndex = currentIndex + jump
            // only proceed if we don't jump past the end
            if (nextIndex < nums.length) {
                currentPath.push(nextIndex)
                backtrack(nextIndex, currentPath)
                currentPath.pop() // backtrack by removing the last jump
            }
        }
    }
    
    // start the backtracking from index 0
    backtrack(0, [0])
    return allPaths
}
