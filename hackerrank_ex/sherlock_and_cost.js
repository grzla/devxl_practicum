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
 * https://www.hackerrank.com/challenges/sherlock-and-cost/problem
 * Complete the 'cost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function cost(B) {
    // dp[i][0] represents max sum ending with 1
    // dp[i][1] represents max sum ending with B[i]
    let low = 0  // represents current position's max sum ending with 1
    let high = 0 // represents current position's max sum ending with B[i]
    
    for (let i = 1; i < B.length; i++) {
        // store previous values before updating
        let prevLow = low
        let prevHigh = high
        
        // if current position is 1
        // compare with previous position being 1 or B[i-1]
        low = Math.max(
            prevLow,  // previous was 1, diff is 0
            prevHigh + Math.abs(1 - B[i-1]) // previous was B[i-1]
        )
        
        // if current position is B[i]
        // compare with previous position being 1 or B[i-1]
        high = Math.max(
            prevLow + Math.abs(B[i] - 1), // previous was 1
            prevHigh + Math.abs(B[i] - B[i-1]) // previous was B[i-1]
        )
    }
    
    // return maximum of both possibilities
    return Math.max(low, high)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = cost(B);

        ws.write(result + '\n');
    }

    ws.end();
}
