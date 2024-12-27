/* 
https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    let alterations = 0
    
    // check each character against expected SOS pattern
    for (let i = 0; i < s.length; i++) {
        // determine what letter should be at this position
        let expected = 'SOS'[i % 3]
        
        // if current letter doesn't match expected, count as alteration
        if (s[i] !== expected) {
            alterations++
        }
    }
    
    return alterations
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
