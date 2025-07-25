/* 
https://leetcode.com/problems/decode-xored-array/description/


*/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    // start with the first element
    let arr = [first]
    // for each encoded value, get the next original value
    for (let i = 0; i < encoded.length; i++) {
        arr.push(arr[i] ^ encoded[i])
    }
    return arr
}