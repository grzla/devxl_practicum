/* 
https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
*/

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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // convert string to array for easier manipulation
    let chars = s.split('')
    let i = 0
    
    // keep checking pairs until we reach the end
    while (i < chars.length - 1) {
        // if current char matches next char
        if (chars[i] === chars[i + 1]) {
            // splice(startIndex, deleteCount): removes deleteCount elements starting at startIndex
            // here we remove 2 elements starting at index i
            chars.splice(i, 2)
            // move back one position to check new adjacent pairs
            i = Math.max(0, i - 1)
        } else {
            // move to next pair
            i++
        }
    }
    
    // join remaining chars or return 'Empty String' if none left
    return chars.length > 0 ? chars.join('') : 'Empty String'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
