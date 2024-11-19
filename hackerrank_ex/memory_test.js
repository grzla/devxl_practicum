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
 * Complete the 'maxValues' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY pos
 */

function maxValues(n, pos) {
    let maxSeen = new Array(n).fill(0)
    
    // find min and max selected positions
    let minPos = Math.min(...pos)
    let maxPos = Math.max(...pos)
    
    // for each position, calculate max possible value
    for (let i = 0; i < n; i++) {
        // max value will come from either the furthest left
        // or furthest right selected position
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
