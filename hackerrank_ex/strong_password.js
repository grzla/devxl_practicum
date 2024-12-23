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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // track missing criteria
    let missing = 0
    
    // check each requirement using regex
    if (!/[0-9]/.test(password)) missing++
    if (!/[a-z]/.test(password)) missing++
    if (!/[A-Z]/.test(password)) missing++
    if (!/[!@#$%^&*()\-+]/.test(password)) missing++
    
    // calculate minimum chars needed for length requirement
    let lengthNeeded = Math.max(0, 6 - n)
    
    // return maximum of missing criteria or length needed
    return Math.max(missing, lengthNeeded)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
