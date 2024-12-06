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
 * Complete the 'matrixLand' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function matrixLand(A) {
    const n = A.length
    const m = A[0].length

    // initialize dpPrev with the first row
    let dpPrev = A[0].slice()

    for (let i = 1; i < n; i++) {
        const row = A[i]

        // compute best scores for moving down directly
        const best = dpPrev.map((val, j) => val + row[j])

        // left to right pass
        const left = Array(m)
        left[0] = best[0]
        for (let j = 1; j < m; j++) {
            left[j] = Math.max(best[j], left[j - 1] + row[j])
        }

        // right to left pass
        const right = Array(m)
        right[m - 1] = best[m - 1]
        for (let j = m - 2; j >= 0; j--) {
            right[j] = Math.max(best[j], right[j + 1] + row[j])
        }

        // update dpPrev for next iteration
        for (let j = 0; j < m; j++) {
            dpPrev[j] = Math.max(left[j], right[j])
        }
    }

    // return the maximum value in dpPrev
    return Math.max(...dpPrev)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let A = Array(n);

    for (let i = 0; i < n; i++) {
        A[i] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    const result = matrixLand(A);

    ws.write(result + '\n');

    ws.end();
}
