/*
https://leetcode.com/problems/generate-parentheses/description/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8


*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    
    function backtrack(open, close, current) {
        console.log(`entering with: ${current}`)
        
        if (current.length === 2 * n) {
            console.log(`✅ found solution: ${current}`)
            result.push(current)
            console.log(`returning to previous call`)
            return
        }
        
        if (open < n) {
            console.log(`trying ( → ${current}(`)
            backtrack(open + 1, close, current + '(')
            console.log(`back from ( at ${current}`)
        }
        
        if (close < open) {
            console.log(`trying ) → ${current})`)
            backtrack(open, close + 1, current + ')')
            console.log(`back from ) at ${current}`)
        }
    }
    
    backtrack(0, 0, '')
    return result
}

/* 
// non-recursive solution
var generateParenthesis = function(n) {
    const result = []
    // each state tracks: [current string, open count, close count]
    const queue = [['', 0, 0]]
    
    while (queue.length > 0) {
        const [current, open, close] = queue.shift()
        
        // if we have a complete valid string, add it
        if (current.length === 2 * n) {
            result.push(current)
            continue
        }
        
        // try adding open parenthesis
        if (open < n) {
            queue.push([current + '(', open + 1, close])
        }
        
        // try adding close parenthesis
        if (close < open) {
            queue.push([current + ')', open, close + 1])
        }
    }
    
    return result
}