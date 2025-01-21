/* https://www.hackerrank.com/challenges/maximum-element/problem?isFullScreen=true */
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
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
    // main stack to store all elements
    let stack = []
    // auxiliary stack to keep track of maximum elements at each state
    let maxStack = []
    // array to store results of type 3 operations (maximum queries)
    let result = []
    
    for (let op of operations) {
        // split each operation into type and value (if present)
        let [type, value] = op.split(' ')
        
        if (type === '1') {
            // type 1: push operation
            // convert string value to integer
            value = parseInt(value)
            // add new value to main stack
            stack.push(value)
            
            // maintain maxStack
            // push to maxStack if:
            // 1. maxStack is empty (first element)
            // 2. new value is greater than or equal to current maximum
            if (maxStack.length === 0 || value >= maxStack[maxStack.length - 1]) {
                maxStack.push(value)
            }
        } else if (type === '2') {
            // type 2: pop operation
            // remove top element from main stack
            let popped = stack.pop()
            
            // if we're popping the current maximum value
            // we need to remove it from maxStack as well
            // this maintains the integrity of our maximum tracking
            if (popped === maxStack[maxStack.length - 1]) {
                maxStack.pop()
            }
        } else if (type === '3') {
            // type 3: maximum query operation
            // add current maximum (top of maxStack) to result array
            // maxStack[maxStack.length - 1] always contains the current maximum
            result.push(maxStack[maxStack.length - 1])
        }
    }
    
    // return array containing all maximum values that were queried
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
