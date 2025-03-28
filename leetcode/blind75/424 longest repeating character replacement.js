/*
https://leetcode.com/problems/longest-repeating-character-replacement/?envType=problem-list-v2&envId=oizxjoit

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

 

Constraints:

    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// this fails some test cases
var characterReplacement = function(s, k) {
    // need to figure out longest substrings interrupted by k chars
    // take current char and assume k replacements for string to determine max string length
    // store first occurrence of different character to return to
    // when k depleted, count any remaining chars and compare to max
    // resume comparison at stored char

    let max = 0
    let next = [0]

    function countSubstring(start) {
        let char = s[start]
        let count = 1
        let rem = k
        let i = start+1
        while ((char === s[i] || rem > 0) && i < s.length) {
            if (char !== s[i]) {
                rem--
                next.push(i)
            }
            count++
            i++

        }
        return count
    }

    while (next.length > 0) {
        max = Math.max(max, countSubstring(next.pop()))
    }

    return max
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // track count of each character in current window
    let counts = {}
    let maxCount = 0  // track most frequent char count
    let maxLength = 0
    let left = 0
    
    for (let right = 0; right < s.length; right++) {
        // expand window and update counts
        // increment count of current char
        counts[s[right]] = (counts[s[right]] || 0) + 1
        maxCount = Math.max(maxCount, counts[s[right]])
        
        // window length - count of most frequent char = number of chars to replace
        // if this exceeds k, shrink window
        let windowLen = right - left + 1
        if (windowLen - maxCount > k) {
            counts[s[left]]--
            left++
        }
        
        maxLength = Math.max(maxLength, right - left + 1)
    }
    
    return maxLength
}