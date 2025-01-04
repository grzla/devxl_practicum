/* https://www.hackerrank.com/challenges/beautiful-binary-string/problem */

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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // initialize counter for minimum changes needed
    let changes = 0
    
    // iterate through string, checking for "010" pattern
    // we can increment by 1 since we need to check every position
    for (let i = 0; i < b.length - 2; i++) {
        // check if current position starts a "010" pattern
        if (b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0') {
            // if we find "010", we need to make a change
            // changing any of the three digits would work
            // but changing the last '0' is optimal as it prevents
            // overlapping patterns
            changes++
            // skip two positions ahead since we've handled this pattern
            // (i will be incremented by 1 in the loop)
            i += 2
        }
    }
    
    return changes
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const b = readLine();

    const result = beautifulBinaryString(b);

    ws.write(result + '\n');

    ws.end();
}
