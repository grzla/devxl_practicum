/**
 * https://leetcode.com/problems/couples-holding-hands/description/
 * 
 * There are n couples sitting in 2n seats arranged in a row and want to hold hands.
 * 
 * The people and seats are represented by an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).
 * 
 * Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.
 * 
 * Example 1:
 * Input: row = [0,2,1,3]
 * Output: 1
 * Explanation: We only need to swap the second (row[1]) and third (row[2]) person.
 * 
 * Example 2:
 * Input: row = [3,2,0,1]
 * Output: 0
 * Explanation: All couples are already seated side by side.
 * 
 * Constraints:
 * 2n == row.length
 * 2 <= n <= 30
 * n is even.
 * 0 <= row[i] < 2n
 * All the elements of row are unique.
 */

/**
 * @param {number[]} row
 * @return {number}
 */
function minSwapsCouples(row) {
    // create a position map for quick lookup
    const pos = {}
    for (let i = 0; i < row.length; i++) {
        pos[row[i]] = i
    }
    
    let swaps = 0
    
    // process each couple (every 2 positions)
    for (let i = 0; i < row.length; i += 2) {
        // get the current person and their partner
        const current = row[i]
        const partner = current ^ 1 // if current is even, partner is current+1; if odd, partner is current-1
        
        // if partner is not in the next position, we need to swap
        if (row[i + 1] !== partner) {
            // find where the partner is currently sitting
            const partnerPos = pos[partner]
            
            // swap the partner with the person in position i+1
            const temp = row[i + 1]
            row[i + 1] = row[partnerPos]
            row[partnerPos] = temp
            
            // update the position map
            pos[row[i + 1]] = i + 1
            pos[row[partnerPos]] = partnerPos
            
            swaps++
        }
    }
    
    return swaps
}

// test cases
console.log(minSwapsCouples([0, 2, 1, 3])) // expected: 1
console.log(minSwapsCouples([3, 2, 0, 1])) // expected: 0  