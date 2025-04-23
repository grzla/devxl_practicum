/*
https://leetcode.com/problems/word-search/?envType=problem-list-v2&envId=oizxjoit

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

 

Constraints:

    m == board.length
    n = board[i].length
    1 <= m, n <= 6
    1 <= word.length <= 15
    board and word consists of only lowercase and uppercase English letters.

*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    function dfs(i, j, k) {
        if (k === word.length) return true
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false
        
        // mark as visited by changing the cell temporarily
        const tmp = board[i][j]
        board[i][j] = '#'
        
        // check all directions
        for (let [dx, dy] of dirs) {
            if (dfs(i + dx, j + dy, k + 1)) return true
        }
        
        // restore the cell
        board[i][j] = tmp
        return false
    }
    
    // try each cell as starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
}