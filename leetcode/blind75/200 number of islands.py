"""
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


"""
from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # early return for empty grid
        if not grid:
            return 0
        
        rows, cols = len(grid), len(grid[0])
        islands = 0
        
        def explore_land(r: int, c: int) -> None:
            # base case: out of bounds or not land
            if not (0 <= r < rows and 0 <= c < cols) or grid[r][c] != '1':
                return
            
            # mark as visited by changing to '0'
            grid[r][c] = '0'
            
            # explore all adjacent cells using tuple unpacking
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                explore_land(r + dr, c + dc)
        
        # iterate through grid using enumerate for cleaner indexing
        for r, row in enumerate(grid):
            for c, cell in enumerate(row):
                if cell == '1':
                    explore_land(r, c)
                    islands += 1
        
        return islands
        