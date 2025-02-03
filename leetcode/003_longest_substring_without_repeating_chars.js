/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

function lengthOfLongestSubstring(s: string): number {
    // create a map to store character positions
    let charMap = new Map()
    let maxLength = 0
    let start = 0
    // abba
    for (let end = 0; end < s.length; end++) {
        // if we find a duplicate char, move start pointer to after the first occurrence
        if (charMap.has(s[end])) {
            start = Math.max(start, charMap.get(s[end]) + 1)
        }
        
        // update char position in map
        charMap.set(s[end], end)
        
        // update max length if current window is larger
        maxLength = Math.max(maxLength, end - start + 1)
    }
    
    return maxLength
}

/*
Initial state: 
start = 0, end = 0, maxLength = 0, charMap = {}

Step 1: end = 0, char = 'a'
charMap = { a: 0 }
maxLength = max(0, 0-0+1) = 1
window: [a]bba
        ^
        start,end

Step 2: end = 1, char = 'b'
charMap = { a: 0, b: 1 }
maxLength = max(1, 1-0+1) = 2
window: [ab]ba
        ^
        start

Step 3: end = 2, char = 'b'
Found 'b' in map at position 1
start = max(0, 1+1) = 2
charMap = { a: 0, b: 2 }
maxLength = max(2, 2-2+1) = 2
window: ab[b]a
          ^
          start

Step 4: end = 3, char = 'a'
Found 'a' in map at position 0
start = max(2, 0+1) = 2
charMap = { a: 3, b: 2 }
maxLength = max(2, 3-2+1) = 2
window: abb[a]
          ^
          start
*/