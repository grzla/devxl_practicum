/* https://leetcode.com/problems/zigzag-conversion/description/ */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // handle edge cases
    if (numRows === 1 || numRows >= s.length) return s
    
    // create array to store each row's characters
    // example for "PAYPALISHIRING" with numRows=3:
    // rows[0] will collect "P   A   H   N"
    // rows[1] will collect "A P L S I I G"
    // rows[2] will collect "Y   I   R    "
    let rows = Array(numRows).fill('')
    
    // track current position and direction
    let currentRow = 0        // which row we're currently adding to
    let isMovingDown = true   // whether we're moving down or up in the zigzag
    
    // iterate through each character in input string
    for (let char of s) {
        // add current character to its row
        rows[currentRow] += char
        
        // determine next row position and direction
        if (isMovingDown) {
            // if we hit bottom row, start moving up
            if (currentRow === numRows - 1) {
                currentRow--
                isMovingDown = false
            } else {
                // continue moving down
                currentRow++
            }
        } else {
            // if we hit top row, start moving down
            if (currentRow === 0) {
                currentRow++
                isMovingDown = true
            } else {
                // continue moving up
                currentRow--
            }
        }
    }
    
    // combine all rows into single string
    // automatically handles spacing since we only stored
    // the actual characters in each row
    return rows.join('')
}