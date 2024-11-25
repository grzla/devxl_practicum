'use strict';

/* 
This is a programming problem about a memory test with n students standing in a row, numbered 0 to n-1. The test runs for m rounds, where in each round:
The teacher selects a position pos[i]
Students are assigned numbers based on their position relative to the teacher:
Students to the right get assigned increasing numbers
Students to the left get assigned decreasing numbers
After all rounds, each student needs to report their highest number received.
The problem includes:
An example with n=6 and position=3
A detailed example with n=5, m=4, and pos=[3,0,1,4]
Function parameters:
n: number of children
pos: array of teacher positions
Constraints:
1 ≤ n ≤ 10⁵
1 ≤ m ≤ 10⁵
0 ≤ pos[i] ≤ n-1
The task is to implement maxValues() to return an array containing the maximum value each student will shout.
*/

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
 * Complete the 'maxValues' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY pos
 */

function maxValues(n, pos) {
    // find min and max positions

    // find the leftmost and rightmost positions that the teacher picks
    // like finding the edges of where the teacher stands during the game
    let minPos = pos[0]
    let maxPos = pos[0]
    for (let i = 1; i < pos.length; i++) {
        if (pos[i] < minPos) minPos = pos[i]
        if (pos[i] > maxPos) maxPos = pos[i]
    }
    
    // initialize array to store the max value for each student

    // for each student (0 to n-1), figure out their biggest number
    // their biggest number will come from either:
    // - when teacher was at leftmost position (minPos)
    // - when teacher was at rightmost position (maxPos)
    // whichever gives them a bigger number wins!
    let maxSeen = new Array(n)
    for (let i = 0; i < n; i++) {
        maxSeen[i] = Math.max(
            Math.abs(i - minPos),
            Math.abs(i - maxPos)
        )
    }
    
    return maxSeen
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const posCount = parseInt(readLine().trim(), 10);

    let pos = [];

    for (let i = 0; i < posCount; i++) {
        const posItem = parseInt(readLine().trim(), 10);
        pos.push(posItem);
    }

    const result = maxValues(n, pos);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
