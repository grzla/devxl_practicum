/* 
https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true
*/

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // convert to lowercase and remove non-letters
    let cleanStr = s.toLowerCase().replace(/[^a-z]/g, '')
    
    // create set of unique letters
    let uniqueLetters = new Set(cleanStr)
    
    // check if we have all 26 letters
    return uniqueLetters.size === 26 ? 'pangram' : 'not pangram'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
