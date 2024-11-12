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
 * Complete the 'maxHeight' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY wallPositions
 *  2. INTEGER_ARRAY wallHeights
 */

function maxHeight(wallPositions, wallHeights) {
    let maxMudHeight = 0;
    
    for (let i = 0; i < wallPositions.length - 1; i++) {
        const gap = wallPositions[i + 1] - wallPositions[i] - 1;
        if (gap <= 0) continue;
        
        const leftHeight = wallHeights[i];
        const rightHeight = wallHeights[i + 1];
        const minHeight = Math.min(leftHeight, rightHeight);
        const heightDiff = Math.abs(leftHeight - rightHeight);
        
        let maxPossibleHeight;
        
        if (heightDiff >= gap) {
            // If walls differ too much in height, limited by slope
            maxPossibleHeight = minHeight + gap;
        } else {
            // We can build up in the middle
            const remainingGap = gap - heightDiff;
            maxPossibleHeight = minHeight + heightDiff + Math.floor(remainingGap / 2);
        }
        
        maxMudHeight = Math.max(maxMudHeight, maxPossibleHeight);
    }
    
    return maxMudHeight;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wallPositionsCount = parseInt(readLine().trim(), 10);

    let wallPositions = [];

    for (let i = 0; i < wallPositionsCount; i++) {
        const wallPositionsItem = parseInt(readLine().trim(), 10);
        wallPositions.push(wallPositionsItem);
    }

    const wallHeightsCount = parseInt(readLine().trim(), 10);

    let wallHeights = [];

    for (let i = 0; i < wallHeightsCount; i++) {
        const wallHeightsItem = parseInt(readLine().trim(), 10);
        wallHeights.push(wallHeightsItem);
    }

    const result = maxHeight(wallPositions, wallHeights);

    ws.write(result + '\n');

    ws.end();
}
