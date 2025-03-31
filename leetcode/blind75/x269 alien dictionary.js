/*
https://leetcode.ca/all/269.html

Premium content as this is an actual challenge used by industry

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"

Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"

Example 3:

Input:
[
  "z",
  "x",
  "z"
]

Output: "" 

Explanation: The order is invalid, so return "".

Note:

    You may assume all letters are in lowercase.
    You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
    If the order is invalid, return an empty string.
    There may be multiple valid order of letters, return any one of them is fine.

*/

/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function (words) {
  // create adjacency list. keys are nodes, values are arrays of neighbors (letters that come after the key)
  let adj = {}

  // initialize keys with all unique letters from words
  for (let word of words) {
    for (let char of word) {
      if (!char in adj) {
        adj[char] = new Set()
      }
    }
  }

  // compare adjacent words to build the neighbors for each char. since words are in lexigraphical order, the first char difference we find means char of the second word comes after the char in the first word

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i]
    let word2 = words[i + 1]

    // will not compare more than the shortest word length
    let minLen = Math.min(word1.length, word2.length)
    // compare chars until we find a difference

    // invalid exception handling. if word1 is longer than word 2 and no difference is found, we have an invalid dictionary order
    let foundDiff = false

    for (let j = 0; j < minLen; j++) {
      if (word1[j] !== word2[j]) {
        // found first different char
        // word1[j] must come before word2[j]
        adj[word1[j]].add(word2[j])
        foundDiff = true
        break
      }
    }

    // ["app", "apple"] ✅ (valid - shorter prefix comes first)
    // ["apple", "app"] ❌ (invalid - returns "")
    if (!foundDiff && word1.length > word2.length) {
      return ""  // invalid case so return empty string
    }

    /*
    // the part i don't understand

        // track visited states for cycle detection
    // false = not visited
    // true = visited in current path (cycle!)
    // undefined = visited in different path
    let visited = {}
    for (let char in adj) {
        visited[char] = false
    }
    
    let result = []
    
    // dfs returns true if we found a cycle
    const dfs = (char) => {
        if (visited[char] === true) {
            return true // found a cycle
        }
        if (visited[char] === undefined) {
            return false // already processed
        }
        
        // mark as being visited in current path
        visited[char] = true
        
        // visit all neighbors
        for (let neighbor of adj[char]) {
            if (dfs(neighbor)) {
                return true // propagate cycle detection
            }
        }
        
        // mark as fully processed
        visited[char] = undefined
        // add to result (building from end to start)
        result.push(char)
        return false
    }
    
    // try dfs from each unvisited char
    for (let char in adj) {
        if (visited[char] === false) {
            if (dfs(char)) {
                return "" // found a cycle
            }
        }
    }
    
    return result.reverse().join("")
}
    */

  }

}