/* https://www.hackerrank.com/challenges/the-love-letter-mystery/problem */

'use strict';

const fs = require('fs');

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
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // track total number of character reductions needed
    let operations = 0
    
    // only need to check up to the middle of string
    // Math.floor handles both even and odd length strings:
    // - "abc" -> length 3 -> checks 1 pair (a vs c)
    // - "abcd" -> length 4 -> checks 2 pairs (a vs d, b vs c)
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        // get ascii value of character from left side
        // e.g., 'a' -> 97, 'b' -> 98, etc.
        let left = s.charCodeAt(i)
        
        // get ascii value of matching character from right side
        // for "abc": when i=0, length=3
        // s.length-1-i = 2, so we get last character
        let right = s.charCodeAt(s.length - 1 - i)
        
        // calculate how many decrements needed to make characters match
        // Math.abs ensures positive number regardless of which char is larger
        // e.g., 'a' vs 'c':
        // - left = 97 ('a'), right = 99 ('c')
        // - |97 - 99| = 2 operations to make them match
        operations += Math.abs(left - right)
    }
    
    // return total number of operations needed to make palindrome
    return operations
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = theLoveLetterMystery(s);

        ws.write(result + '\n');
    }

    ws.end();
}
