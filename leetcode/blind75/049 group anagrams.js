/*
https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=oizxjoit

Given an array of strings strs, group the

together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {}
    for (let str of strs) {
        let freqMap = {}
        // count frequencies
        for (let s of str) {
            freqMap[s] = (freqMap[s] || 0) + 1
        }
        // create a key from the frequency map
        // will result in ex. 'a1b2c3' key
        let key = Object.entries(freqMap)
            .sort()
            .map(([char, count]) => `${char}${count}`)
            .join('')
        
        // group the anagrams
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(str)
    }

    return Object.values(result)
};

// same O but more performant with Map builtin
var groupAnagrams = function(strs) {
    let result = new Map()

    for (let word of strs) {
        let key = word.split('').sort().join('')

        if (!result.has(key)) {
            result.set(key, [word])
        } else {
            let anagrams = result.get(key)
            anagrams.push(word)
            result.set(key, anagrams)
        }
    }

    return [...result.values()]
}