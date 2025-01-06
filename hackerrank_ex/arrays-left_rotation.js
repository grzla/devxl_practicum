/* https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true */

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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // handle edge cases
    if (!arr || arr.length === 0) return arr
    
    // get actual rotation amount (in case d > array length)
    const rotations = d % arr.length
    
    // if no rotations needed or full rotation, return original array
    if (rotations === 0) return arr
    
    // slice array into two parts and concatenate in reverse order:
    // [1,2,3,4,5] with 2 rotations becomes:
    // first part [1,2] and second part [3,4,5]
    // then combine as [3,4,5,1,2]
    return [...arr.slice(rotations), ...arr.slice(0, rotations)]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
