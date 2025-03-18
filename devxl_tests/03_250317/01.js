/*

Good Binary Strings

Two definitions follow:
A binary string consists of 0's and/or 1's. For example, 01011, 1111, and 00 are binary strings.
The prefix of a string is any of its substrings that include the beginning of the string. For example, the prefixes of 11010 are 1, 11, 110, 1101, and 11010.

A non-empty binary string is good if the following two conditions are true:
1. The number of 0's is equal to the number of 1's.
2. For every prefix of the binary string, the number of 1's is not less than the number of 0's.

For example, 11010 is not good because it does not have an equal number of 0's and 1's, but 110010 is good because it satisfies both conditions.

A good string can contain multiple good substrings. If two consecutive substrings are good, then they can be swapped as long as the resulting string is still a good string. Given a good binary string, binString, perform zero or more swap operations on its adjacent good substrings such that the resulting string is the largest possible numeric value. Two substrings are adjacent if the last character of the first substring occurs exactly one index before the first character of the second substring.

Example
binString = 1010111000

There are two good binary substrings, 1010 and 111000, among others. Swap these two substrings to get a larger value: 1110001010. This is the largest possible good string that can be formed.

Function Description
Complete the function largestMagical in the editor below.

Function Parameters
str binString: a binary string

Returns
str: the largest possible binary value as a string

Constraints
Each character of binString ∈ {0,1}.
1 ≤ |binString| ≤ 50
binString is a good string.
*/
/**
 * @param {string} binString - input binary string (1 ≤ length ≤ 50)
 * @return {string} - largest possible binary value after swaps
 */
function largestMagical(binString) {
    // track balanced substrings using stack approach
    let segments = []
    let start = 0
    let depth = 0
    
    // find all good substrings
    for (let i = 0; i < binString.length; i++) {
        if (binString[i] === '1') {
            depth++
        } else {
            depth--
        }
        
        // when depth reaches 0, we found a good substring
        if (depth === 0) {
            segments.push(binString.slice(start, i + 1))
            start = i + 1
        }
    }
    
    // sort segments in descending order to get largest possible value
    segments.sort((a, b) => b > a)
    
    return segments.join('')
}