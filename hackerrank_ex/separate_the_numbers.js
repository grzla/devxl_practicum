/* 
https://www.hackerrank.com/challenges/separate-the-numbers/problem?isFullScreen=true
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // reject strings that are too short (need at least 2 digits)
    // or start with 0 (leading zeros not allowed)
    if (s.length < 2 || s[0] === '0') {
        console.log('NO')
        return
    }

    // we only need to check first number lengths up to half the string
    // because the sequence must have at least 2 numbers
    // example: for "91011", we try lengths 1 (9) and 2 (91), but not 3+ 
    for (let len = 1; len <= Math.floor(s.length/2); len++) {
        // extract the first number and convert to BigInt
        // example: if s="91011" and len=1, firstNum = 9n
        let firstNum = BigInt(s.slice(0, len))
        let current = firstNum
        let testStr = ''
        
        // keep adding sequential numbers until we match or exceed
        // the length of the original string
        // example: 9 -> "9", then 10 -> "910", then 11 -> "91011"
        while (testStr.length < s.length) {
            testStr += current.toString()
            // use 1n for BigInt addition
            current += 1n
        }
        
        // if we found an exact match, we've found our sequence
        // example: "91011" matches our test string "91011"
        // built from 9,10,11
        if (testStr === s) {
            console.log('YES', firstNum.toString())
            return
        }
    }
    
    // if we've tried all possible first number lengths
    // and found no match, the string can't be split into
    // a beautiful sequence
    console.log('NO')
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
