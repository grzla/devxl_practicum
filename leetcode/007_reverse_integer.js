/* 
    https://leetcode.com/problems/reverse-integer/ 
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // handle negative numbers
    const isNegative = x < 0
    // convert to string and handle negative sign
    let str = Math.abs(x).toString()
    // (no reverse function for strings in js, only arrays)
    // reverse the string and convert back to number
    let reversed = parseInt(str.split('').reverse().join(''))
    // apply negative sign if needed
    reversed = isNegative ? -reversed : reversed
    
    // check 32-bit integer overflow
    if (reversed > 2**31 - 1 || reversed < -(2**31)) return 0
    
    return reversed
}

/*
// alternate/faster math-only solution
var reverse = function(x) {
    let newNum=0,isNegative=false;
    let y=Math.pow(2,31);
    if(x<0) 
    {
        isNegative=true;
        x=-x;
    }
    while(x>0)
    {
        newNum*=10
        newNum+=x%10;
        x=Math.floor(x/10)
    }
    if(newNum>y-1 || -newNum<-y) return 0
    return isNegative?-newNum:newNum
};
*/