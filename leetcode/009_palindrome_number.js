/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // negative numbers can't be palindromes
    if (x < 0) return false
    
    const s = x.toString()
    const stack = []
    
    // push first half of digits onto stack
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        stack.push(s[i])
    }
    
    // skip middle digit if odd length
    let startIndex = Math.ceil(s.length/2)
    
    // compare second half with stack in reverse
    for (let i = startIndex; i < s.length; i++) {
        if (stack.pop() !== s[i]) return false
    }
    
    return true
};

/*
// i like this solution but it is less performant.

var isPalindrome = function(x) {
    let reversed = x.toString().split("").reverse().join("");
    return(x.toString() === reversed);
};

*/