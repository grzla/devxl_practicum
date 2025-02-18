/*
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.


*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    // if array is empty, return empty string
    if (strs.length === 0) return ""
    
    // take first string as initial prefix
    let prefix = strs[0]
    
    // iterate through remaining strings
    for (let i = 1; i < strs.length; i++) {
        // while current string doesn't start with our prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // shorten prefix by removing last character
            prefix = prefix.substring(0, prefix.length - 1)
            
            // if prefix becomes empty, no common prefix exists
            if (prefix === "") return ""
        }
    }
    
    // return the final common prefix
    return prefix
}