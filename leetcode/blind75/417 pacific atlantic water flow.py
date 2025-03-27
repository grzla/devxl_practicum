"""
https://leetcode.com/problems/pacific-atlantic-water-flow/description/?envType=problem-list-v2&envId=oizxjoit

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:

Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

Example 2:

Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

 

Constraints:

    m == heights.length
    n == heights[r].length
    1 <= m, n <= 200
    0 <= heights[r][c] <= 105


"""

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        if not heights: return []
    
        rows, cols = len(heights), len(heights[0])
        pacific = set()
        atlantic = set()
    
        # run dfs from pacific edges (top row and left col)
        for col in range(cols):
            self.dfs(0, col, pacific, heights)         # top row
        for row in range(rows):
            self.dfs(row, 0, pacific, heights)         # left column
            
        # run dfs from atlantic edges (bottom row and right col)
        for col in range(cols):
            self.dfs(rows-1, col, atlantic, heights)   # bottom row
        for row in range(rows):
            self.dfs(row, cols-1, atlantic, heights)   # right column
        
        # find cells that can reach both oceans
        # convert set of tuples to list of lists for the answer
        return [[r, c] for r, c in pacific & atlantic]

    def dfs(self, row: int, col: int, visited: set, heights: List[List[int]]) -> None:
        # add current cell to visited
        visited.add((row, col))
        
        # all 4 directions: up, down, left, right
        directions = [(-1,0), (1,0), (0,-1), (0,1)]
        
        for dx, dy in directions:
            new_row = row + dx
            new_col = col + dy
            
            # check if new position is:
            # 1. in bounds
            # 2. not visited
            # 3. height >= current height (can flow to current cell)
            if (0 <= new_row < len(heights) and # len(heights) num rows in matrix
                0 <= new_col < len(heights[0]) and #len(heights[0]) is num cols in row
                (new_row, new_col) not in visited and 
                heights[new_row][new_col] >= heights[row][col]): # only add if height >=
                
                self.dfs(new_row, new_col, visited, heights)
    