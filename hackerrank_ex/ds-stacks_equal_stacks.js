/* https://www.hackerrank.com/challenges/equal-stacks/problem?isFullScreen=true */
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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    // calculate initial sums
    let sum1 = h1.reduce((acc, val) => acc + val, 0)
    let sum2 = h2.reduce((acc, val) => acc + val, 0)
    let sum3 = h3.reduce((acc, val) => acc + val, 0)
    
    // continue until all stacks have equal height or become empty
    while (sum1 > 0 && sum2 > 0 && sum3 > 0) {
        // if all sums are equal, we found our answer
        if (sum1 === sum2 && sum2 === sum3) {
            return sum1
        }
        
        // remove cylinder from tallest stack
        if (sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= h1.shift()
        } else if (sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= h2.shift()
        } else {
            sum3 -= h3.shift()
        }
    }
    
    // if we get here, no solution was found
    return 0
}

/* 
// generalized version for k stacks
function equalStacks(stacks) {
    // calculate initial sums for all stacks
    let sums = stacks.map(stack => stack.reduce((acc, val) => acc + val, 0))
    
    // continue until all stacks have equal height or become empty
    while (Math.min(...sums) > 0) {
        // check if all sums are equal
        const allEqual = sums.every(sum => sum === sums[0])
        if (allEqual) {
            return sums[0]
        }
        
        // find the tallest stack and remove its top cylinder
        const maxSum = Math.max(...sums)
        const tallestStackIndex = sums.findIndex(sum => sum === maxSum)
        sums[tallestStackIndex] -= stacks[tallestStackIndex].shift()
    }
    
    // if we get here, no solution was found
    return 0
}
*/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
