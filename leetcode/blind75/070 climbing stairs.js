/*
https://leetcode.com/problems/climbing-stairs/?envType=problem-list-v2&envId=oizxjoit

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45


*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // base case

    if (n <= 2) return n 

    // how many ways to climb 
    let oneStepBefore = 2
    let twoStepsBefore = 1
    let allWays = 0

    for (let i = 3; i <= n; i++) {
        allWays = oneStepBefore + twoStepsBefore 
        twoStepsBefore = oneStepBefore 
        oneStepBefore = allWays
    }

    return allWays
};