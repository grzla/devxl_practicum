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
 * https://www.hackerrank.com/challenges/camelcase/problem
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    // match all uppercase letters and add 1 for the first word
    return (s.match(/[A-Z]/g) || []).length + 1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}
