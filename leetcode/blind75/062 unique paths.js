/*
https://leetcode.com/problems/unique-paths/description/?envType=problem-list-v2&envId=oizxjoit

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:

Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // create a dp grid filled with 0s
    let dp = Array(m).fill().map(() => Array(n).fill(0))
    
    // initialize first row with 1s (only one way to reach each cell in first row)
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    
    // initialize first column with 1s (only one way to reach each cell in first column)
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    
    // fill the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    console.log(dp)
    return dp[m-1][n-1]
}

// streamlined, slightly more performant
var uniquePaths = function (m, n) {
    let dp = Array.from(new Array(m), () => new Array(n).fill(1));

    for (let row = 1; row < m; row += 1) {
        for (let col = 1; col < n; col += 1) {
            let top = dp[row - 1][col];
            let left = dp[row][col - 1];
            dp[row][col] = top + left;
        }
    }

    return dp[m - 1][n - 1];
};