/* https://www.hackerrank.com/challenges/crush/problem */
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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // create array of size n+1 to store differences
    // we use n+1 to handle 1-based indexing
    let arr = new Array(n + 1).fill(0)
    
    // iterate through each query
    for (let query of queries) {
        const [start, end, value] = query
        
        // add value at start index
        arr[start - 1] += value
        
        // subtract value at position after end
        // this creates the difference array
        if (end < arr.length) {
            arr[end] -= value
        }
    }
    
    // track maximum value and current running sum
    let maxValue = 0
    let currentSum = 0
    
    // calculate prefix sums and track maximum
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        maxValue = Math.max(maxValue, currentSum)
    }
    
    return maxValue
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}
