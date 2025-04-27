/*
https://leetcode.com/problems/number-of-islands/description/?envType=problem-list-v2&envId=oizxjoit

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.


*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // what defines an island? 
    // any contiguous '1' (non diagonal)
    // count the number of contiguous areas
    // when 1 is encountered: 
    //  - dfs add surrounding 1 coordinates to visited list 
    //  - increment island 
    // avoid recount by checking if the 1 is in a previously counted island area 

    const visited = new Set()
    let islandCount = 0
    
    // dfs to mark all connected land cells as visited
    const exploreLand = (row, col) => {
        // check if out of bounds or already visited or water
        if (
            row < 0 || 
            row >= grid.length || 
            col < 0 || 
            col >= grid[0].length ||
            visited.has(`${row},${col}`) ||
            grid[row][col] === '0'
        ) {
            return
        }

        // mark current cell as visited
        visited.add(`${row},${col}`)

        // explore all 4 directions
        exploreLand(row + 1, col) // down
        exploreLand(row - 1, col) // up
        exploreLand(row, col + 1) // right
        exploreLand(row, col - 1) // left
    }

    // iterate through each cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // if we find unvisited land, we found a new island
            if (grid[row][col] === '1' && !visited.has(`${row},${col}`)) {
                exploreLand(row, col)
                islandCount++
            }
        }
    }

    return islandCount
}