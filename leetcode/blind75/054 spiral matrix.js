/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100


*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    // edge cases
    if (!matrix || matrix.length === 0) return []
    if (!matrix[0]) return []

    let m = matrix.length // rows
    let n = matrix[0].length  // columns

    // single row
    if (m === 1) return matrix[0]

    // single column 
    if (n === 1) return matrix.map(row => row[0])

    let remaining = m * n

    let left = 0
    let right = n - 1
    let top = 0
    let bottom = m - 1

    // let visited = Array[m][n].fill(0)

    let result = []

    let row = 0
    let col = 0

    while (remaining > 0) {
        // left to right
        for (col = left; col <= right && remaining > 0; col++) {
            result.push(matrix[row][col])
            remaining--
        }
        top++
        row = top
        col = right

        // top to bottom
        for (row = top; row <= bottom && remaining > 0; row++) {
            result.push(matrix[row][right])
            remaining--
        }
        right--
        col = right
        row = bottom

        // right to left
        for (col = right; col >= left && remaining > 0; col--) {
            result.push(matrix[bottom][col])
            remaining--
        }
        bottom--
        row = bottom
        col = left

        // bottom to top
        for (row = bottom; row >= top && remaining > 0; row--) {
            result.push(matrix[row][left])
            remaining--
        }
        left++
        col = left
        row = top
    }
    return result
};
