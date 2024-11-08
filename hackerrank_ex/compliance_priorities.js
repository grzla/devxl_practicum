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
 * Complete the 'reassignedPriorities' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY priorities as parameter.
 * 
    A[Input priorities array] --> B[Create a set from priorities to get unique values]
    B --> C[Convert the set back to an array]
    C --> D[Sort the unique priorities array]
    D --> E[Create a map that assigns new priority values starting from 1]
    E --> F[Map the original priorities to their new values using the map]
    F --> G[Return the reassigned priorities array]
 */

function reassignedPriorities(priorities) {
    // create a set from priorities to get unique values, then convert it back to an array and sort it
    const uniquePriorities = Array.from(new Set(priorities)).sort((a, b) => a - b);
    // create a map that assigns new priority values starting from 1
    const priorityMap = new Map(uniquePriorities.map((priority, index) => [priority, index + 1]));

    // map the original priorities to their new values using the map
    return priorities.map(priority => priorityMap.get(priority));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const prioritiesCount = parseInt(readLine().trim(), 10);

    let priorities = [];

    for (let i = 0; i < prioritiesCount; i++) {
        const prioritiesItem = parseInt(readLine().trim(), 10);
        priorities.push(prioritiesItem);
    }

    const result = reassignedPriorities(priorities);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
