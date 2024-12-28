/* 
https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true
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
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    // target string we're looking for
    const target = 'hackerrank'
    let targetIndex = 0
    
    // iterate through each character in input string
    for (let char of s) {
        // if current char matches next needed char in target
        if (char === target[targetIndex]) {
            targetIndex++
        }
        
        // if we've matched all characters
        if (targetIndex === target.length) {
            return 'YES'
        }
    }
    
    // if we didn't find all characters
    return 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = hackerrankInString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
