/* 
https://leetcode.com/problems/palindromic-substrings/?envType=problem-list-v2&envId=oizxjoit

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 

Constraints:

    1 <= s.length <= 1000
    s consists of lowercase English letters.


*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // examples: a aa aba abba bbaabb baacaab
    // baaac: b  a__  _a_  __a   aa_  _aa  aaa  c  
    let count = 0 
    
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }
    
    for (let i=0; i<s.length; i++) {
        // count single letter
        count++
        // count odd and even length palindromes
        expandAroundCenter(i, i+1)
        expandAroundCenter(i, i+2)
    }

    return count

};