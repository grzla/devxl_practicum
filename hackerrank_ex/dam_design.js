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
    // track the highest mud segment we find
    let maxMudHeight = 0
    
    // check each pair of adjacent walls
    for (let i = 0; i < wallPositions.length - 1; i++) {
        // calculate number of positions between walls
        const gap = wallPositions[i + 1] - wallPositions[i] - 1
        // skip if walls are adjacent
        if (gap <= 0) continue
        
        const leftHeight = wallHeights[i]
        const rightHeight = wallHeights[i + 1]
        
        // check each position between the walls
        for (let pos = 1; pos <= gap; pos++) {
            // max height possible when going up by 1 from left wall
            const fromLeft = leftHeight + pos
            // max height possible when going down by 1 from right wall
            const fromRight = rightHeight + (gap - pos + 1)
            // actual height is limited by both constraints
            const heightAtPos = Math.min(fromLeft, fromRight)
            // update max if this is highest we've seen
            maxMudHeight = Math.max(maxMudHeight, heightAtPos)
        }
    }
    
    return maxMudHeight
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
