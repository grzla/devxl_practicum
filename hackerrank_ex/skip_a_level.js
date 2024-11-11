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
 * Complete the 'maximumPoints' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY costs
 */

function maximumPoints(k, costs) {

    let totalCost = 0;
    let points = 0;

    // calculate total cost and points without skipping any level
    for (let i = 0; i < costs.length; i++) {
        totalCost += costs[i];
        if (totalCost <= k) {
            points++;
        } else {
            break;
        }
    }

    // if total cost is within budget, return the points
    if (totalCost <= k) {
        return points;
    }

    // calculate maximum points when a level is skipped
    let maxPoints = 0;
    for (let i = 0; i < costs.length; i++) {
        let skippedPoints = 0;
        let currentCost = 0;

        for (let j = 0; j < costs.length; j++) {
            if (j !== i) {
                currentCost += costs[j];
                if (currentCost <= k) {
                    skippedPoints++;
                // stop adding costs and points if the total cost exceeds k
                } else {
                    break;
                }
            }
        }

        maxPoints = Math.max(maxPoints, skippedPoints);
    }

    return maxPoints;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const k = parseInt(readLine().trim(), 10);

    const costsCount = parseInt(readLine().trim(), 10);

    let costs = [];

    for (let i = 0; i < costsCount; i++) {
        const costsItem = parseInt(readLine().trim(), 10);
        costs.push(costsItem);
    }

    const result = maximumPoints(k, costs);

    ws.write(result + '\n');

    ws.end();
}
