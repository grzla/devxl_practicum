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
 * https://www.hackerrank.com/challenges/equal/problem
 * Complete the 'equal' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equal(arr) {
    // find minimum value in array
    const minVal = Math.min(...arr)
    let minOps = Number.MAX_SAFE_INTEGER
    
    // we only need to check 5 possible targets (minVal-4 to minVal)
    // because any further reduction would be inefficient
    for (let target = minVal - 4; target <= minVal; target++) {
        let currentOps = 0
        
        // calculate operations needed to reduce each number to target
        for (let num of arr) {
            let diff = num - target
            // break down the difference using 5s, 2s, and 1s greedily
            currentOps += Math.floor(diff / 5)  // use as many 5s as possible
            diff = diff % 5
            currentOps += Math.floor(diff / 2)  // use as many 2s as possible
            diff = diff % 2
            currentOps += diff                  // remaining 1s
        }
        
        minOps = Math.min(minOps, currentOps)
    }
    
    return minOps
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = equal(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
