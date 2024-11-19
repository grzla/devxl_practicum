'use strict';
/* 
The problem describes a computer network with the following characteristics:
There are n servers (nodes) numbered from 1 to n
Each node has a security value security_val[i]
A hacker must:
Choose a starting node
Can jump from node x to node (x + k)
Collect security values along the way
Stop when the next jump would be out of the network
Rules:
Initially, nodes have 0 security value
Security values are added to running sum as nodes are compromised
Security values can be negative
Task: Choose the optimal starting node to maximize the total security value sum collected.
Example given:
n = 5
security_val = [2, -3, 4, 6, 1]
k = 2
In the example, choosing node 1 as starting point:
Path: 1 → 3 → 5
Values collected: 2 + 4 + 1 = 7
Function Description:
Function name: gainMaxValue
Parameters:
security_val[]: array of integers representing node values
k: integer jump size
Returns:
integer: the maximum security value sum possible
Constraints:
1 ≤ n ≤ 10^6
-10^3 ≤ security_val[i] ≤ 10^3
1 ≤ k ≤ n
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
 * Complete the 'gainMaxValue' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY security_val
 *  2. INTEGER k
 */

function gainMaxValue(security_val, k) {
    const n = security_val.length
    // dp[i] represents the maximum value possible starting from index i
    const dp = new Array(n).fill(-Infinity)
    
    // base cases: for last k positions, their value is just their security value
    for (let i = n - 1; i >= Math.max(0, n - k); i--) {
        dp[i] = security_val[i]
    }
    
    // for each position from right to left
    for (let i = n - k - 1; i >= 0; i--) {
        dp[i] = security_val[i] + dp[i + k]
    }
    
    // find maximum value without using spread operator
    let maxVal = dp[0]
    for (let i = 1; i < n; i++) {
        if (dp[i] > maxVal) {
            maxVal = dp[i]
        }
    }
    return maxVal
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const security_valCount = parseInt(readLine().trim(), 10);

    let security_val = [];

    for (let i = 0; i < security_valCount; i++) {
        const security_valItem = parseInt(readLine().trim(), 10);
        security_val.push(security_valItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = gainMaxValue(security_val, k);

    ws.write(result + '\n');

    ws.end();
}
