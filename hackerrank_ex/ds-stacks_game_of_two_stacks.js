/* https://www.hackerrank.com/challenges/game-of-two-stacks/problem?isFullScreen=true */
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
 * Complete the 'twoStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER maxSum
 *  2. INTEGER_ARRAY a
 *  3. INTEGER_ARRAY b
 */

function twoStacks(maxSum, a, b) {
    // initialize variables to track current sum and count of elements
    let sum = 0
    let count = 0
    let i = 0
    let j = 0
    let maxCount = 0

    // first pass: take elements from stack a while possible
    while (i < a.length && sum + a[i] <= maxSum) {
        sum += a[i]
        i++
        count++
    }

    // store the current maximum count
    maxCount = count

    // second pass: try adding elements from stack b
    // and remove elements from stack a if needed
    while (j < b.length) {
        // add current element from stack b
        sum += b[j]
        j++
        count++

        // remove elements from stack a if sum exceeds maxSum
        while (sum > maxSum && i > 0) {
            i--
            sum -= a[i]
            count--
        }

        // if sum is still valid, update maxCount
        if (sum <= maxSum && count > maxCount) {
            maxCount = count
        }

        // if sum exceeds maxSum and we can't remove more elements from a
        // break the loop
        if (sum > maxSum) {
            break
        }
    }

    return maxCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const maxSum = parseInt(firstMultipleInput[2], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

        const result = twoStacks(maxSum, a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
