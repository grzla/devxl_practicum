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
 * https://www.hackerrank.com/challenges/coin-change/problem
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {
    // create array to store number of ways to make change for each amount
    // initialize with 0 for all amounts from 0 to n
    let ways = new Array(n + 1).fill(0)
    
    // base case: there is 1 way to make amount 0 (using no coins)
    ways[0] = 1
    
    // for each coin denomination
    for (let coin of c) {
        // for each amount from coin value up to target amount
        for (let amount = coin; amount <= n; amount++) {
            // add the number of ways we can make (current amount - coin value)
            // this represents using the current coin + all previous combinations
            ways[amount] += ways[amount - coin]
        }
    }
    
    // return the number of ways to make target amount n
    return ways[n]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

    const ways = getWays(n, c);

    ws.write(ways + '\n');

    ws.end();
}
