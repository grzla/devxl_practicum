// given a square matrix, calculate the absolute difference between the sums of its diagonals

function diagonalDifference(arr) {
    let left = 0
    let right = 0
    
    // iterate through array to calculate both diagonals
    for (let i = 0; i < arr.length; i++) {
        // add elements from left-to-right diagonal
        left += arr[i][i]
        // add elements from right-to-left diagonal
        right += arr[i][arr.length - 1 - i]
    }
    
    // return absolute difference
    return Math.abs(left - right)
}