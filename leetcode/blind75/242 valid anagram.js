/*
https://leetcode.com/problems/valid-anagram/?envType=problem-list-v2&envId=oizxjoit

Given two strings s and t, return true if t is an

of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if lengths are different, they can't be anagrams
    if (s.length !== t.length) return false
    
    // create a frequency map
    const freqMap = {}
    
    // count frequencies in first string
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }
    
    // check frequencies in second string
    for (let char of t) {
        // if character doesn't exist or count becomes negative, not an anagram
        if (!freqMap[char]) return false
        freqMap[char]--
    }
    
    return true
}